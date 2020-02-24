import React from "react"
import { View } from "react-native"
import { Text, Spinner } from "@ui-kitten/components"
import InlineSpacer from "./InlineSpacer"
import { string } from "prop-types"

const InlineLoader = ({ label }) => (
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <Spinner />
    <InlineSpacer />
    <Text category="c1">{label}</Text>
  </View>
)

InlineLoader.propTypes = {
  label: string,
}

export default InlineLoader
