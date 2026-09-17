<div align="center">

# 🤖 iRobot: The Human Logic Party Game

**Literal logic. Physical comedy. Programming panic.**

![Players: 5](https://img.shields.io/badge/PLAYERS-5-blueviolet?style=for-the-badge)
![Play time: 30-60 min](https://img.shields.io/badge/PLAY_TIME-30--60_MIN-blue?style=for-the-badge)
![Ages: 9+](https://img.shields.io/badge/AGES-9%2B-orange?style=for-the-badge)
![Format: Print & Play](https://img.shields.io/badge/FORMAT-PRINT_%26_PLAY-brightgreen?style=for-the-badge)
![Version: v0.1.1](https://img.shields.io/badge/VERSION-v0.1.1-informational?style=for-the-badge)

**Share link:** https://github.com/bayowulf/irobot

**▶ [Launch the Session Simulator](simulator.html)** · **[Read the Rulebook](https://github.com/bayowulf/irobot#-irobot-the-human-logic-party-game)**

</div>

> [!TIP]
> **This page *is* the game.** Everything below is the complete rulebook — nothing to
> install or download. Scroll down, print the cards in §12, grab a timer, and play.

> [!NOTE]
> **Balance testing:** open [`simulator.html`](simulator.html) to run seeded, simulated
> sessions with five virtual players — Alice, Bob, Verity, Julius, and Quentin — complete
> with modeled human reaction times, the timer, buzz/Overrule tokens, and the Glitch and
> Compiler decks. Each run produces a **balance report** on card counts, dead draws, and
> Challenge solvability to guide deck rebalancing.

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
3. Programmers draw a Challenge and a shared hand of cards.
4. Lay cards in a stack, say **"RUN,"** and start the timer (90 seconds).
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

## 🧰 3. Setup (once per session)

| Item | Setup |
| --- | --- |
| Robot | Choose the neutral Robot. Keep the Challenge out of their sight and earshot. |
| Teams | Split the other four into two teams of two. Sit so the Compiler can see the Robot. |
| Timer | 90 seconds standard (use a phone). |
| Programmer hand | Deal a shared hand of **8 cards**, face up, drawn blind from the shuffled deck. Plus **2 wildcards** (blank = any one Action or Parameter). |
| Programmer kit | **1 Overrule token** (cancels one buzz per round). |
| Compiler kit | **3 buzz tokens**, the Glitch deck, and the Compiler cards. |
| Challenge | Draw 1 Challenge card. Keep it hidden from the Robot. |
| Difficulty | Base deck only. The **Advanced deck is off** unless the table agrees (see §12). |

---

## 🔁 4. Round Flow

1. **Draw & Draft** — the Programmers read the Challenge (silently, away from the Robot)
   and look at their hand.
2. **Build the Stack** — lay the cards in execution order, top to bottom.
3. **Press RUN** — say "RUN." The timer starts.
4. **Serial Streaming** — read one card aloud, **verbatim**, one at a time. Wait for the
   Robot to finish and beep before reading the next card.
5. **COMPLETE** — the Robot beeps (or says "COMPLETE") after each command.
6. **Score** — the round ends when the Challenge is done, the timer expires, or the
   Programmers call "STOP."

### Editing the stack
- **Before RUN:** change anything you like.
- **After RUN:** you may **not** edit cards, except immediately after a Compiler Error
  (see §6).

---

## 🗣️ 5. The One Speaking Rule

Programmers (and the Robot) may speak **only words printed on cards**, plus these three:

> **RUN** · **COMPLETE** · **STOP**

Any other word out of a Programmer's mouth is a **Syntax Error**. The Compiler buzzes.
This replaces vague rules like "no natural English" with something anyone can check.

---

## 🐛 6. Compiler Errors & Buzz / Overrule

The Compiler slams the buzzer and yells **"COMPILER ERROR!"** The Robot freezes instantly.

### Valid errors (checkable, not a judgment call)
- **Syntax Error** — a card read out of order; a missing parameter (e.g., MOVE with no
  distance); a word that isn't printed on a card.
- **Runtime Error** — walking into a wall (OutOfBounds), grasping empty air (Null
  Pointer), or attempting a physical impossibility.
- **Not an error** — the Robot being slow, clumsy-but-safe, or "looking silly." Comedy is
  not a bug.

### Buzz & Overrule procedure
1. Compiler spends **1 buzz token** and states the error in one sentence.
2. Programmers may spend their **Overrule token** (1 per round) to cancel it.
   - The Compiler's buzz token is refunded, nothing is lost, and play resumes.
3. Otherwise it's a **valid catch.** The Programmers lose **10 seconds** and **−1 team
   token**, and may fix exactly the offending cards. Resume from the last completed command.

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
| Programmers finish before the timer expires | **+1** |
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

> **Why tokens and not seconds:** mixed ages can track tokens on a table without doing
> clock math, and nobody feels punished by a visible countdown draining away.

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

- When Eco Mode is on, **at least half the cards in the stack must be seated/arm-only**
  (RAISE ARM, LOWER ARM, GRASP, RELEASE, POINT, LOOK, BEEP, FREEZE, OPEN MOUTH).
- If the timer is tight, add **30 seconds**. The table decides together.

---

## 🎬 11. Step Mode vs. Script Mode

| Mode | How it works | Best for |
| --- | --- | --- |
| **Step Mode** (default) | Read one card, Robot executes, beep, next card. | First games, young/older players. |
| **Script Mode** | Read the whole stack once, then the Robot executes it from memory without stopping. | Chaos, big laughs, confident players. |

The table picks per round. Script Mode is harder — award it **+1 bonus** if completed.

---

## 🃏 12. Cards

Print each category on its own color. If you can't print in color, write the color word
in the corner. Symbols are hints, not requirements.

### Blue — Action
| Count | Word | Icon hint | Difficulty |
| --- | --- | --- | --- |
| 4 | MOVE | footprint | Base |
| 3 | ROTATE | curved arrow | Base |
| 2 | RAISE ARM | up arrow + arm | Base |
| 2 | LOWER ARM | down arrow + arm | Base |
| 3 | GRASP | closing fist | Base |
| 2 | RELEASE | open hand | Base |
| 1 | POINT | pointing hand | Base |
| 1 | LOOK | eye | Base |
| 1 | BEEP | speaker | Base |
| 1 | FREEZE | snowflake | Base |
| 1 | SPIN | spinning arrow | Base |
| 1 | BALANCE | scales | Base |
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

### Green — Target
| Count | Word | Icon hint | Difficulty |
| --- | --- | --- | --- |
| 2 | OBJECT IN FRONT | cube | Base |
| 2 | NEAREST SURFACE | table | Base |
| 2 | NEAREST HUMAN | person | Base |
| 1 | MY OTHER HAND | two hands | Base |
| 1 | THE GLASS | cup | Base |
| 1 | THE BALL | circle | Base |
| 1 | THE BOX | box | Base |

### Yellow — Sensor
| Count | Word | Icon hint | Difficulty |
| --- | --- | --- | --- |
| 1 | DISTANCE < 6 INCHES | ruler | Base |
| 1 | TOUCH SENSOR = PRESSED | finger tap | Base |
| 1 | HEAR SOUND = YES | ear | Base |
| 1 | NO OBSTACLE | clear path | Base |

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

### Purple — Advanced (optional, otherwise keep in the box)
| Count | Word | Difficulty |
| --- | --- | --- |
| 2 | REPEAT 3 TIMES | Base-friendly |
| 1 | REPEAT 2 TIMES | Base-friendly |
| 1 | WHILE [CONDITION] | Advanced |
| 1 | IF / THEN | Advanced |
| 1 | ELSE | Advanced |

> Keep REPEAT in the base game — it's easy and funny. Add WHILE/IF-THEN only when the
> table is ready.

### Compiler Cards
| Count | Card | Effect |
| --- | --- | --- |
| 1 | BUZZER | Standard buzz (uses a buzz token). |
| 2 | BUG INJECTION | Add one Glitch card to the Programmers' stack, mid-run. |
| 1 | PATCH | Force the Programmers to add one legal command of your choice. |
| 1 | ROLLBACK | Undo the Robot's last completed action. |

### Wildcards
| Count | Card | Effect |
| --- | --- | --- |
| 2 | BLANK | Counts as any ONE Action or Parameter card. |

---

## 🎯 13. Challenges

Keep the Challenge hidden from the Robot. Difficulty is a suggestion — scale to the table.

### Easy
1. Pick up the ball and put it in the box.
2. Point at the nearest human and beep.
3. Pick up the cup and hand it to the person on your right.
4. Raise both arms, then lower them.

### Medium
5. Walk to the table, pick up the empty glass, and set it on the nearest surface.
6. Put the ball on the table, then hand the cup to a human.
7. Grasp the object in front, rotate 90 degrees, and release it into the box.
8. Touch the nearest human, then point at the nearest surface.

### Hard
9. Get the hat onto someone's head without touching them.
10. Pick up the ball, spin 180 degrees, and place it on the nearest surface.
11. Hand the cup to every human in the room, one at a time.
12. Move to the table, grasp the glass, and return it to the robot's starting spot.

### Script Mode only (execute the whole stack without stopping)
13. Pick up two objects and stack them.
14. Collect one object from each human and deposit them in the box.
15. Move, rotate, grasp, release, and beep — in exactly that order, twice.

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

**Legal spoken words:** only card words + **RUN**, **COMPLETE**, **STOP**.

**Team scoring (resets each session):** complete Challenge +3 · under time +1 · valid error
−1 · Compiler valid catch +2. Never below zero.

**Personal scoring (all night):** +1 Session Star (winning team members) · +1 Comedy Point
(funniest moment) · +1 Good Robot (Challenge completes on your Robot session).

**Titles:** Night Champion (Session Stars) · Comedy Champion (Comedy Points) · Robot MVP
(Good Robot).

**Buzz rules:** Compiler gets 3 buzzes per round; Programmers get 1 Overrule token.
Programmers may spend the Overrule to cancel one buzz (no penalty, Compiler refunded).
Otherwise a buzz = −10 seconds and −1 team token.

**Default robot behaviors:** GRASP with no target = closed fist · MOVE with no distance =
no movement (that's an error) · undefined actions revert to the most mechanical version.

**Safety:** "WILL CAUSE INJURY" is always valid, always free. Then replace the command and
continue.

**Eco Mode:** at least half the stack is seated/arm-only.

**Modes:** Step = one card at a time. Script = memorize and execute without stopping
(+1 bonus).

**Alternate (4 players):** fixed 2v2, Robot on the programming team, score after 2 cycles.
