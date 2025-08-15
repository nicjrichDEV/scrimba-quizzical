import { useState, useEffect } from "react";
import getQuestions from "../api";
import Question from "../components/Question";

function Quiz() {
  // State
  const [questions, setQuestions] = useState([]);
  const [results, setResults] = useState(null);

  console.log(results);

  // Dervied
  const correctAnswers = questions.map((question) => question.correct_answer);

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
    const userAnswers = [...Object.values(answers)];
    const numCorrect = userAnswers.reduce((acc, answer, index) => {
      return acc + (answer === correctAnswers[index] ? 1 : 0);
    }, 0);
    setResults(numCorrect);
  }

  return (
    <main>
      <form onSubmit={checkAnswers}>
        {questions.map((question, index) => {
          // TODO: Figure out a way to mix incorrect and correct answers together randomly
          // TODO: Track incorrect and correct answers via a tally
          // TODO: Play again function return to Start page.
          // TODO: Add HTML Entities library
          return (
            <Question key={index} question={question} questionNum={index} />
          );
        })}
        <button type="submit">Check Answers</button>
      </form>
    </main>
  );
}

export default Quiz;
