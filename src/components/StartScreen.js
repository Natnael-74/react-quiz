function StartScreen({ questionLength, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz</h2>
      <h3>{questionLength} questions to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "startGame" })}
      >
        Let's Start
      </button>
    </div>
  );
}

export default StartScreen;
