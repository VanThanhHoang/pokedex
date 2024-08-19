import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './type';
import React from 'react';
import AppScreenList from './config';
const RootStack = createStackNavigator<RootStackParamList>();
const AppNavigator = () => {
  return (
    <RootStack.Navigator>
      {AppScreenList.map((screen, index) => {
        return (
          <RootStack.Screen
            key={index}
            name={screen.name}
            component={screen.component}
            options={screen.options}
          />
        );
      })}
    </RootStack.Navigator>
  );
};
export default AppNavigator;