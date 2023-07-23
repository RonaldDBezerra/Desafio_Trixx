import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import Styles from "../styles/Styles";

type props = {
  title: string
}

export function SectionTitle({title}: props ) {

  return(
    <View style={Styles.contentTitle}>
      <Text style={Styles.Title} variant="titleLarge">
        {title}
      </Text>
    </View>
  )
}