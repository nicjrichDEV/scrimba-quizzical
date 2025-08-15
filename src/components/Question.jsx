function Question({ question, questionNum, userAnswer }) {
  const allAnswers = [...question.incorrect_answers, question.correct_answer];
  const radioEls = allAnswers.map((item, index) => {
    return (
      <div key={index}>
        <input type="radio" name={questionNum} id={item} value={item} />
        <label
          htmlFor={item}
          style={{
            backgroundColor:
              userAnswer === item
                ? userAnswer === question.correct_answer
                  ? "green"
                  : "red"
                : null,
          }}
        >
          {item}
        </label>
      </div>
    );
  });

  return (
    <div>
      <h3>{question.question}</h3>
      <fieldset>{radioEls}</fieldset>
    </div>
  );
}

export default Question;
