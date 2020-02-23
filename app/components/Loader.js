import React from "react"
import { Spinner } from "@ui-kitten/components"
import { View } from "react-native"

const Loader = () => {
  const styles = {
    base: {
      justifyContent: "center",
      alignItems: "center",
    },
  }

  return (
    <View style={styles.base}>
      <Spinner size="giant" />
    </View>
  )
}

export default Loader
