import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import HeroesList from "./HeroesList"
import HeroDetails from "./HeroDetails"

const Heroes = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='HeroesList' component={HeroesList} />
      <Stack.Screen name='HeroDetails' component={HeroDetails} />
    </Stack.Navigator>
  )
}

export default Heroes