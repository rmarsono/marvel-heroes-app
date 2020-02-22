import { MD5 } from "react-native-crypto-js"

const privateKey = "e5fed33ce2cf787e9dee2d71a91167aed248ba42"
const publicKey = "46029f921b35048f53ed53bcf0f8eb11"

const generateHash = (privateKey, publicKey, timestamp) =>
  MD5(`${timestamp}${privateKey}${publicKey}`)

export const listCharacters = async () => {
  const timestamp = +new Date()

  const hash = generateHash(privateKey, publicKey, timestamp)

  const params = `apikey=${publicKey}&ts=${timestamp}&hash=${hash}`

  return fetch(`https://gateway.marvel.com/v1/public/characters?${params}`)
    .then(response => response.json())
}