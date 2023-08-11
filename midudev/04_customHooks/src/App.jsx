import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

// import { Otro } from './components/Otro'

function App () {
  const { randomFact, threeWords, refreshRandomFact } = useCatFact()
  const { imageURL } = useCatImage({ fact: threeWords })

  const handleClick = async () => {
    refreshRandomFact()
  }

  return (
    <div className='App'>
      <button onClick={handleClick}>Get get fact</button>
      <p>Fact: {randomFact}</p>
      <img src={imageURL} alt={threeWords} />

      {/* <Otro /> */}

    </div>
  )
}

export default App
