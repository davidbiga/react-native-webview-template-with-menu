import { GestureResponderEvent } from "react-native";

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type DrawerParamList = {
  Subscribe: undefined;
  Donate: undefined;
};

export type SubscribeParamList = {
  SubscribeScreen: undefined;
};

export type HomeParamList = {
  HomeScreen: undefined;
};

export type DonateParamList = {
  DonateScreen: undefined;
};

export type onPressFunc = (event: GestureResponderEvent) => void;
