const CAT_ENDPONT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
  const response = await fetch(CAT_ENDPONT_RANDOM_FACT)
  const data = await response.json()

  const { fact } = data

  return fact
}
