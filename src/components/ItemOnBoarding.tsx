import pngImage from '@/assets/png_image';
import appColors from '@/themes/colors';
import {StyleSheet, View, useWindowDimensions} from 'react-native';
import {Image, Text} from 'react-native';
import { appSizing } from '@/themes/sizing';
import React from 'react';
const ItemOnboarding = ({...props}:OnBoardingContentProps) => {
  const windowWidth = useWindowDimensions().width;
  return (
    <View style={[styles.container,{
      width: windowWidth,
    }]}>
      <Image style={styles.image} source={props.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.subTitle}>{props.subTitle}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    gap: 20,
    padding: appSizing.screenPadding,
    justifyContent:'flex-end',
  },
  textContainer: {
    gap: 16,
    justifyContent: 'center',
  },
  title: {
    color: appColors.textTilte,
    fontSize: 26,
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 39,
  },
  subTitle: {
    textAlign: 'center',
    color: appColors.textSubTitle,
    lineHeight: 21,
    fontWeight: '400',
    fontSize: 14,
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
  },
});
export default ItemOnboarding
