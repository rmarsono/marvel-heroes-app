import React from "react"
import { Spinner } from "@ui-kitten/components"
import { View } from "react-native"

const Loader = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Spinner size="giant" />
  </View>
)

export default Loader