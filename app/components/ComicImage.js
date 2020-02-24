import React from "react"
import { Image, View } from "react-native"
import { string } from "prop-types"
import { Text } from "@ui-kitten/components"

const ComicImage = ({ path, extension, title }) => {
  return (
    <>
      {path.includes("not_available") ? (
        <View style={[styles.base, styles.empty]}>
          <Text style={{ color: "#ffffff", textAlign: "center" }} category="c1">
            {title === "" ? "Thumbnail not available" : title}
          </Text>
        </View>
      ) : (
        <Image source={{ uri: `${path}.${extension}` }} style={styles.base} />
      )}
    </>
  )
}

const styles = {
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
}

ComicImage.propTypes = {
  extension: string.isRequired,
  path: string.isRequired,
  title: string.isRequired,
}

export default ComicImage
