import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppButton from '@/components/AppButton';
import ItemOnboarding from '@/components/ItemOnBoarding';
import pngImage from '@/assets/png_image';
import AppHeader from '@/components/AppHeaderNext';
import {appSizing} from '@/themes/sizing';
const PreAuthScreen = () => {
  return (
    <View style={styles.container}>
      <AppHeader />
      <View style={styles.contentConatainer}>
        <ItemOnboarding
          id="1"
          image={pngImage.onBoadring2}
          title="Está pronto para essa aventura?"
          subTitle="Basta criar uma conta e começar a explorar o mundo dos Pokémon hoje!"
        />
        <AppButton text="Criar conta" onPress={() => {}} />
        <AppButton
          textColor={'black'}
          backgroundColor={'white'}
          text="Ja tenho uma conta"
          onPress={() => {}}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    backgroundColor: 'white',
  },
  contentConatainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    padding: appSizing.screenPadding,
  },
});
export default PreAuthScreen;
