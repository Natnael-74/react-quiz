function Progress({ questions, questionIndex, points, userAnswer }) {
  return (
    <div className="progress">
      <progress
        max={questions.length}
        value={questionIndex + Number(userAnswer !== null)}
      />
      <p>
        <strong>Question {questionIndex + 1}</strong> / {questions.length}
      </p>
      <p>
        {points} /{" "}
        {questions.reduce((total, question) => total + question.points, 0)}
      </p>
    </div>
  );
}

export default Progress;
