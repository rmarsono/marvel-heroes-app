import React from "react"
import { SafeAreaView } from "react-native"
import { TopNavigation, Divider, Layout, Text } from "@ui-kitten/components"

const HeroesList = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <TopNavigation title='Heroes List' alignment='center' />
    <Divider />
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text category='h1'>HOME</Text>
    </Layout>
  </SafeAreaView>
)

export default HeroesList