import { useState, useEffect } from 'react'
import { getCatURL } from '../services/cataas'

const CAT_IMG_BASE = 'https://cataas.com'

export const useCatImage = ({ fact }) => {
  const [imageURL, setImageURL] = useState('')

  useEffect(() => {
    if (!fact) return

    const getData = async () => {
      const response = await getCatURL(fact)

      setImageURL(`${CAT_IMG_BASE}${response}`)
    }

    getData()
  }, [fact])

  return { imageURL }
}
