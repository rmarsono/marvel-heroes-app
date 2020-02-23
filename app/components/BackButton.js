import React, { useState } from "react"
import { TouchableOpacity } from "react-native"
import { Icon } from "@ui-kitten/components"
import { func } from "prop-types"

const BackButton = ({ goBack }) => {
  const [isActive, setIsActive] = useState()

  return (
    <TouchableOpacity
      onPress={!isActive ? () => goBack() : () => setIsActive(true)}>
      <Icon name="arrow-circle-left" width={24} height={24} />
    </TouchableOpacity>
  )
}

BackButton.propTypes = {
  goBack: func.isRequired,
}

export default BackButton
