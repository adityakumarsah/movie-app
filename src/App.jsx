import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import MovieCard from './Components/MovieCard'
import Home from './pages/Home'
import Favourites from './pages/Favourites'
import { MovieProvider } from './contexts/MovieContexts'
import { Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar'
function App() {
  return (
    <MovieProvider>
    <NavBar/>
    <main className='main-content'>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/favourites' element = {<Favourites/>}/>
      </Routes>
    </main>
    </MovieProvider>
  )
}
export default App;
