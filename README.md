# React Quiz

A React-based quiz application that tests your knowledge of React fundamentals. The app fetches questions from a local JSON server and provides an interactive quiz experience with a timer, scoring system, and high score tracking.

## Features

- **Interactive Quiz**: Multiple-choice questions about React.js
- **Timer**: 10-minute countdown for the entire quiz
- **Scoring System**: Points vary by question difficulty (10, 20, or 30 points)
- **High Score**: Tracks your best score across sessions
- **Progress Tracking**: Shows current question number and points earned
- **Responsive Design**: Clean and modern UI

## Tech Stack

- **Frontend**: React 19
- **State Management**: React Hooks (useReducer, useEffect, useState)
- **Data Server**: JSON Server
- **Styling**: CSS

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd react-quiz
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

You need to run both the JSON server and the React app:

1. Start the JSON server (in one terminal):

   ```bash
   npm run server
   ```

   This will serve questions at `http://127.0.0.1:9000/questions`

2. Start the React development server (in another terminal):
   ```bash
   npm start
   ```
   The app will open at `http://localhost:3000`

## How to Play

1. Click "Start Quiz" on the welcome screen
2. Answer each question by selecting one of the four options
3. Click "Next" to proceed to the next question
4. Complete all questions or run out of time
5. View your final score and try to beat your high score!

## Project Structure

```
react-quiz/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── App.js           # Main app component with state management
│   │   ├── Header.js        # App header
│   │   ├── Main.js          # Main content area
│   │   ├── StartScreen.js   # Welcome/start screen
│   │   ├── Question.js      # Question display component
│   │   ├── Options.js       # Answer options component
│   │   ├── Progress.js      # Progress bar and stats
│   │   ├── Timer.js         # Countdown timer
│   │   ├── FinishScreen.js  # Results screen
│   │   ├── Loader.js        # Loading spinner
│   │   └── Error.js         # Error display
│   ├── index.css            # Global styles
│   └── index.js             # App entry point
├── data/
│   └── questions.json       # Quiz questions data
├── package.json
└── README.md
```

## Customizing Questions

Edit `data/questions.json` to add, remove, or modify quiz questions. Each question has:

- `question`: The question text
- `options`: Array of 4 answer choices
- `correctOption`: Index of the correct answer (0-3)
- `points`: Points awarded for correct answer (10, 20, or 30)

## Available Scripts

| Command          | Description                        |
| ---------------- | ---------------------------------- |
| `npm start`      | Runs the React app                 |
| `npm run server` | Runs the JSON server for questions |
| `npm run build`  | Builds the app for production      |
| `npm test`       | Runs tests                         |

## License

MIT
