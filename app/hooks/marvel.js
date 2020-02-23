import { useState, useEffect } from "react"
import { MD5 } from "react-native-crypto-js"

import {
  privateKey as marvelPrivateKey,
  publicKey as marvelPublicKey,
} from "App/config"

const params = (skip = 0) => {
  const privateKey = marvelPrivateKey
  const publicKey = marvelPublicKey

  const generateHash = (privateKey, publicKey, timestamp) =>
    MD5(`${timestamp}${privateKey}${publicKey}`)

  const timestamp = +new Date()
  const hash = generateHash(privateKey, publicKey, timestamp)
  return `apikey=${publicKey}&ts=${timestamp}&hash=${hash}&limit=100&offset=${skip}`
}

export const useMarvelCharacters = () => {
  const [isComplete, setIsComplete] = useState(false)
  const [results, setResults] = useState([])
  const [skip, setSkip] = useState(0)

  const getCharacters = async () => {
    const {
      data: { offset, count, results, total },
    } = await (
      await fetch(
        `https://gateway.marvel.com:443/v1/public/characters?${params(skip)}`,
      )
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

export const useComics = id => {
  const [results, setResults] = useState([])
  const [count, setCount] = useState()
  const [total, setTotal] = useState()
  const [isComplete, setIsComplete] = useState()

  const getComics = async () => {
    const {
      data: { results, count, total },
    } = await (
      await fetch(
        `https://gateway.marvel.com:443/v1/public/characters/${String(
          id,
        )}/comics?${params()}`,
      )
    ).json()

    setResults(results)
    setCount(count)
    setTotal(total)
    setIsComplete(true)
  }

  useEffect(() => {
    getComics()
  }, [])

  return { results, count, total, isComplete }
}
