import './App.css';
import React, { useEffect, useState } from 'react';
import { getCharacters } from './api';
import Main from './Pages/main';

function App() {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await getCharacters();
        setCharacters(response.data.data.results);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, []);

  console.log(characters);

  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;
