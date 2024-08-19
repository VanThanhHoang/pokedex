import AppNavigator from '@/navigation';
import OnBoarding from '@/screens/on_boarding';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, StyleSheet, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent />
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
export default App;
