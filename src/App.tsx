import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.scss';
import Header from './components/header/Header';
import MainSection from './components/main-section/MainSection';
import Search from './components/search/Search';
import Spinner from './components/spinner/Spinner';

export type Data = {
  char_id: number;
  name: string;
  birthday: string;
  img: string;
  status: string;
  nickname: string;
  portrayed: string;
};

function App() {
  const [query, setQuery] = useState('');
  const [characters, setCharacters] = useState<Data[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async () => {
    const baseUrl = 'https://www.breakingbadapi.com/api/characters';
    const characterQuery = `?name=${query}`;

    let url;

    if (query) {
      url = `${baseUrl}${characterQuery}`;
    } else {
      url = baseUrl;
    }

    setLoading(true);
    try {
      const { data } = await axios.get(url);
      setCharacters(data);
    } catch (error: unknown) {
      let message = '';
      if (error instanceof Error) message = error.message;
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  console.log(error);

  useEffect(() => {
    fetchData();
  }, [query]);

  return (
    <div className='App'>
      <Header />
      <Search
        query={query}
        setQuery={setQuery}
      />

      {error && (
        <div style={{ textAlign: 'center', fontSize: '1.5rem', color: 'red' }}>
          {error}
        </div>
      )}
      {loading ? <Spinner /> : <MainSection characters={characters} />}
    </div>
  );
}

export default App;
