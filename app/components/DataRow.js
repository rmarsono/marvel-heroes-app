import React from "react"
import { string } from "prop-types"
import { View } from "react-native"
import { Text } from "@ui-kitten/components"
import StackSpacer from "./StackSpacer"

const DataRow = ({ label, value }) => (
  <View>
    <Text category="h6">{label}</Text>
    <StackSpacer size={1} />
    <Text>{value}</Text>
  </View>
)

DataRow.propTypes = {
  label: string,
  value: string,
}

export default DataRow
