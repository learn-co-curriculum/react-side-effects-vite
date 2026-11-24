const JokeDisplay = ({ joke, loading, error = null }) => {
  return (
    <div className="joke-container">
      {loading ? 'Loading...' : error ? error : joke}
    </div>
  )
}

export default JokeDisplay
