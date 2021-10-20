import './App.css';
import React, {useState} from 'react'
import StartPage from './Components/Startpage';
import HomePage from './Components/HomePage'

function App() {
  const [showFrontPage, setShowFrontPage] = useState('')

  function correctInfo(info){
    if(typeof info === 'string'){
      alert(`Error: ${info}`)
    } else{
      setShowFrontPage(info)
    }
  }
  return (
    <div className="App">
      {showFrontPage ? <HomePage info = {showFrontPage}/> : <StartPage change = {correctInfo}/>}
    </div>
  );
}

export default App;
