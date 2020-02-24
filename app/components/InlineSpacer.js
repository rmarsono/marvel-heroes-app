import React from "react"
import { number } from "prop-types"
import { View } from "react-native"

const InlineSpacer = ({ size }) => (
  <View style={{ paddingRight: size * 8 }}></View>
)

InlineSpacer.propTypes = {
  size: number,
}

InlineSpacer.defaultProps = {
  size: 1,
}

export default InlineSpacer
