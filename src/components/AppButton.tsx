import appColors from '@/themes/colors';
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  Text,
  ColorValue,
} from 'react-native';
import React from 'react';
type AppButtonProps = {
  backgroundColor?: ColorValue;
  textColor?: ColorValue;
  text: string;
  onPress?: (event: GestureResponderEvent) => void;
};
const AppButton = ({
  text,
  onPress,
  backgroundColor,
  textColor,
}: AppButtonProps) => {
  /*
    if backgroundColor or textColor is not provided, 
    it will use the default color from the theme
   */
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.container,
        backgroundColor: backgroundColor ?? appColors.blueButtonBackground,
      }}>
      <Text
        style={{
          ...styles.text,
          color: textColor ?? 'white',
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.blueButtonBackground,
    height: 58,
    width: '100%',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 27,
  },
});
export default AppButton;
