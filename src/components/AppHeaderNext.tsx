import appColors from '@/themes/colors';
import {appSizing} from '@/themes/sizing';
import {useNavigation} from '@react-navigation/native';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-animatable';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome6';
// Header for screen need to have next button
const AppHeaderNext = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.buttonNext}>
        <Text style={styles.textButton}>Next</Text>
        <Icon name="arrow-right" size={27} color={appColors.textTilte} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: appSizing.headerHeight,
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: appSizing.screenPadding,
    paddingTop: StatusBar.currentHeight || 30,
  },
  buttonNext: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  textButton: {
    fontSize: 18,
    fontWeight: '500',
    color: appColors.textTilte,
  },
});
export default AppHeaderNext;
