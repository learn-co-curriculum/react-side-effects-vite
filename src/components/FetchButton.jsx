const FetchButton = ({ fetchJoke, loading = false }) => {
  return (
    <button
      className="fetch-button"
      onClick={fetchJoke}
      disabled={loading}
    >
      Get a New Joke
    </button>
  )
}

export default FetchButton
