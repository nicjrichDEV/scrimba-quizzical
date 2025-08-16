import { decode } from "html-entities";
import { useMemo } from "react";

function Question({ question, questionNum, userAnswer, gameDone }) {
  const shuffled = useMemo(() => {
    const allAnswers = [...question.incorrect_answers, question.correct_answer];
    return allAnswers.sort(() => Math.random() - 0.5);
  }, [question]);

  const getAnswerClass = (answer) => {
    if (!gameDone || !userAnswer) return;

    if (answer === question.correct_answer) return "correct-answer";

    if (userAnswer === answer && answer !== question.correct_answer)
      return "incorrect-answer";

    return "";
  };

  const radioEls = shuffled.map((answer) => {
    return (
      <div key={answer}>
        <input
          type="radio"
          name={questionNum}
          id={answer}
          value={answer}
          required={true}
          disabled={gameDone}
        />
        <label htmlFor={answer} className={getAnswerClass(answer)}>
          {decode(answer, { level: "html5" })}
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
