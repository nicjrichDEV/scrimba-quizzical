async function getQuestions() {
    const res = await fetch('https://opentdb.com/api.php?amount=5&type=multiple')
    if (!res.ok) throw new Error('Failed to fetch questions')
    const {results} = await res.json()
    return results
}

export default getQuestions