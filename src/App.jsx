import { useState } from "react";
import blobLeft from "./assets/blob-left.svg";
import blogRight from "./assets/blob-right.svg";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";

function App() {
  const [page, setPage] = useState("home");

  function handlePage() {
    setPage("quiz");
  }

  return (
    <>
      <img className="blob-right" src={blogRight} aria-hidden="true" />
      {page === "home" ? <Home onClick={handlePage} /> : <Quiz />}
      <img className="blob-left" src={blobLeft} aria-hidden="true" />
    </>
  );
}

export default App;
