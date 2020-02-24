import React from "react"
import { number } from "prop-types"
import { View } from "react-native"

const StackSpacer = ({ size }) => (
  <View style={{ paddingBottom: size * 8 }}></View>
)

StackSpacer.propTypes = {
  size: number.isRequired,
}

StackSpacer.defaultProps = {
  size: 1,
}

export default StackSpacer
