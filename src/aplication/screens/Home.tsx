import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Header } from '../../components/Header';
import { SectionTitle } from '../../components/SectionTitle';
import { Localization } from '../../components/Localization';
import { Services } from '../../components/Services';
import { Explore } from '../../components/Explore';
import { Divider } from '../../components/Divider';
import { Footer } from '../../components/Footer';

export function Home() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header />
      <SectionTitle title='Localização' />
      <Localization />
      <Divider />
      <SectionTitle title='Serviços e Reservas Próximos' />
      <Services />
      <Divider />
      <SectionTitle title='Explore' />
      <Explore />
      <Footer />
    </ScrollView>
  );
}
