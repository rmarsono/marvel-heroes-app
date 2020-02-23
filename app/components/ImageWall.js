import React from "react"
import { View } from "react-native"
import { element, arrayOf, number } from "prop-types"

const ImageWall = ({ children, count }) => (
  <View
    style={{
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignContent: "flex-start",
      alignItems: "flex-start",
    }}>
    {children}
    {count % 3 === 0 ? null : <View style={{ width: 120 }}></View>}
  </View>
)

ImageWall.propTypes = {
  children: arrayOf(element),
  count: number,
}

export default ImageWall
