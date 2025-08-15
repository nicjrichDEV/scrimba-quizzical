import { decode } from "html-entities";

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
          {decode(item, { level: "html5" })}
        </label>
      </div>
    );
  });

  return (
    <div>
      <h3>{decode(question.question, { level: "html5" })}</h3>
      <fieldset>{radioEls}</fieldset>
    </div>
  );
}

export default Question;
