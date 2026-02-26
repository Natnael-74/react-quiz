import { useEffect, useReducer } from "react";
import "./../index.css";

import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Timer from "./Timer";

const initialState = {
  questions: [],
  //loading , error , ready , active , finished
  status: "loading",
  error: null,
  questionIndex: 0,
  userAnswer: null,
  points: 0,
  highScore: 0,
  secondsRemaining: 600,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataError":
      return {
        ...state,
        status: "error",
        error: action.payload,
      };

    case "startGame":
      return {
        ...state,
        status: "active",
      };

    case "newAnswer":
      const question = state.questions.at(state.questionIndex);

      return {
        ...state,
        userAnswer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };

    case "nextQuestion":
      return {
        ...state,
        questionIndex: state.questionIndex + 1,
        userAnswer: null,
      };

    case "finishGame":
      return {
        ...state,
        status: "finished",
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };
    case "restartGame":
      return {
        ...initialState,
        status: "ready",
        highScore: state.highScore,
        questions: state.questions,
      };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 1 ? "finished" : state.status,
      };

    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    questions,
    status,
    error,
    questionIndex,
    userAnswer,
    points,
    highScore,
    secondsRemaining,
  } = state;

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await fetch("http://127.0.0.1:9000/questions");
        if (response.status !== 200) {
          throw new Error("Failed to fetch questions");
        }
        const data = await response.json();

        if (!data.length) {
          throw new Error("No questions found");
        }

        dispatch({
          type: "dataReceived",
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: "dataError",
          payload: error.message,
        });
      } finally {
        dispatch({
          type: "dataLoaded",
        });
      }
    }

    fetchQuestions();
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error error={error} />}
        {status === "ready" && (
          <StartScreen questionLength={questions.length} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              questions={questions}
              questionIndex={questionIndex}
              points={points}
              userAnswer={userAnswer}
            />
            <Question
              question={questions[questionIndex]}
              userAnswer={userAnswer}
              dispatch={dispatch}
            />
            {userAnswer === null ||
            questionIndex === questions.length - 1 ? null : (
              <button
                className="btn btn-ui"
                onClick={() => {
                  dispatch({ type: "nextQuestion" });
                }}
              >
                Next
              </button>
            )}
            <footer>
              <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
              {userAnswer !== null &&
                questionIndex === questions.length - 1 && (
                  <button
                    className="btn btn-ui"
                    onClick={() => dispatch({ type: "finishGame" })}
                  >
                    Finish
                  </button>
                )}
            </footer>
          </>
        )}
        {status === "finished" && (
          <FinishScreen
            dispatch={dispatch}
            points={points}
            questions={questions}
            highScore={highScore}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
