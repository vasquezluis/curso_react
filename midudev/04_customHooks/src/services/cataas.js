const CAT_ENDPONT_IMAGE_BASE = 'https://cataas.com/cat/says/'

export const getCatURL = async (words) => {
  const response = await fetch(`${CAT_ENDPONT_IMAGE_BASE}${words}?size=50&color=red&json=true`)
  const data = await response.json()

  console.log(data)

  const { url } = data

  return url
}
