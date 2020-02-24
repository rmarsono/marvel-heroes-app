import React, { useState } from "react"
import { Image, View, StyleSheet } from "react-native"
import { string } from "prop-types"
import { Text, Spinner } from "@ui-kitten/components"

const ComicImage = ({ path, extension, title }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <>
      {path.includes("not_available") ? (
        <View style={[styles.base, styles.empty]}>
          <Text style={{ color: "#ffffff", textAlign: "center" }} category="c1">
            {title === "" ? "Thumbnail not available" : title}
          </Text>
        </View>
      ) : (
        <View
          style={{
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Image
            source={{ uri: `${path}.${extension}` }}
            style={styles.base}
            onLoad={() => setIsLoaded(true)}
          />
          {isLoaded ? null : (
            <View style={{ position: "absolute" }}>
              <Spinner />
            </View>
          )}
        </View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  base: {
    width: 120,
    height: 180,
    marginBottom: 5,
  },
  empty: {
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
})

ComicImage.propTypes = {
  extension: string.isRequired,
  path: string.isRequired,
  title: string.isRequired,
}

export default ComicImage
