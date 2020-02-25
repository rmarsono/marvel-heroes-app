import React from "react"
import { SafeAreaView, View } from "react-native"
import { string } from "prop-types"
import { Layout, Icon, Text } from "@ui-kitten/components"
import StackSpacer from "./StackSpacer"

const ErrorUI = ({ label }) => (
  <SafeAreaView style={{ flex: 1 }}>
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{  }}>
        <Icon name="alert-circle-outline" width={50} height={50} style={{ alignSelf: "center" }} />
        <StackSpacer size={2} />
        <Text style={{ textAlign: "center" }} category='s1'>{label}</Text>
      </View>
    </Layout>
  </SafeAreaView>
)

ErrorUI.propTypes = {
  label: string,
}

export default ErrorUI
