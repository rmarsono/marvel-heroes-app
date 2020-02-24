import React from "react"
import { Icon, Text } from "@ui-kitten/components"
import { View } from "react-native"
import { string } from "prop-types"
import InlineSpacer from "./InlineSpacer"

const Notification = ({ label }) => (
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <Icon name="alert-triangle" width={24} height={24} />
    <InlineSpacer />
    <Text>{label}</Text>
  </View>
)

Notification.propTypes = {
  label: string,
}

export default Notification
