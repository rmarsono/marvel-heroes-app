import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import { listCharacters } from "@api/marvelHeroes"
import Context from "./context"
import HeroesList from "./HeroesList"
import HeroDetails from "./HeroDetails"

const Heroes = () => {
  const Stack = createStackNavigator()

  return (
    <Context.Provider value={{}}>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name='HeroesList' component={HeroesList} />
        <Stack.Screen name='HeroDetails' component={HeroDetails} />
      </Stack.Navigator>
    </Context.Provider>
  )
}

export default Heroes