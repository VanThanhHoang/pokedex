import pngImage from '@/assets/png_image';
import appColors from '@/constants/sizing';
import {AppNavigationProps, ScreenNames} from '@/navigation/type';
import appStyles from '@/themes/styles';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {View,StyleSheet, StatusBar, Image} from 'react-native';

function SplashScreen() {
  const navigation = useNavigation<AppNavigationProps>();
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: ScreenNames.OnBoarding}],
      });
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <Image style={styles.logo} source={pngImage.splashImage} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    ...appStyles.centerContainer,
    backgroundColor: appColors.OnBoardingBackground,
  },
  logo: {
    width: 192,
    height: 71,
    resizeMode: 'contain',
  },
});
export default SplashScreen;
