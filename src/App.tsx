import { useState } from 'react'
import './App.scss'
import Header from './components/header/Header'
import Search from './components/search/Search'

function App() {
  const [query, setQuery] = useState('')

  console.log(query)
  return (
    <div className="App">
      <Header />
      <Search query={query} setQuery={setQuery} />
    </div>
  )
}

export default App