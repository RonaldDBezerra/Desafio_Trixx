import React from 'react';
import { View, Text, SafeAreaView, StatusBar, Image } from 'react-native';
import Styles from '../styles/Styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function Header() {
  return (
    <SafeAreaView>
      <View style={Styles.headerContainer}>
        <View style={Styles.iconMenuArea}>
          <Icon color={'#F8F8F8'} name="menu" size={45} />
        </View>

        <View style={Styles.imageHeaderArea}>
          <Image style={Styles.imageHeader} source={require('../asserts/Group100.png')} />
        </View>

        <View style={Styles.iconTuneVariantArea}>
          <Icon color={'#F8F8F8'} name="tune-variant" size={35} />
        </View>

      </View>

      <StatusBar barStyle={'light-content'} backgroundColor="#E1B12C" />
    </SafeAreaView>
  );
}
