import React from "react"
import { SafeAreaView, ScrollView, TouchableOpacity } from "react-native"
import { TopNavigation, Divider, Layout, Icon } from "@ui-kitten/components"
import HeroImage from "App/components/HeroImage"
import StackSpacer from "App/components/StackSpacer"
import DataRow from "App/components/DataRow"

const HeroDetails = ({
  navigation: { goBack },
  route: {
    params: {
      name,
      description,
      comics: { items: comicsItems, returned: comicsReturned },
      thumbnail: { path, extension },
    },
  },
}) => {

  const back = () => (
    <TouchableOpacity onPress={() => goBack()}>
      <Icon name="arrow-circle-left" width={24} height={24} />
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title={name} alignment="center" leftControl={back()} />
      <Divider />

      <Layout
        style={{
          flex: 1,
          paddingLeft: 20,
          paddingRight: 20,
        }}>
        <ScrollView>
          <StackSpacer size={2} />
          {path.indexOf("not_available") >= 0 ? null : (
            <>
              <HeroImage path={path} extension={extension} />
              <StackSpacer size={3} />
            </>
          )}
          <DataRow label={name} value={description} />
        </ScrollView>
      </Layout>
    </SafeAreaView>
  )
}

export default HeroDetails
