import {View} from 'react-native';
import {WrapComponentPropsType} from './type';
import React from 'react';
const Row = ({children,styles}: WrapComponentPropsType) => {
  return (
    <View
      style={[
        {
          flexDirection: 'row',
        },
        styles ?? styles,
      ]}>
      {children}
    </View>
  );
};
export default Row;
