import React, { useState } from "react"
import { Image, View } from "react-native"
import { string } from "prop-types"
import Loader from "App/components/Loader"

const HeroImage = ({ path, extension }) => {
  const styles = {
    base: {
      width: 150,
      height: 150,
      alignSelf: "center",
    },
    image: {
      borderRadius: 75,
      borderWidth: 5,
    },
  }

  const [isLoaded, setIsLoaded] = useState()

  return (
    <View styles={styles.base}>
      <Image
        style={[styles.base, styles.image]}
        source={{ uri: `${path}.${extension}` }}
        onLoad={() => setIsLoaded(true)}
      />
      {!isLoaded ? <Loader /> : null}
    </View>
  )
}

HeroImage.propTypes = {
  extension: string,
  path: string,
}

export default HeroImage
