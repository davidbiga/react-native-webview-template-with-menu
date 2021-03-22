import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackHeaderLeftButtonProps } from '@react-navigation/stack';
import { WebView } from 'react-native-webview';

import MenuIcon from '../components/MenuIcon';
import { useEffect } from 'react';

export default function DatabaseScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      showHeader: true,
      headerLeft: (props: StackHeaderLeftButtonProps) => (<MenuIcon/>)
    });
  });

  return (
    <React.Fragment>
      <WebView source={{ uri: 'https://google.com' }} />
    </React.Fragment>
  )
};