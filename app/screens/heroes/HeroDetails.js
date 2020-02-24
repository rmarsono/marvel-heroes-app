import React from "react"
import { Dimensions, SafeAreaView, ScrollView, View } from "react-native"
import {
  TopNavigation,
  Divider,
  Layout,
  Text,
} from "@ui-kitten/components"
import HeroImage from "App/components/HeroImage"
import ComicImage from "App/components/ComicImage"
import StackSpacer from "App/components/StackSpacer"
import ImageWall from "App/components/ImageWall"
import Wrapper from "App/components/Wrapper"
import BackButton from "App/components/BackButton"
import InlineSpacer from "App/components/InlineSpacer"
import InlineLoader from "App/components/InlineLoader"
import { useComics } from "App/hooks/marvel"
import { BarChart } from "react-native-chart-kit"
import { chartConfig } from "App/config"

import { shape, func, string, number } from "prop-types"

const HeroDetails = ({
  navigation: { goBack },
  route: {
    params: {
      id,
      name,
      description,
      thumbnail: { path, extension },
      availableComics,
      availableStories,
      availableEvents,
      availableSeries,
    },
  },
}) => {
  const { results, isLoaded } = useComics(id)

  const screenWidth = Dimensions.get("window").width

  const chartData = {
    labels: ["comics", "stories", "events", "series"],
    datasets: [
      {
        data: [
          availableComics,
          availableStories,
          availableEvents,
          availableSeries,
        ],
      },
    ],
  }

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
            <StackSpacer size={2} />
            <BarChart
              data={chartData}
              width={screenWidth - 40}
              height={220}
              chartConfig={chartConfig}
            />
            <StackSpacer size={2} />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}>
              {path.includes("not_available") ? null : (
                <>
                  <HeroImage path={path} extension={extension} />
                  <InlineSpacer size={2} />
                </>
              )}
              <Text style={{ flexShrink: 1 }} category="h5">
                {name}
              </Text>
            </View>
            <StackSpacer size={2} />
            <Text>
              {description !== ""
                ? description
                : "Description is not available"}
            </Text>
            <StackSpacer size={2} />
            {!isLoaded ? (
              <InlineLoader label="loading comics..." />
            ) : (
              <>
                {results.length > 0 ? (
                  <>
                    <Text category="h6">{`Comic books featuring ${name}`}</Text>
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
                    <StackSpacer size={2} />
                  </>
                ) : (
                  <Text>Comics list is not available</Text>
                )}
              </>
            )}
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
      availableComics: number.isRequired,
      availableStories: number.isRequired,
      availableEvents: number.isRequired,
      availableSeries: number.isRequired,
    }).isRequired,
  }).isRequired,
}

export default HeroDetails
