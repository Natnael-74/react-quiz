import Options from "./Options";

function Question({ question, userAnswer, dispatch }) {
  return (
    <div className="">
      <h4 className="question">{question.question}</h4>
      <Options
        question={question}
        userAnswer={userAnswer}
        dispatch={dispatch}
      />
    </div>
  );
}

export default Question;
