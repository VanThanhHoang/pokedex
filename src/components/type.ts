import { ReactNode } from "react"
import { ViewStyle } from "react-native"

export type WrapComponentPropsType = {
    children:ReactNode,
    styles?:ViewStyle
}
