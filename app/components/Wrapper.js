import React from "react"
import { element, oneOfType, arrayOf } from "prop-types"
import { View } from "react-native"

const Wrapper = ({ children }) => (
  <View style={{ paddingLeft: 20, paddingRight: 20 }}>{children}</View>
)

Wrapper.propTypes = {
  children: oneOfType([element, arrayOf(element)]).isRequired,
}

export default Wrapper
