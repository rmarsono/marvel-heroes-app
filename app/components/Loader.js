import React from "react"
import { Spinner } from "@ui-kitten/components"
import { View, StyleSheet } from "react-native"

const Loader = () => {
  return (
    <View style={styles.base}>
      <Spinner size="giant" />
    </View>
  )
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})

export default Loader
