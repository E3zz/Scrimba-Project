# 🎲 Tenzies Game (React)

Tenzies is a fun dice game built with React. The goal is to roll until all dice show the same number. You can "hold" dice to prevent them from rerolling. Once all dice match and are held, you win the game!

## 🚀 Features

- 🎯 Win condition: all 10 dice show the same number and are held
- 🎲 Clickable dice to hold/unhold
- 🔁 Roll button to re-roll unheld dice
- 🎉 Confetti animation when you win
- ♿ Automatically focuses the button on game win for accessibility

## 🛠️ Technologies

- React (Hooks: `useState`, `useEffect`, `useRef`)
- CSS for styling
- [react-confetti](https://www.npmjs.com/package/react-confetti)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/tenzies-game.git
   cd tenzies-game
📁 Project Structure
css
Copy
Edit
src/
├── App.js
├── Buttons.js
├── Die.js
├── Buttons.css
├── index.js
└── ...

🔧 How to Play
Click Roll to roll the dice.

Click any die to hold its value.

Keep rolling until all dice are the same and held.

When you win, click New Game to play again!

📸 Screenshots

📃 License
This project is licensed under the MIT License.
