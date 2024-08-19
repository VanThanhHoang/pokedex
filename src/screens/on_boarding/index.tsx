import {StyleSheet, Text, View, Animated} from 'react-native';
import ItemOnboarding from './components/ItemOnBoarding';
import {FlatList} from 'react-native-gesture-handler';
import {onBoardingData} from './data';
import {appSizing} from '@/themes/sizing';
import {useRef, useState} from 'react';
import Paginator from './components/Paginator';
import AppButton from '@/components/AppButton';
import React from 'react';
import {AppNavigationProps, ScreenNames} from '@/navigation/type';
import {useNavigation} from '@react-navigation/native';
function OnBoardingScreen() {
  const appNavigation = useNavigation<AppNavigationProps>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  const sildeRef = useRef<FlatList>(null);
  const viewableItemsChanged = useRef(({viewableItems}: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          onViewableItemsChanged={viewableItemsChanged}
          ref={sildeRef}
          data={onBoardingData}
          scrollEventThrottle={32}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          horizontal
          keyExtractor={(item, index) => item.id}
          renderItem={({item}) => <ItemOnboarding {...item} />}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          viewabilityConfig={viewConfig}
        />
        <Paginator scrollX={scrollX} slideData={onBoardingData} />
        <View
          style={{
            padding: appSizing.screenPadding,
          }}>
          <AppButton
            text={
              currentIndex === onBoardingData.length - 1
                ? 'Vamos começar!'
                : 'Continuar'
            }
            onPress={() => {
              if (currentIndex === onBoardingData.length - 1) {
                appNavigation.navigate(ScreenNames.PreAuth);
                return
              }
              if (sildeRef.current) {
                sildeRef.current.scrollToIndex({
                  index: currentIndex + 1,
                });
              }
            }}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'white',
  },
});
export default OnBoardingScreen;
