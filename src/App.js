import { useState } from 'react'
import './App.css'
// import Slick from "./components/Slick"
import Watch from './components/Watch'
import Strap from './components/Strap'
import Faces from './components/Faces'
import faces from './components/data/faces'

function App() {
  const [currentSlide, setCurrentSlide] = useState(1)
  const [selectedStrap, setSelectedStrap] = useState(0)
  const [selectedFace, setSelectedFace] = useState(0)
  const [selectedCase, setSelectedCase] = useState(0)

  const increaseCurrentSlideHandler = (e) => {
    e.preventDefault()
    setCurrentSlide((prev) => prev + 1)
  }

  const setCurrentCaseHandler = (index) => {
    setSelectedCase(index)
  }

  const setCurrentStrapHandler = (index) => {
    setSelectedStrap(index)
  }

  const setCurrentFaceHandler = (index) => {
    setSelectedFace(index)
  }

  const setCurrentSlideHandler = (index) => {
    setCurrentSlide(index);
  }

  console.log(currentSlide)

  return (
    <div className="App">
      {currentSlide === 1 ? (
        <Watch setCurrentCaseHandler={setCurrentCaseHandler} />
      ) : currentSlide === 2 ? (
        <Strap
          selectedCase={selectedCase}
          setCurrentStrapHandler={setCurrentStrapHandler}
        />
      ) : currentSlide === 3 ? (
        <Faces
          selectedCase={selectedCase}
          selectedStrap={selectedStrap}
          setCurrentFaceHandler={setCurrentFaceHandler}
        />
      ) : (
        <img src={faces[selectedFace]} alt="img" />
      )}

      <button
        onClick={increaseCurrentSlideHandler}
        style={{ marginTop: '90px' }}
      >
        {currentSlide === 1
          ? 'Choose this model'
          : currentSlide === 2
            ? 'Chosse this strap'
            : currentSlide === 3
              ? 'Buy watch'
              : 'Congo'}
      </button>
      <br />
      {Array.from({ length: 4 }, (_, index) => (
        <button onClick={() => setCurrentSlideHandler(index + 1)} key={index}>Element {index + 1}</button>
      ))}
    </div>
  )
}

export default App
