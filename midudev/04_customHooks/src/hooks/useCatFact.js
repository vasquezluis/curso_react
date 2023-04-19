import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/catFact'

export const useCatFact = () => {
  const [randomFact, setRandomFact] = useState('')
  const [threeWords, setThreeWords] = useState('')

  const getThreeWords = (word) => {
    const result = word.split(' ', 3).join(' ')

    return result
  }

  const refreshRandomFact = async () => {
    const response = await getRandomFact()
    const reseponseThreeWords = getThreeWords(response)

    setRandomFact(response)
    setThreeWords(reseponseThreeWords)
  }

  useEffect(() => {
    refreshRandomFact()
  }, [])

  return { randomFact, threeWords, refreshRandomFact }
}
