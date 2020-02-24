import React from "react"
import { SafeAreaView, ScrollView } from "react-native"
import { TopNavigation, Divider, Layout, Text } from "@ui-kitten/components"
import HeroImage from "App/components/HeroImage"
import ComicImage from "App/components/ComicImage"
import StackSpacer from "App/components/StackSpacer"
import ImageWall from "App/components/ImageWall"
import DataRow from "App/components/DataRow"
import Wrapper from "App/components/Wrapper"
import BackButton from "App/components/BackButton"
import { useComics } from "App/hooks/marvel"

import { shape, func, string, number } from "prop-types"

const HeroDetails = ({
  navigation: { goBack },
  route: {
    params: {
      id,
      name,
      description,
      thumbnail: { path, extension },
    },
  },
}) => {
  const { results, isLoaded } = useComics(id)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation
        title={name}
        alignment="center"
        leftControl={<BackButton goBack={goBack} />}
      />
      <Divider />

      <Layout
        style={{
          flex: 1,
        }}>
        <ScrollView>
          <Wrapper>
            <>
              <StackSpacer size={2} />
              {path.includes("not_available") ? null : (
                <>
                  <HeroImage path={path} extension={extension} />
                  <StackSpacer size={3} />
                </>
              )}
              <DataRow
                label={name}
                value={
                  description !== ""
                    ? description
                    : "Description is not available"
                }
              />
              <StackSpacer size={2} />
              {!isLoaded ? (
                <Text>Loading comics...</Text>
              ) : (
                <>
                  {results.length > 0 ? (
                    <>
                      <Text category="h6">
                        {`Comic books featuring ${name}`}
                      </Text>
                      <StackSpacer size={2} />
                      <ImageWall>
                        {results.map(
                          ({ id, title, thumbnail: { extension, path } }) => (
                            <ComicImage
                              key={id}
                              path={path}
                              extension={extension}
                              title={title}
                            />
                          ),
                        )}
                      </ImageWall>
                    </>
                  ) : (
                    <Text>Comics list is not available</Text>
                  )}
                </>
              )}
            </>
          </Wrapper>
        </ScrollView>
      </Layout>
    </SafeAreaView>
  )
}

HeroDetails.propTypes = {
  navigation: shape({
    goBack: func.isRequired,
  }).isRequired,
  route: shape({
    params: shape({
      id: number.isRequired,
      name: string.isRequired,
      description: string.isRequired,
      thumbnail: shape({
        path: string.isRequired,
        extension: string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

export default HeroDetails
