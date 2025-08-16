function Home({ onClick }) {
  return (
    <main className="home-container">
      <h1 className="home-title">Quizzical</h1>
      <p className="home-description">Some description if needed</p>
      <button className="btn" onClick={onClick}>
        Start Quiz
      </button>
    </main>
  );
}

export default Home;
