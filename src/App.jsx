import { useState } from "react";
import blobLeft from "./assets/blob-left.svg";
import blogRight from "./assets/blob-right.svg";
import Start from "./pages/Start";
import Questions from "./pages/Questions";

function App() {
  const [page, setPage] = useState("home");

  function handlePage() {
    setPage("quiz");
  }

  return (
    <>
      <img className="blob-right" src={blogRight} aria-hidden="true" />
      {page === "home" ? <Start onClick={handlePage} /> : <Questions />}
      <img className="blob-left" src={blobLeft} aria-hidden="true" />
    </>
  );
}

export default App;
