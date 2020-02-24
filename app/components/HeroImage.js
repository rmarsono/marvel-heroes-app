import React, { useState } from "react"
import { Image, StyleSheet, View } from "react-native"
import { string } from "prop-types"
import { Spinner } from "@ui-kitten/components"

const HeroImage = ({ path, extension }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}>
      <Image
        style={styles.base}
        source={{ uri: `${path}.${extension}` }}
        onLoad={() => setIsLoaded(true)}
      />
      {isLoaded ? null : (
        <View style={{ position: "absolute" }}>
          <Spinner />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  base: {
    width: 80,
    height: 80,
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
