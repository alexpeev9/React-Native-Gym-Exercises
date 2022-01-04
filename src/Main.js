import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes.js';

export default function Main() {
  return (
    <NavigationContainer>
        <Routes />
    </NavigationContainer>
  );
}