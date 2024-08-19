import { ImageSourcePropType } from "react-native";
declare global {
    type OnBoardingContentProps = {
        id:string,
        image:ImageSourcePropType,
        title:string,
        subTitle:string,
    }
}