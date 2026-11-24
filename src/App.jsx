import React, { useState, useEffect } from 'react';
import FetchButton from './components/FetchButton';
import JokeDisplay from './components/JokeDisplay';

const JOKE_API_URL =
  'https://v2.jokeapi.dev/joke/Programming?type=single';

function App() {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchJoke = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(JOKE_API_URL);
      if (typeof response.ok === 'boolean' && !response.ok) {
        throw new Error('HTTP error! Status: ' + response.status);
      }
      const data = await response.json();
      if (!data.joke) {
        throw new Error('Response did not include a joke');
      }
      setJoke(data.joke);
    } catch {
      setError('Failed to fetch joke. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="app-container">
      <h1>Programming Joke Generator</h1>
      <JokeDisplay joke={joke} loading={loading} error={error} />
      <FetchButton fetchJoke={fetchJoke} loading={loading} />
    </div>
  );
}

export default App;