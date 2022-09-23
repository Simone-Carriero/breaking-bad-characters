import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.scss'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Search from './components/search/Search'

export type Data = {
  char_id: number,
  name: string
  birthday: string
  img: string
  status: string
  nickname: string
  portrayed: string
}

function App() {
  const [query, setQuery] = useState('')
  const [characters, setCharacters] = useState<Data[]>([])
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    const baseUrl = 'https://www.breakingbadapi.com/api/characters'
    const characterQuery = `?name=${query}`

    let url;

    if (query) {
      url = `${baseUrl}${characterQuery}`
    } else {
      url = baseUrl
    }

    const { data } = await axios.get(url)

    setCharacters(data)
  }

  useEffect(() => {
    fetchData()
  }, [query])
  

  return (
    <div className="App">
      <Header />
      <Search query={query} setQuery={setQuery} />
      <Main characters={characters} />
    </div>
  )
}

export default App