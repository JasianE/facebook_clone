import './App.css';
import React, {useState} from 'react'
import StartPage from './Components/Startpage';
import HomePage from './Components/HomePage'

function App() {
  const [showFrontPage, setShowFrontPage] = useState('')
  const [token, setToken] = useState('')

  function correctInfo(info){
    if(typeof info === 'string' && info !== 'poo'){
      alert(`Error: ${info}`)
    } else if(info !== 'poo'){
      setShowFrontPage(info.user)
      setToken(info.token)
    } else {
      setShowFrontPage(false)
    }
  }
  return (
    <div className="App">
      {showFrontPage ? <HomePage info = {showFrontPage} change = {correctInfo} token = {token}/> : <StartPage change = {correctInfo}/>}
    </div>
  );
}

export default App;
