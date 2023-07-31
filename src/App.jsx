import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Red from './components/Red'
import Blue from './components/Blue'
import Home from './components/Home'
import Orange from './components/Orange'
import Yellow from './components/Yellow'
import Green from './components/Green'

function App() {
  

  return (
    <div id="container">
      <div id="navbar">
        <Link to={"/blue"}>{<h1>Blue</h1>}</Link>
        <Link to={"/red"}>{<h1>Red</h1>}</Link>
        <Link to={"/orange"}>{<h1>Orange</h1>}</Link>
        <Link to={"/yellow"}>{<h1>Yellow</h1>}</Link>
        <Link to={"/green"}>{<h1>Green</h1>}</Link>
        <Link to={"/"}>{<h1>Home</h1>}</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path='/blue' element= {Blue}></Route>
          <Route path='/red' element= {Red}></Route>
          <Route path='/orange' element= {Orange}></Route>
          <Route path='/yellow' element= {Yellow}></Route>
          <Route path='/green' element= {Green}></Route>
          <Route path='/' element= {Home}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
