import { useState } from 'react'
import './App.css'
import Watch from './components/Watch'
import Strap from './components/Strap'
import Faces from './components/Faces'
import Cart from './components/Cart'


function App() {
  const [currentSlide, setCurrentSlide] = useState(1)
  const [selectedStrap, setSelectedStrap] = useState(0)
  const [isStrapSelected, setIsStrapSelected] = useState(false)
  const [selectedFace, setSelectedFace] = useState(0)
  const [selectedCase, setSelectedCase] = useState(0)
  const [currentMargin, setSelectedMargin] = useState('5%')

  const increaseCurrentSlideHandler = (e) => {
    e.preventDefault()
    setCurrentSlide((prev) => prev + 1)
  }

  // console.log(selectedStrap)



  return (
    <div className="App">
      {currentSlide === 1 ? (
        <Watch
          setCurrentCaseHandler={setSelectedCase}
          currentMargin={currentMargin}
          setSelectedMarginHandle={setSelectedMargin}
          selectedCase={selectedCase}
          selectedStrap={selectedStrap}
          isStrapSelected={isStrapSelected}
          setSelectedFace={setSelectedFace}
          setSelectedStrap={setSelectedStrap}
        />
      ) : currentSlide === 2 ? (
        <Strap
          selectedFace={selectedFace}
          selectedCase={selectedCase}
          selectedStrap={selectedStrap}
          setCurrentStrapHandler={setSelectedStrap}
          currentMargin={currentMargin}
          setSelectedMarginHandle={setSelectedMargin}
          setIsStrapSelected={setIsStrapSelected}
        />
      ) : currentSlide === 3 ? (
        <Faces
          selectedCase={selectedCase}
          selectedStrap={selectedStrap}
          selectedFace={selectedFace}
          currentMargin={currentMargin}
          setSelectedMarginHandle={setSelectedMargin}
          setCurrentFaceHandler={setSelectedFace}
        />
      ) : (
        <Cart dial={selectedCase} face={selectedFace} strap={selectedStrap} setCurrentSlide={setCurrentSlide} isStrapSelected={isStrapSelected} />
      )}

      {currentSlide <= 3 && (
        <button
          onClick={increaseCurrentSlideHandler}
          style={{ marginTop: '90px' }}
        >
          {currentSlide === 1
            ? 'Choose this model'
            : currentSlide === 2
              ? 'Chosse this strap'
              : currentSlide === 3 && 'Buy watch'}
        </button>
      )}

      <div className="bottom-nav">
        {Array.from({ length: 4 }, (_, index) => (
          <div onClick={() => setCurrentSlide(index + 1)} key={index} className="navigation-button" aria-selected={currentSlide === index + 1}>
            <p>{index + 1}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
