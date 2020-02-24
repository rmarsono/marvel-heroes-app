import { useState, useEffect } from "react"
import { MD5 } from "react-native-crypto-js"

import {
  privateKey as marvelPrivateKey,
  publicKey as marvelPublicKey,
} from "App/config"

const params = skip => {
  const privateKey = marvelPrivateKey
  const publicKey = marvelPublicKey

  const generateHash = (privateKey, publicKey, timestamp) =>
    MD5(`${timestamp}${privateKey}${publicKey}`)

  const timestamp = +new Date()
  const hash = generateHash(privateKey, publicKey, timestamp)
  return `apikey=${publicKey}&ts=${timestamp}&hash=${hash}&limit=100&offset=${skip}`
}

export const useMarvelCharacters = () => {
  const [results, setResults] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  const getCharacters = async skip => {
    const {
      data: { count, results: newResults, total },
    } = await (
      await fetch(
        `https://gateway.marvel.com:443/v1/public/characters?${params(skip)}`,
      )
    ).json()

    setResults(results => [...results, ...newResults])

    if (skip >= total) setIsLoaded(true)
    else getCharacters(skip + count)
  }

  useEffect(() => {
    if (!results.length) getCharacters(0)
  }, [])

  return { results, isLoaded }
}

export const useComics = id => {
  const [results, setResults] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  const getComics = async skip => {
    const {
      data: { count, results: newResults, total },
    } = await (
      await fetch(
        `https://gateway.marvel.com:443/v1/public/characters/${String(
          id,
        )}/comics?${params(skip)}`,
      )
    ).json()

    setResults(results => [...results, ...newResults])

    if (skip >= total) setIsLoaded(true)
    else getComics(skip + count)
  }

  useEffect(() => {
    if (!results.length) getComics(0)
  }, [])

  return { results, isLoaded }
}
