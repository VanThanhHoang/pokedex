import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackNavigationOptions } from "@react-navigation/stack";
export enum ScreenNames {
    Splash = "Splash",
    OnBoarding = "OnBoarding",
    Home = "Home",
    PreAuth = "PreAuth"
}
export type RootStackParamList = {
    [ScreenNames.Splash]: undefined,
    [ScreenNames.OnBoarding]: undefined,
    [ScreenNames.Home]: undefined
    [ScreenNames.PreAuth]: undefined
}
export type AppScreen = {
    name: keyof RootStackParamList;
    component:()=>React.JSX.Element;
    options?: StackNavigationOptions;
};
export type AppNavigationProps =  NativeStackNavigationProp<RootStackParamList>;