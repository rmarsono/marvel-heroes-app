import "react-native-gesture-handler"
import React from "react"
import { ApplicationProvider } from "@ui-kitten/components"
import { mapping, light as lightTheme } from "@eva-design/eva"
import { NavigationContainer } from "@react-navigation/native"

import Heroes from "./app/screens/heroes"

const App = () => (
  <NavigationContainer>
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <Heroes />
    </ApplicationProvider>
  </NavigationContainer>
)

export default App