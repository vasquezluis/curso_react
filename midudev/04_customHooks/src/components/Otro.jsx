import { useCatImage } from '../hooks/useCatImage'

export const Otro = () => {
  const { imageURL } = useCatImage({ fact: 'Random fact' })

  return (
    <div>
      {imageURL && <img src={imageURL} />}
    </div>
  )
}
