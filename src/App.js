import React from 'react'
import Header from './components/Header/Header'
import DatingCards from './components/DatingCards/DatingCards'
import SwipeButtons from './components/SwipeButton/SwipeButtons'
import './App.css'

function App() {
  return (
    <div className='app'>
      <Header />
      <DatingCards />
      <SwipeButtons />
    </div>
  )
}

export default App
