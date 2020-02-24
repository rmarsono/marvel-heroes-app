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
  const { results, isLoaded } = useMarvelCharacters()

  console.log("results", results)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="Marvel heroes" alignment="center" />
      <Divider />

      {results.length ? (
        <Layout
          style={{
            flex: 1,
          }}>
          <List
            data={results}
            ItemSeparatorComponent={() => <Divider />}
            ListFooterComponent={isLoaded ? null : () => <Loader />}
            removeClippedSubviews={true}
            maxToRenderPerBatch={50}
            initialNumToRender={100}
            renderItem={({ item: { id, name, description, thumbnail } }) => (
              <ListItem
                title={name}
                onPress={() =>
                  navigate("HeroDetails", {
                    id,
                    name,
                    description,
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
