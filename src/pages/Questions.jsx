import { useState, useEffect } from "react";
import getQuestions from "../api";
import Question from "../components/Question";

function Quiz() {
  // State
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);

  // Derived
  const correctAnswers = questions.map((question) => question.correct_answer);
  const numCorrect = userAnswers.reduce((acc, answer, index) => {
    return acc + (answer === correctAnswers[index] ? 1 : 0);
  }, 0);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const data = await getQuestions();
        if (!cancelled) setQuestions(data);
      } catch (error) {
        console.error(error);
      }
    }

    load();
    return () => (cancelled = true);
  }, []);

  function checkAnswers(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const answers = Object.fromEntries(formData.entries());
    setUserAnswers([...Object.values(answers)]);
  }

  return (
    <main>
      <form onSubmit={checkAnswers}>
        {questions.map((question, index) => {
          // TODO: Figure out a way to mix incorrect and correct answers together randomly
          // TODO: Play again function return to Start page.
          // TODO: Add HTML Entities library
          return (
            <Question
              key={index}
              question={question}
              questionNum={index}
              userAnswer={userAnswers[index]}
            />
          );
        })}
        <button type="submit">Check Answers</button>
      </form>
    </main>
  );
}

export default Quiz;
