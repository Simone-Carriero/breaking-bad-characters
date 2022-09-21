import { useState } from 'react'
import './App.scss'
import Header from './components/header/Header'
import Search from './components/search/Search'

function App() {

  return (
    <div className="App">
      <Header />
      <Search />
    </div>
  )
}

export default App