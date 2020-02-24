import React, { useState } from "react"
import { SafeAreaView, StyleSheet } from "react-native"
import {
  TopNavigation,
  Divider,
  Layout,
  List,
  ListItem,
  Input,
} from "@ui-kitten/components"
import { shape, func } from "prop-types"
import { useMarvelCharacters } from "App/hooks/marvel"
import Loader from "App/components/Loader"
import StackSpacer from "App/components/StackSpacer"

const HeroesList = ({ navigation: { navigate } }) => {
  const { results, isLoaded } = useMarvelCharacters()

  const [filter, setFilter] = useState("")

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="Marvel heroes" alignment="center" />
      <Divider />

      {results.length ? (
        <Layout>
          <StackSpacer size={3} />

          <Input
            value={filter}
            placeholder="filter characters..."
            textStyle={styles.inputText}
            onChangeText={setFilter}
            style={{ paddingLeft: 10, paddingRight: 10 }}
            autoCapitalize="none"
            autoCorrect={false}
          />

          <StackSpacer size={1} />

          <List
            data={
              filter.length
                ? results.filter(({ name }) =>
                  name
                    .toLowerCase()
                    .replace(/-|\s|\(|\)/g, "")
                    .includes(
                      filter.toLowerCase().replace(/-|\s|\(|\)/g, ""),
                    ),
                )
                : results
            }
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

const styles = StyleSheet.create({
  inputText: { color: "#3366FF" },
})

HeroesList.propTypes = {
  navigation: shape({
    navigate: func.isRequired,
  }).isRequired,
}

export default HeroesList
