import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import Styles from '../styles/Styles';

type props = {
  id: number;
  key: number;
  item: {
    title: string;
    image: NodeRequire;
  };
};

export function Explore() {
  const servicesInfoArray = [
    {
      title: 'Pizzaria',
      image: require('../asserts/pizza1.png'),
    },
    {
      title: 'Restaurantes',
      image: require('../asserts/comida-e-restaurante1.png'),
    },
    {
      title: 'Esportes',
      image: require('../asserts/academia.png'),
    },
    {
      title: 'Salão',
      image: require('../asserts/tratamento-de-beleza(2)1.png'),
    },
  ];

  return (
    <View style={Styles.servicesContainer}>
      <ScrollView
        style={{ width: '100%' }}
        contentContainerStyle={{
          paddingRight: 20,
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {servicesInfoArray.map((item, index) => (
          <RenderItem key={index} id={index} item={item} />
        ))}
      </ScrollView>
    </View>
  );
}

function RenderItem(props: props) {
  const { title, image } = props.item;
  const { id } = props;

  return (
    <View>
      <View
        style={Styles.contentExploreImage}
      >
        <Image style={Styles.exploreImages} source={image} />
      </View>

      <View style={Styles.contentExploreTitle}>
        <Text
          style={Styles.exploreTitle}
          variant="labelLarge"
        >
          {title}
        </Text>
      </View>
    </View>
  );
}
