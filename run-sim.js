#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const HTML = path.join(ROOT, "simulator.html");
const VERSION = "0.6.0";

function makeEl(){
  const el = {
    _html: "", style: {}, scrollTop: 0, textContent: "", value: "", checked: false,
    classList: { add(){}, remove(){}, toggle(){} },
    addEventListener(){}, insertAdjacentHTML(){}, appendChild(){}, click(){},
    setAttribute(){}, getAttribute(){ return null; }
  };
  Object.defineProperty(el, "innerHTML", { get(){ return el._html; }, set(v){ el._html = v; } });
  return el;
}

function installDomStubs(){
  const els = {};
  global.document = {
    querySelector(s){ return els[s] || (els[s] = makeEl()); },
    createElement(){ return makeEl(); },
    createElementNS(){ return makeEl(); }
  };
  global.window = global;
  global.location = { search: "" };
  global.requestAnimationFrame = () => 0;
  global.cancelAnimationFrame = () => {};
  global.Blob = function(){};
  global.URL = global.URL || {};
  global.URL.createObjectURL = () => "";
  global.URL.revokeObjectURL = () => {};
}

function loadEngine(){
  const html = fs.readFileSync(HTML, "utf8");
  const m = html.match(/<script>([\s\S]*)<\/script>/);
  if (!m) throw new Error("No <script> block found in " + HTML);
  installDomStubs();
  const src = m[1] + "\nglobalThis.__simulate = simulate;\nglobalThis.__diagnostics = buildDiagnostics;\n";
  (0, eval)(src);
  if (typeof globalThis.__simulate !== "function") throw new Error("Engine did not expose simulate()");
}

function parseArgs(argv){
  const out = { seed: null, eco: false, adv: false, robot: "quentin", count: 1, out: "logs", summary: false };
  for (let i = 0; i < argv.length; i++){
    const a = argv[i];
    if (a === "--seed") out.seed = argv[++i];
    else if (a === "--eco") out.eco = true;
    else if (a === "--adv") out.adv = true;
    else if (a === "--robot") out.robot = argv[++i];
    else if (a === "--count") out.count = Math.max(1, parseInt(argv[++i], 10) || 1);
    else if (a === "--out") out.out = argv[++i];
    else if (a === "--summary") out.summary = true;
    else if (a === "--help" || a === "-h") { usage(); process.exit(0); }
    else { console.error("Unknown argument: " + a); usage(); process.exit(1); }
  }
  return out;
}

function usage(){
  console.log([
    "iRobot headless session simulator",
    "",
    "  node run-sim.js [options]",
    "",
    "  --seed S      seed string (default: random per run)",
    "  --count N     number of sessions to run (default 1)",
    "  --eco         enable Eco Mode (120s timer)",
    "  --adv         include the Advanced (purple) deck",
    "  --robot ID    robot player id (default quentin)",
    "  --out DIR     output directory for logs (default logs)",
    "  --summary     print diagnostics and scores to stdout",
    ""
  ].join("\n"));
}

function logLines(events){
  return events.map(ev => {
    const timer = (ev.remaining === null || ev.remaining === undefined)
      ? "timer=--"
      : "timer=" + Number(Math.max(0, ev.remaining)).toFixed(1) + "s";
    return `[R${ev.round || 0} t=${Number(ev.t).toFixed(1)}s ${timer}] ${String(ev.kind).toUpperCase()} — ${ev.text}`;
  });
}

function writeRun(seed, cfg, dir){
  const sim = globalThis.__simulate(cfg);
  const events = sim.events;
  const A = sim.analytics;
  const meta = {
    tool: "iRobot Session Simulator", version: VERSION, seed,
    eco: cfg.eco, adv: cfg.adv, robot: cfg.robot, generated: new Date().toISOString()
  };

  const header = [
    `iRobot Session Simulator v${VERSION}`,
    `seed=${seed}  eco=${cfg.eco}  adv=${cfg.adv}  robot=${cfg.robot}`,
    `events=${events.length}  hands=${A.hands}  completed=${A.completed}  winner=${A.winner}`,
    "----------------------------------------------------------------"
  ].join("\n");

  const base = path.join(dir, seed.replace(/[^\w.-]+/g, "_"));
  fs.writeFileSync(base + ".log", header + "\n" + logLines(events).join("\n") + "\n", "utf8");
  fs.writeFileSync(base + ".json", JSON.stringify({ meta, analytics: A, events }, null, 2), "utf8");
  return { seed, base, A, diagnostics: globalThis.__diagnostics(A) };
}

function main(){
  const opts = parseArgs(process.argv.slice(2));
  const dir = path.isAbsolute(opts.out) ? opts.out : path.join(ROOT, opts.out);
  fs.mkdirSync(dir, { recursive: true });
  loadEngine();

  const seeds = [];
  for (let i = 0; i < opts.count; i++){
    seeds.push(opts.seed ? (opts.count > 1 ? `${opts.seed}-${i + 1}` : opts.seed) : Math.random().toString(36).slice(2, 10));
  }

  const results = [];
  seeds.forEach(seed => {
    const r = writeRun(seed, { seed, eco: opts.eco, adv: opts.adv, robot: opts.robot }, dir);
    results.push(r);
    if (opts.summary){
      const A = r.A;
      console.log(`\n=== ${seed} — winner: ${A.winner} | rounds complete: ${A.completed}/${A.rounds.length} | tokens A:${A.finalScores.team.A} B:${A.finalScores.team.B} ===`);
      console.log(`  assembly: ${A.buildTimeouts} build timeout(s) · ${A.cardShortages} card shortage(s) · ${A.jokersUsed} joker(s) · ${A.targetsUsed} target(s) · ${A.repeatBlocks} REPEAT block(s)`);
      console.log(`  errors: syntax ${A.errors.syntax} · runtime ${A.errors.runtime} · missed ${A.errors.missed} · buzzes ${A.buzz.used}`);
      r.diagnostics.forEach(d => console.log("   - " + d.replace(/<[^>]+>/g, "")));
    } else {
      console.log(`wrote ${path.relative(ROOT, r.base)}.log and .json`);
    }
  });
  console.log(`\n${results.length} session(s) written to ${path.relative(ROOT, dir) || "."}`);
}

main();
