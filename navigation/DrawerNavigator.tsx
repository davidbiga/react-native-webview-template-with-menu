import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';

import SubscribeScreen from '../screens/SubscribeScreen';
import DonateScreen from '../screens/DonateScreen';
import HomeScreen from '../screens/HomeScreen';
import { HomeParamList, DrawerParamList, SubscribeParamList, DonateParamList } from '../types';

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="News"
        component={HomeNavigator}/>
      <Drawer.Screen
        name="Subscribe"
        component={SubscribeNavigator}/>
      <Drawer.Screen
        name="Donate"
        component={DonateNavigator}
      />
    </Drawer.Navigator>
  );
}

const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="News"
        component={HomeScreen}
      />
    </HomeStack.Navigator>
  )
}

const SubscribeStack = createStackNavigator<SubscribeParamList>();

function SubscribeNavigator() {
  return (
    <SubscribeStack.Navigator>
      <SubscribeStack.Screen
        name="Subscribe"
        component={SubscribeScreen}
      />
    </SubscribeStack.Navigator>
  )
}

const DonateStack = createStackNavigator<DonateParamList>();

function DonateNavigator() {
  return (
    <DonateStack.Navigator>
      <DonateStack.Screen
        name="Donate"
        component={DonateScreen}
      />
    </DonateStack.Navigator>
  )
}