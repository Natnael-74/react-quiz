function FinishScreen({ points, questions, highScore, dispatch }) {
  const totalPoints = questions.reduce(
    (total, question) => total + question.points,
    0,
  );
  const percentage = (points / totalPoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🏆";
  if (percentage >= 80) emoji = "🎉";
  if (percentage >= 50) emoji = "🙃";
  if (percentage > 0) emoji = "😐";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>
        You scored <strong>{points}</strong> out of{" "}
        <strong>
          {totalPoints}({Math.ceil(percentage)}%)
        </strong>{" "}
        points.
      </p>
      <p className="highscore"> Highscore: {highScore} points</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restartGame" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
