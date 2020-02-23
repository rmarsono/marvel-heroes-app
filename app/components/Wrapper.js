import React from "react"
import { element } from "prop-types"
import { View } from "react-native"

const Wrapper = ({ children }) => (
  <View style={{ paddingLeft: 20, paddingRight: 20 }}>{children}</View>
)

Wrapper.propTypes = {
  children: element.isRequired,
}

export default Wrapper
