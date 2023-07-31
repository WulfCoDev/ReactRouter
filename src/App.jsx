import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Red from './components/Red'
import Blue from './components/Blue'
import Home from './components/Home'

function App() {
  

  return (
    <div id="container">
      <div id="navbar">
        <Link to={"/blue"}>{<h1>Blue</h1>}</Link>
        <Link to={"/red"}>{<h1>Red</h1>}</Link>
        <Link to={"/"}>{<h1>Home</h1>}</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path='/blue' element= {Blue}></Route>
          <Route path='/red' element= {Red}></Route>
          <Route path='/' element= {Home}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
