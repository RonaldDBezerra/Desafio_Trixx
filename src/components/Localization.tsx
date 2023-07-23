import React from 'react';
import { View, Image } from 'react-native';
import { Button } from 'react-native-paper';
import Styles from '../styles/Styles';

export function Localization() {
  return (
    <View>
      <View>
        <Image
          style={Styles.localizationImage}
          source={require('../asserts/CapturadeTela.jpg')}
        />
      </View>
      <View style={Styles.buttonLocalizationArea}>
        <Button
          labelStyle={Styles.localizationButtonText}
          style={Styles.localizationButton}
        >
          Ativar o GPS
        </Button>
      </View>
    </View>
  );
}
