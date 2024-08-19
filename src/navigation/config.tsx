import { StackNavigationOptions } from "@react-navigation/stack";
import { AppScreen, ScreenNames } from "./type";
import SplashScreen from "@/screens/splash";
import OnBoardingScreen from "@/screens/on_boarding";
import PreAuthScreen from "@/screens/pre_auth";

const defaultOptions:StackNavigationOptions = {
    headerShown:false
}
const AppScreenList:AppScreen[] = [
    {
        name:ScreenNames.Splash,
        component:SplashScreen,
        options:defaultOptions
    },
    {
        name:ScreenNames.OnBoarding,
        component:OnBoardingScreen,
        options:defaultOptions
    },
    {
        name:ScreenNames.PreAuth,
        component:PreAuthScreen,
        options:defaultOptions
    }
]
export default AppScreenList;