import { useState, useEffect } from "react";
import getQuestions from "../api";
import Question from "../components/Question";

function Quiz() {
  const [questions, setQuestions] = useState([]);

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
    console.log(answers);
  }

  return (
    <main>
      <form onSubmit={checkAnswers}>
        {questions.map((question, index) => {
          // TODO: Create a question component. Maybe a form with radio buttons?
          // TODO: Figure out a way to mix incorrect and correct answers together randomly
          // TODO: Figure out if each form has state some how?
          // TODO: Is Questions component one giant form with a single form action to check all answers?
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
