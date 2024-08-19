import {ReactNode} from 'react';
import {View} from 'react-native-animatable';
import {WrapComponentPropsType} from './type';
import React from 'react';
const Column = ({children, styles}: WrapComponentPropsType) => {
  return (
    <View
      style={[
        {
          flexDirection: 'column',
        },
        styles ?? styles,
      ]}>
      {children}
    </View>
  );
};
export default Column;
