import "react-native-gesture-handler"
import React from "react"
import { EvaIconsPack } from "@ui-kitten/eva-icons"
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components"
import { mapping, light as lightTheme } from "@eva-design/eva"
import { NavigationContainer } from "@react-navigation/native"

import Heroes from "App/screens/heroes"

const App = () => (
  <NavigationContainer>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <Heroes />
    </ApplicationProvider>
  </NavigationContainer>
)

export default App