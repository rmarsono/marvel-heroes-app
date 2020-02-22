import React, { useState, useEffect } from "react"
import { SafeAreaView } from "react-native"
import {
  TopNavigation,
  Divider,
  Layout,
  List,
  ListItem,
} from "@ui-kitten/components"
import { shape, func } from "prop-types"
import { useMarvelCharacters } from "App/hooks/marvel"
import Loader from "App/components/Loader"

const HeroesList = ({ navigation: { navigate } }) => {
  const [characters, setCharacters] = useState([])

  const { results, isComplete } = useMarvelCharacters()

  useEffect(() => {
    setCharacters([...characters, ...results])
  }, [results])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="Marvel heroes" alignment="center" />
      <Divider />

      {characters.length ? (
        <Layout
          style={{
            flex: 1,
          }}>
          <List
            data={characters}
            ItemSeparatorComponent={() => <Divider />}
            ListFooterComponent={isComplete ? null : () => <Loader />}
            removeClippedSubviews={true}
            maxToRenderPerBatch={50}
            initialNumToRender={100}
            renderItem={({ item: { name, description, comics, thumbnail } }) => (
              <ListItem
                title={name}
                onPress={() =>
                  navigate("HeroDetails", {
                    name,
                    description,
                    comics,
                    thumbnail,
                  })
                }
              />
            )}
          />
        </Layout>
      ) : (
        <Loader />
      )}
    </SafeAreaView>
  )
}

HeroesList.propTypes = {
  navigation: shape({
    navigate: func.isRequired,
  }).isRequired,
}

export default HeroesList
