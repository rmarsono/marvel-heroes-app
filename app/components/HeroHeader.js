import React from "react"
import { string } from "prop-types"
import { Text } from "@ui-kitten/components"
import { View } from "react-native"
import StackSpacer from "App/components/StackSpacer"

const HeroHeader = ({ title, content }) => (
  <View style={{ flex: 1, justifyContent: "flex-start" }}>
    <Text category="h5" style={{ lineHeight: 28 }}>
      {title}
    </Text>
    <StackSpacer />
    <Text category="c1">{content}</Text>
  </View>
)

HeroHeader.propTypes = {
  content: string.isRequired,
  title: string.isRequired,
}

export default HeroHeader
