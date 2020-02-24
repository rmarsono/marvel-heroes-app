import React from "react"
import { Image, StyleSheet } from "react-native"
import { string } from "prop-types"

const HeroImage = ({ path, extension }) => (
  <Image style={styles.base} source={{ uri: `${path}.${extension}` }} />
)

const styles = StyleSheet.create({
  base: {
    width: 150,
    height: 150,
    alignSelf: "center",
    borderRadius: 75,
    borderWidth: 5,
  },
})

HeroImage.propTypes = {
  extension: string,
  path: string,
}

export default HeroImage
