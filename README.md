### Hexlet tests and linter status:
[![Actions Status](https://github.com/akivonen/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/akivonen/frontend-project-44/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/a97677a5bff3182fea43/maintainability)](https://codeclimate.com/github/akivonen/frontend-project-44/maintainability)

### Brain Games
"Brain Games" is a set of five console games inspired by popular mobile brain-pumping apps. Each game asks questions to be answered correctly. Once three correct answers are given, the game ends. Incorrect answers end the game and prompt you to play it again. The games are:

- Calculator. Calculate random arithmetic expressions
- Progression. Find missing numbers in a number sequence
- Determining an even number
- Determining the greatest common divisor
- Determining a prime number

### Installation
```
git clone https://github.com/akivonen/brain-games.git
cd brain-games
make install
make publish
(sudo) npm link
```

### Running

```
brain-calc
brain-progression
brain-even
brain-gcd
brain-prime
```

### Example usage:

```
brain-progression
Welcome to the Brain Games!
May I have your name? Artjom
Hello, Artjom
What number is missing in the progression?
Question: .. 19 21 23 25 27 29 31
Your answer: 17
Correct!
Question: 14 16 18 20 .. 24 26 28
Your answer: 22
Correct!
Question: 17 20 23 26 29 32 35 ..
Your answer: 38
Correct!
Congratulations, Artjom!
```
