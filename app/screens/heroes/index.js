import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import { listCharacters } from "Api/marvelHeroes"
import Context from "./context"
import HeroesList from "./HeroesList"
import HeroDetails from "./HeroDetails"

const Heroes = () => {
  const Stack = createStackNavigator()

  const loadCharacters = async () => {
    const characters = await listCharacters()
    console.log("characters", characters)
  }

  loadCharacters()

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