import { useState, useEffect } from "react"
import { MD5 } from "react-native-crypto-js"

export const useMarvelCharacters = () => {
  const [isComplete, setIsComplete] = useState(false)
  const [results, setResults] = useState([])
  const [skip, setSkip] = useState(0)

  const privateKey = "e5fed33ce2cf787e9dee2d71a91167aed248ba42"
  const publicKey = "46029f921b35048f53ed53bcf0f8eb11"

  const generateHash = (privateKey, publicKey, timestamp) =>
    MD5(`${timestamp}${privateKey}${publicKey}`)

  const getCharacters = async () => {
    const timestamp = +new Date()
    const hash = generateHash(privateKey, publicKey, timestamp)
    const params = `apikey=${publicKey}&ts=${timestamp}&hash=${hash}&limit=100&offset=${skip}`

    const {
      data: { offset, count, results, total },
    } = await (
      await fetch(`https://gateway.marvel.com/v1/public/characters?${params}`)
    ).json()

    setSkip(offset + count)
    setResults(results)

    if (skip >= total) setIsComplete(true)
  }

  useEffect(() => {
    if (!isComplete) getCharacters()
  }, [results])

  return { results, isComplete }
}
