import {Animated, StyleSheet, useWindowDimensions} from 'react-native';
import {Text, View} from 'react-native';
import React from 'react';
type PaginatorProps = {
  slideData: OnBoardingContentProps[];
  scrollX: Animated.Value;
};
const Paginator = ({slideData, scrollX}: PaginatorProps) => {
  const width = useWindowDimensions().width;
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 64,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {slideData.map((_, index) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [8, 16, 8],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            key={index}
            style={[
              styles.dot,
              {
                width: dotWidth,
                opacity,
              },
            ]}
          />
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#493d8a',
    margin: 4,
  },
});
export default Paginator;
