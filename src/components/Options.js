function Options({ question, userAnswer, dispatch }) {
  const hasAnswered = userAnswer !== null;
  return (
    <ul className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === userAnswer ? "answer" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          disabled={hasAnswered}
          key={index}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </ul>
  );
}

export default Options;
