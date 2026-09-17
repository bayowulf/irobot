# Archive — the card era

Everything in this folder belongs to the **pre-1.0 card edition** of iRobot. It is kept
for reference only. The live game is the one-sheet **Command Sheet** edition described in
the repository root `README.md`.

| Path | What it is |
| --- | --- |
| `README-cards.md` | The complete card-game rulebook as it stood at v0.7.3. |
| `card-game/print-sheet.html` | Print-and-cut sheet of all card faces (Blue/Orange/Green/Yellow/Red/Purple/Compiler/Joker). |
| `card-game/cut-guide.html` | Blank cut guide for construction-paper card backs. |
| `simulator/simulator.html` | Browser balance-testing simulator for the card game. |
| `simulator/run-sim.js` | Headless Node CLI for batch sessions. |
| `simulator/run-simulator.bat` | Double-click launcher for `simulator.html` (keep all three together). |
| `iRobot The Human Logic Party Game.txt` | The original one-page concept draft. |

## Running the legacy simulator

Double-click `simulator/run-simulator.bat`, or from this folder:

```
node simulator/run-sim.js --seed demo --summary
```

It models the **card** game (deck assembly, Glitch/Compiler decks, team tokens). It does
**not** model Command Sheet play, and it is not maintained.
