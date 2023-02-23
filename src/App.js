import { useState } from 'react'
import './App.css'
// import Slick from "./components/Slick"
import Watch from './components/Watch'
import Strap from './components/Strap'
import Faces from './components/Faces'

function App() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [selectedStrap, setSelectedStrap] = useState();
  const [selectedFace, setSelectedFace] = useState();
  const [selectedCase, setSelectedCase] = useState();

  const increaseCurrentSlideHandler = (e) => {
    e.preventDefault();
    setCurrentSlide(prev => prev + 1);
  }

  console.log(currentSlide)

  return (
    <div className="App">
      {currentSlide === 1 ? (
        <Watch />
      ) : currentSlide === 2 ? (
        <Strap />
      ) : currentSlide === 3 ? (
        <Faces />
      ) : <h1>Congratulations Dhyata!</h1>}

      <button onClick={increaseCurrentSlideHandler} style={{ marginTop: '90px' }}>{currentSlide === 1 ? "Choose this model" : currentSlide === 2 ? "Chosse this strap" : currentSlide === 3 ? "Buy watch" : "Congo"}</button>
      {/* 
      {currentSlide === 1 ? (
        <button onClick={increaseCurrentSlideHandler} style={{ marginTop: '90px' }}>Choose this model</button>
      ) : currentSlide === 2 ? (
        <button>Choose this strap</button>
      ) : (
        <button>Buy watch</button>
      )} */}
    </div>
  )
}

export default App
