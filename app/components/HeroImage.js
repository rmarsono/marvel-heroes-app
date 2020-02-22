import React from "react"
import { Image } from "react-native"
import { string } from "prop-types"

const HeroImage = ({ path, extension }) => (
  <Image
    style={{
      width: 150,
      height: 150,
      borderRadius: 75,
      alignSelf: "center",
      borderWidth: 5,
    }}
    source={{ uri: `${path}.${extension}` }}
  />
)

HeroImage.propTypes = {
  extension: string,
  path: string,
}

export default HeroImage