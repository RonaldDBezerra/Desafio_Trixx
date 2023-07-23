import React from 'react';
import { View, Image } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import Styles from '../styles/Styles';

type props = {
  id: number
  key: number;
  item: {
    title: string;
    image: string
  };
};

export function Services() {
  const servicesInfoArray = [
    {
      title: 'Prato Pronto',
      image: 'https://scontent-gig4-2.xx.fbcdn.net/v/t39.30808-6/360166951_2990724281060206_6937045668117761734_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeG2DxSkQ4RVGxmkSm_-1uh9JNmJZHVpceIk2YlkdWlx4sgus59-SHayU68pVJTxsCeutlakRwDdYnpZrnz4w_zb&_nc_ohc=pXSrk1T8HKMAX-W59_h&_nc_ht=scontent-gig4-2.xx&oh=00_AfBvPbujJADN7dtsQxrjoY9Ds_2I5Yr7MST6of-rgSD70g&oe=64C14ED5'
    },
    {
      title: 'Salão espaço Glamour',
      image: 'https://scontent-gig4-2.xx.fbcdn.net/v/t39.30808-6/362944741_2990724277726873_8135533429848883217_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEpsQN-392ixpyIubLUkpGPvdQCH7ZebFG91AIftl5sUZ9gUaW_oXuaWobdPav-LPyVVVr0qdC57Y6mz6LPHDjV&_nc_ohc=1jnu3y_uGAQAX_V2xas&_nc_ht=scontent-gig4-2.xx&oh=00_AfASw3-zz-YNuelNSY-lMezbD61n7IVGoN8rACwfoib5fA&oe=64C1A2E7'
    },
  ];

  return (
    <View style={Styles.servicesContainer}>
      {servicesInfoArray.map((item, index) => (
        <RenderItem key={index} id={index} item={item} />
      ))}
    </View>
  );
}

function RenderItem(props: props) {
  const { title, image } = props.item;
  const {id} = props

  return (
    <Card style={{ width: "47%", height: 170, borderRadius: 3, backgroundColor: (id === 0) ? "#E1B12C51" : "white", shadowColor: "#E1B12C51", alignItems: 'center'}}>

      <Card.Content>
        <Card.Cover style={{height: 100, width: 160, borderRadius: 0.9, backgroundColor: (id === 0) ? "#E1B12C51" : "white"}} source={{uri: image}} />

        <Text style={Styles.servicesTitle} variant="titleMedium">{title}</Text>

        <Text style={{marginLeft: 2, color: (id === 0) ? "#F8F8F8" : "#E1B12C"}} variant="bodyMedium">Ver mais</Text>
      </Card.Content>

    </Card>
  );
}
