import React from "react"
import { Dimensions, SafeAreaView, ScrollView, View } from "react-native"
import { TopNavigation, Divider, Layout, Text } from "@ui-kitten/components"
import HeroImage from "App/components/HeroImage"
import ComicImage from "App/components/ComicImage"
import StackSpacer from "App/components/StackSpacer"
import ImageWall from "App/components/ImageWall"
import Wrapper from "App/components/Wrapper"
import BackButton from "App/components/BackButton"
import InlineSpacer from "App/components/InlineSpacer"
import InlineLoader from "App/components/InlineLoader"
import Notification from "App/components/Notification"
import HeroHeader from "App/components/HeroHeader"
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

  const comicWidth = Math.floor((screenWidth * 0.3) - 2)
  const comicHeight = comicWidth * 1.5

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
        testID='heroDetailsTopNavigation'
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
              <HeroHeader
                testID='heroHeader'
                title={name}
                content={`Appeared in ${availableComics} comics, ${availableStories} stories, participated in ${availableEvents} events and featured in ${availableSeries} series.`}
              />
            </View>
            <StackSpacer size={2} />
            {description !== "" ? (
              <Text testID='heroDescription'>{description}</Text>
            ) : (
              <Notification testID='heroDescription' label="Description is not available" />
            )}
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
                            imageWidth={comicWidth}
                            imageHeight={comicHeight}
                          />
                        ),
                      )}
                    </ImageWall>
                    <StackSpacer size={2} />
                  </>
                ) : (
                  <Notification label="Comics list is not available" />
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
