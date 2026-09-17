<div align="center">

# 🤖 iRobot: The Human Logic Party Game

**Literal logic. Physical comedy. Programming panic.**

![Players: 5](https://img.shields.io/badge/PLAYERS-5-blueviolet?style=for-the-badge)
![Play time: 30-60 min](https://img.shields.io/badge/PLAY_TIME-30--60_MIN-blue?style=for-the-badge)
![Ages: 9+](https://img.shields.io/badge/AGES-9%2B-orange?style=for-the-badge)
![Format: Print & Play](https://img.shields.io/badge/FORMAT-PRINT_%26_PLAY-brightgreen?style=for-the-badge)
![Version: v0.7.0](https://img.shields.io/badge/VERSION-v0.7.0-informational?style=for-the-badge)

**Share link:** https://github.com/bayowulf/irobot

</div>

> [!TIP]
> **This page *is* the game.** Everything below is the complete rulebook — nothing to
> install or download. Scroll down, print the cards in §12, grab a timer, and play.

> [!NOTE]
> **Balance testing (local only):** clone or download this repo, then double-click
> **`run-simulator.bat`** to launch the session simulator in your browser. It runs seeded,
> simulated sessions with five virtual players — Alice, Bob, Verity, Julius, and Quentin —
> with modeled human reaction times, the timer, buzz/Overrule tokens, and the Glitch and
> Compiler decks. Each run produces a **balance report** on card counts, dead draws, and
> Challenge solvability to guide deck rebalancing.
>
> *The simulator is a browser-only tool and cannot be launched from the GitHub web view —
> run it from a local copy of the repo.*

A print-and-play party game of literal logic, physical comedy, and programming panic for
**5 players** — built for one 9-year-old + two parents + two grandparents.

One player becomes a rigid, instruction-following **Robot**. The other four split into two
teams: the **Programmers**, who feed the Robot card commands one line at a time, and the
**Compiler**, who watches for logic gaps, illegal syntax, and physical crashes. Teams
**swap roles every round**, and a new player takes over as Robot each **session**.

---

## 🚀 0. Quick Start (read this first)

1. Pick one player as the **Robot** — they're neutral, and they keep the role for a whole
   session (4 rounds).
2. The other four split into **two teams of two**. Team A programs first; Team B compiles.
3. Programmers draw a Challenge and take the **entire coding deck** plus **2 jokers**.
4. Assemble a program, say **"RUN,"** then execute it one command at a time.
5. Read one card at a time, **verbatim**. The Robot does it, stops, and beeps.
6. The Compiler buzzes on real errors. Highest team total after 4 rounds wins the session.
7. Hand the Robot to the next player, re-assemble the teams, and reset the team score.

---

## 🎭 1. Premise & Roles

- **The Robot (1 player, neutral):** Executes commands literally. No common sense, no
  intuition, no guessing. **The Robot never sees or hears the Challenge** — only the card
  commands. In Session Play the Robot belongs to neither team and holds the role for the
  whole session. (The only exception is Alternate Mode, §14, where the Robot joins the
  programming team.)
- **The Programmers (2 players):** One team. They draft, arrange, and read the cards aloud
  in order, feeding the Robot line by line.
- **The Compiler (2 players):** The other team. Holds the buzzer, watches for invalid
  syntax and physical crashes, draws Glitch cards, and scores for correct catches.

> **Neither team owns the Robot.** The Programmers direct it and the Compiler opposes
> them, but the Robot itself is neutral and never earns team tokens.

> **Robot hint:** being the Robot is the fun job and needs no reading. It's the best seat
> for the youngest or oldest player. A Robot who stays in character earns Comedy Points.

---

## 📖 2. Session Play (the shape of the game)

The night is a series of **sessions**. Each session is a chapter with one Robot and two
fixed teams.

- **A session = 4 rounds.** One neutral Robot sits out of the teams; the other four form
  two teams of two.
- **Teams swap roles every round** so each team programs twice:

| Round | Programs | Compiles |
| --- | --- | --- |
| 1 | Team A | Team B |
| 2 | Team B | Team A |
| 3 | Team A | Team B |
| 4 | Team B | Team A |

- Team points **accumulate across the session**. When the 4 rounds end, the team with the
  higher total wins the session, and **each member earns +1 Session Star**.
- A session may end early **only by unanimous consent** — no single team can reset away a
  deficit.
- Then a **new Robot** takes over, the teams are **re-assembled** however you like, and team
  points **reset to zero**.

The **Robot is the odd one out** in every session, so the two teams are always an even 2v2
— nobody is stranded, and everybody Robots once.

> **Two scoreboards:** team tokens reset each session; personal Session Stars and Comedy
> Points last all night.

---

## 🎒 What You Need (besides the cards)

Gather these before the first session. None of them are printed cards.

| Item | Qty | Notes |
| --- | --- | --- |
| Timer (phone or stopwatch) | 1 | Two phases: **build 45s** then **execute 60s**. Eco: 60s / 90s (§10). |
| Buzzer (or a bell) | 1 | The Compiler's "COMPILER ERROR!" slam (§6). |
| Buzz tokens (coins/chips) | 3 | The Compiler's buzzes, per round. |
| Overrule token (a different coin) | 1 | Programmers, cancels one buzz per round. |
| Team token markers (coins/chips) | ~20 | Team scoring; reset each session (§7). |
| Scoresheet + pen | 1 | Session Stars, Comedy Points, Good Robot (§7–§8). |
| Ball | 1 | Soft, easy to hold. |
| Cup / empty glass | 1 | A plastic cup is safest. |
| Open box | 1 | For "put it in the box" Challenges. |
| Hat | 1 | For the Challenge in §13. |
| Table / flat surface | 1 | The "nearest surface." |
| Starting-spot marker | 1 | Tape or paper marking where the Robot began. |
| Obstacle / wall | optional | Something to trigger an OutOfBounds error (§6). |

> Everything else is a card: the Coding deck (including its 2 **Jokers**), the Glitch deck,
> and the Compiler cards — print those from §12. A card tray or two helps keep ~60 pieces
> organized.

---

## 🧰 3. Setup (once per session)

| Item | Setup |
| --- | --- |
| Robot | Choose the neutral Robot. Keep the Challenge out of their sight and earshot. |
| Teams | Split the other four into two teams of two. Sit so the Compiler can see the Robot. |
| Timer | Two phases: **build 45 seconds**, then **execute 60 seconds** (use a phone). |
| Programmer deck | The **entire coding deck**, face up, plus **2 Jokers** (stand in for any one card). No hand is dealt — every card is available. |
| Programmer kit | **1 Overrule token** (cancels one buzz per round). |
| Compiler kit | **3 buzz tokens**, the Glitch deck, and the Compiler cards. |
| Challenge | Draw 1 Challenge card. Keep it hidden from the Robot. |
| Difficulty | Advanced cards are **in** the deck. Use Eco Mode (§10) or remove the Advanced cards for an easier table. |

---

## 🔁 4. Round Flow

1. **Reveal the Challenge** — the Programmers read the Challenge (silently, away from the
   Robot) and take the **entire coding deck** plus the 2 Jokers. The **build timer starts
   (45 seconds)**.
2. **Assemble a Program** — lay cards top-to-bottom in execution order. Every movement
   Action (MOVE, ROTATE, SPIN) must be paired with a Parameter card (see The Pairing Rule).
   Targets and Sensors are optional modifiers; `REPEAT` wraps a sub-stack block.
3. **Press RUN** — when ready, say "RUN." The program is now frozen and the **execute timer
   starts (60 seconds)**.
4. **Serial Streaming** — read one command group aloud, **verbatim**, at a time. Wait for the
   Robot to finish and beep before reading the next command.
5. **COMPLETE** — the Robot beeps (or says "COMPLETE") after each command.
6. **Score** — the round ends when the Challenge is done, the execute timer runs out, or the
   Programmers call "STOP."

Both timers are **hard limits**: start each once and let it run to zero — you never add or
subtract time. If the **build timer runs out before RUN**, the Programmers must call RUN
immediately and execute whatever is on the table (an incomplete program usually fails).

### The Pairing Rule

Every movement Action card — **MOVE**, **ROTATE**, **SPIN** — must be paired with a
**Parameter** card. Read the Action, then its Parameter, as one command. An unpaired
movement Action is a **Syntax Error** (§6).

- Any Parameter may pair with any movement Action (`MOVE` + `90 DEGREES` is legal).
- Parameters are **reusable**: one Parameter card may serve any number of movement Actions
  in a round and is never consumed.

### Targets, Sensors & REPEAT

- **Targets are optional modifiers.** `GRASP` alone uses the literal default (closed fist);
  `GRASP` + `THE BALL` grasps the ball. Place the Target card with the Action it modifies.
- **Sensors qualify control flow.** `IF / THEN` and `WHILE` read a Sensor to decide whether
  their block runs.
- **`REPEAT N TIMES` wraps a sub-stack block** — lay the block once beside/below the REPEAT
  card and it executes N times. This is how you repeat a sequence without extra card copies.

### Editing the program
- **Before RUN:** change anything you like.
- **After RUN:** you may **not** edit cards, except immediately after a Compiler Error
  (see §6).

---

## 🗣️ 5. The One Speaking Rule

Programmers (and the Robot) may speak **only words printed on cards**, plus these three:

> **RUN** · **COMPLETE** · **STOP**

A paired movement command is read as **Action, then Parameter** — both must be words
printed on their cards.

Any other word out of a Programmer's mouth is a **Syntax Error**. The Compiler buzzes.
This replaces vague rules like "no natural English" with something anyone can check.

---

## 🐛 6. Compiler Errors & Buzz / Overrule

The Compiler slams the buzzer and yells **"COMPILER ERROR!"** The Robot freezes instantly.

### Valid errors (checkable, not a judgment call)
- **Syntax Error** — a card read out of order; a movement Action (MOVE/ROTATE/SPIN) with
  no paired Parameter; a `REPEAT`/`WHILE`/`IF` with no sub-stack block; a word that isn't
  printed on a card.
- **Runtime Error** — walking into a wall (OutOfBounds), grasping empty air (Null
  Pointer), or attempting a physical impossibility.
- **Not an error** — the Robot being slow, clumsy-but-safe, or "looking silly." Comedy is
  not a bug. Spending the whole build timer without a perfect program is also not an error.

### Buzz & Overrule procedure
1. Compiler spends **1 buzz token** and states the error in one sentence.
2. Programmers may spend their **Overrule token** (1 per round) to cancel it.
   - The Compiler's buzz token is refunded, nothing is lost, and play resumes.
3. Otherwise it's a **valid catch.** The Robot **freezes in place for 10 seconds while the
   execute timer keeps running**, and the Programmers lose **−1 team token**. They may fix
   exactly the offending cards, then resume from the last completed command.

The Compiler has **3 buzzes per round** and the Programmers have **1 Overrule** — no spam,
real stakes. No votes, no debates.

---

## 🧮 7. Scoring

Two scoreboards: **team tokens** (reset each session) and **personal points** (last all
night).

### Team tokens — per session

**Team totals never drop below zero.**

| Event | Tokens |
| --- | --- |
| Programmers complete the Challenge | **+3** |
| **Speed bonus** (completion only): finish with ≥ half the execute timer left **+2** · ≥ quarter left **+1** | **+1/+2** |
| Each **valid** Compiler Error | **−1** |
| Compiler: each **valid** catch | **+2** |

### Personal points — per night (never reset)

| Event | Points | Who |
| --- | --- | --- |
| Win a session | **+1 Session Star** | Each member of the winning team |
| **Comedy Point** — funniest moment of the round (group vote, 1 per round) | **+1** | Any player |
| **Good Robot** — a Challenge completes during your Robot session | **+1** | The Robot |

- The **Comedy Point** goes to a player, not a team — it keeps a losing team laughing.
- The Programmers' **Overrule token** is a resource, not points. Using it just cancels one
  buzz; the Compiler loses nothing.
- The **Good Robot** bonus keeps the neutral Robot trying instead of trolling.

> **Why tokens and not clock math:** each timer only starts once and stops at zero — nobody
> ever adds or subtracts time. A valid catch costs a **token** and a literal **10-second
> freeze** (the execute clock keeps running while the Robot stands still), so mixed ages
> just track tokens on the table instead of doing arithmetic on a countdown.

---

## 🏆 8. Winning the Night

When everyone has had a turn as Robot, crown the titles:

- **Night Champion** — most **Session Stars**.
- **Comedy Champion** — most **Comedy Points**.
- **Robot MVP** — most **Good Robot** points.

Ties are broken by Comedy Points; if still tied, the title is shared. Having three titles
means the 9-year-old can chase laughs while their team chases the Championship.

---

## 🦺 9. Safety Override (absolute)

The Robot may refuse **any** command by saying **"WILL CAUSE INJURY."**

- It costs nothing. No penalty, no argument, no vote.
- The Programmers must replace that command and continue.
- **Safety questions are never scored.** If in doubt, refuse.

To keep everyone in the game, the base deck avoids kneeling, crawling, and fast spinning.
Use **Eco Mode** (§10) for a gentler round.

---

## 🔋 10. Eco Mode

For a grandparent, an injured player, or a tired kid.

- When Eco Mode is on, **at least half the cards in the program must be seated/arm-only**
  (RAISE ARM, LOWER ARM, GRASP, RELEASE, POINT, LOOK, BEEP, FREEZE, OPEN MOUTH).
- Eco Mode also lengthens both timers: **build 60 seconds, execute 90 seconds**. Limits are
  chosen up front and never extended mid-round.

---

## 🎬 11. Step Mode vs. Script Mode

| Mode | How it works | Best for |
| --- | --- | --- |
| **Step Mode** (default) | Read one card, Robot executes, beep, next card. | First games, young/older players. |
| **Script Mode** | Read the whole program once, then the Robot executes it from memory without stopping. | Chaos, big laughs, confident players. |

The table picks per round. Script Mode is harder — award it **+1 bonus** if completed.

---

## 🃏 12. Cards

Print each category on its own color. If you can't print in color, write the color word
in the corner. Symbols are hints, not requirements.

The Blue, Orange, Green, Yellow, and Purple decks are the **Programmers' coding deck** —
all of it is available to them every round. The Red and Compiler cards belong to the
Compiler.

### Blue — Action
| Count | Word | Icon hint | Difficulty |
| --- | --- | --- | --- |
| 4 | MOVE | footprint | Base |
| 3 | ROTATE | curved arrow | Base |
| 2 | RAISE ARM | up arrow + arm | Base |
| 2 | LOWER ARM | down arrow + arm | Base |
| 3 | GRASP | closing fist | Base |
| 3 | RELEASE | open hand | Base |
| 1 | POINT | pointing hand | Base |
| 1 | LOOK | eye | Base |
| 1 | BEEP | speaker | Base |
| 1 | FREEZE | snowflake | Base |
| 1 | SPIN | spinning arrow | Base |
| 1 | OPEN MOUTH | open mouth | Eco |
| 1 | CLOSE EYES | closed eye | Eco |

### Orange — Parameter
| Count | Word | Icon hint | Difficulty |
| --- | --- | --- | --- |
| 3 | 1 STEP | one dot | Base |
| 2 | 2 STEPS | two dots | Base |
| 2 | 90 DEGREES | right angle | Base |
| 1 | 180 DEGREES | half turn | Base |
| 3 | LEFT | left arrow | Base |
| 3 | RIGHT | right arrow | Base |
| 1 | FORWARD | up arrow | Base |
| 1 | SPEED 50% | half gauge | Base |

> **Parameters are reusable.** One Parameter card may pair with any number of movement
> Actions in a round and is never consumed. See The Pairing Rule in §4.

### Green — Target
| Count | Word | Icon hint | Difficulty |
| --- | --- | --- | --- |
| 2 | OBJECT IN FRONT | cube | Base |
| 2 | NEAREST SURFACE | table | Base |
| 2 | NEAREST HUMAN | person | Base |
| 1 | MY OTHER HAND | two hands | Base |
| 1 | THE GLASS | tumbler | Base |
| 1 | THE CUP | cup | Base |
| 1 | THE BALL | circle | Base |
| 1 | THE BOX | box | Base |
| 1 | THE HAT | hat | Base |

> **Targets are optional modifiers.** Place one beside an Action to specify *what* it acts
> on. With no Target, the Robot uses the literal default (`GRASP` = closed fist).

### Yellow — Sensor
| Count | Word | Icon hint | Difficulty |
| --- | --- | --- | --- |
| 1 | DISTANCE < 6 INCHES | ruler | Base |
| 1 | TOUCH SENSOR = PRESSED | finger tap | Base |
| 1 | HEAR SOUND = YES | ear | Base |
| 1 | NO OBSTACLE | clear path | Base |

> **Sensors are optional modifiers.** Place one beside `IF / THEN` or `WHILE` to set the
> condition that block tests.

### Red — Glitch (Compiler draws and injects)
| Count | Word | Effect |
| --- | --- | --- |
| 1 | LOW BATTERY | Speak in slow motion for the next 3 commands. |
| 1 | SENSOR MALFUNCTION | Ignore the next command entirely. |
| 1 | WHEELS SLIP | Do the opposite of the next direction. |
| 1 | LANGUAGE CORRUPTED | End every sentence with "beep." |
| 1 | FIRMWARE UPDATE | Freeze for 5 seconds. |
| 1 | DEJA VU | Repeat the last command you executed. |
| 1 | OVERHEAT | Fan yourself with both hands. |
| 1 | SOFTWARE UPDATE | Stand still and hum until the next card. |

### Purple — Advanced (in the deck)
| Count | Word | Difficulty |
| --- | --- | --- |
| 2 | REPEAT 3 TIMES | Base-friendly |
| 1 | REPEAT 2 TIMES | Base-friendly |
| 1 | WHILE [CONDITION] | Advanced |
| 1 | IF / THEN | Advanced |
| 1 | ELSE | Advanced |

> **`REPEAT N TIMES` wraps a sub-stack block:** lay the block once beside/below the REPEAT
> card and it runs N times — the way to repeat without extra copies. `WHILE`/`IF` read a
> paired Sensor. Remove the Advanced cards for a gentler table (or use Eco Mode, §10).

### Compiler Cards
| Count | Card | Effect |
| --- | --- | --- |
| 1 | BUZZER | Standard buzz (uses a buzz token). |
| 2 | BUG INJECTION | Add one Glitch card to the Programmers' program, mid-run. |
| 1 | PATCH | Force the Programmers to add one legal command of your choice. |
| 1 | ROLLBACK | Undo the Robot's last completed action. |

### Jokers
| Count | Card | Effect |
| --- | --- | --- |
| 2 | JOKER | Stands in for any ONE card (Action, Parameter, Target, or Sensor). |

---

## 🎯 13. Challenges

Keep the Challenge hidden from the Robot. Difficulty is a suggestion — scale to the table.

**Each Challenge is a goal, not a script.** The Programmers may solve it with **any legal
program** that gets the job done — the wording describes the outcome, not a required
sequence. Different teams should build different programs.

### Easy
1. Pick up the ball and put it in the box.
2. Point at the nearest human and beep.
3. Pick up the cup and hand it to the person on your right.
4. Raise both arms, then lower them.
5. Look at the nearest human and beep.
6. Rotate to face the nearest surface and point at it.

### Medium
7. Walk to the table, pick up the empty glass, and set it on the nearest surface.
8. Put the ball on the table, then hand the cup to a human.
9. Grasp the object in front, rotate 90 degrees, and release it into the box.
10. Touch the nearest human, then point at the nearest surface.

### Hard
11. Get the hat onto someone's head without touching them.
12. Pick up the ball, spin 180 degrees, and place it on the nearest surface.
13. Hand the cup to every human in the room, one at a time.
14. Move to the table, grasp the glass, and return it to the robot's starting spot.

### Script Mode only (execute the whole program without stopping)
15. Pick up two objects and stack them.
16. Collect one object from each human and deposit them in the box.
17. Move, rotate, grasp, release, and beep — in exactly that order, twice.

### Extra Challenges (cards that were previously unused)
18. *(Easy)* Pass the ball to your other hand. — uses **MY OTHER HAND**
19. *(Easy)* Freeze, then beep. — uses **FREEZE**
20. *(Easy)* Open your mouth, then close your eyes. — uses **OPEN MOUTH** / **CLOSE EYES**
21. *(Medium)* While there is no obstacle, walk to the table and pick up the glass. — uses **WHILE** + **NO OBSTACLE**
22. *(Medium)* If the touch sensor is pressed, grasp the object in front and release it. — uses **IF / THEN** + **TOUCH SENSOR = PRESSED**
23. *(Easy)* If you hear a sound, beep. — uses **HEAR SOUND = YES**
24. *(Easy)* While the distance is under 6 inches, freeze. — uses **DISTANCE < 6 INCHES**

> Direction Parameters (`LEFT` / `RIGHT` / `FORWARD`) and `SPEED 50%` appear as alternate
> MOVE Parameters in several Challenges above.

> With the full deck available, difficulty comes from **program length and order**, not from
> what you happened to draw. Long Challenges can be built with `REPEAT` blocks instead of
> extra copies.

---

## 🔄 14. Alternate Mode: Round-Robin

Use this for **exactly 4 players** or a quick single-round night. There is no neutral Robot
here — the Robot plays on the Programmers' team.

- Fix **two teams of two**. The Robot is a member of the team that's programming.
- Each round, a **different player** is the Robot (rotate within the teams).
- Teams **alternate** which side programs, and team tokens accumulate.
- A **cycle** = every player has been the Robot once.
- **Win:** most team tokens after **2 cycles**. Ties are broken by Comedy Points.

Everything else in this document — speaking rule, errors, buzz/Overrule, safety, Eco Mode,
Step vs. Script, cards, and Challenges — works the same.

---

## 📋 15. Cheat Sheet

**Roles:** Robot (neutral in Session Play; on the programming team in Alternate Mode, §14
— obeys literally, never sees the Challenge) · Programmers (one team, read cards) ·
Compiler (other team, buzzes and injects Glitches).

**Session:** 4 rounds; teams swap Programmer/Compiler each round. Reset team tokens for a
new Robot. Early end only by unanimous consent.

**Programmers' deck:** the whole coding deck + 2 Jokers, every round. No hand is dealt.

**Timers:** build 45s (assemble the program) then execute 60s (run it). Eco: 60s / 90s.
Both are hard limits; if the build timer expires, RUN immediately with what's on the table.

**Legal spoken words:** only card words + **RUN**, **COMPLETE**, **STOP**.

**Team scoring (resets each session):** complete Challenge +3 · valid error −1 · Compiler
valid catch +2. Never below zero.

**Personal scoring (all night):** +1 Session Star (winning team members) · +1 Comedy Point
(funniest moment) · +1 Good Robot (Challenge completes on your Robot session).

**Titles:** Night Champion (Session Stars) · Comedy Champion (Comedy Points) · Robot MVP
(Good Robot).

**Buzz rules:** Compiler gets 3 buzzes per round; Programmers get 1 Overrule token.
Programmers may spend the Overrule to cancel one buzz (no penalty, Compiler refunded).
Otherwise a buzz = a **10-second Robot freeze while the execute clock runs**, plus −1 token.

**Pairing:** every **MOVE**, **ROTATE**, or **SPIN** needs a paired Parameter card. Any
Parameter works, and Parameters are reusable within a round (§4).

**Modifiers:** Targets specify *what* an Action acts on (optional); Sensors set the condition
for `IF`/`WHILE` (optional). `REPEAT N TIMES` wraps a sub-stack block. Jokers stand in for
any one card.

**Default robot behaviors:** GRASP with no target = closed fist · MOVE with no distance =
no movement (that's an error) · undefined actions revert to the most mechanical version.

**Safety:** "WILL CAUSE INJURY" is always valid, always free. Then replace the command and
continue.

**Eco Mode:** at least half the program is seated/arm-only; timers 60s / 90s.

**Modes:** Step = one card at a time. Script = memorize and execute without stopping
(+1 bonus).

**Alternate (4 players):** fixed 2v2, Robot on the programming team, score after 2 cycles.
