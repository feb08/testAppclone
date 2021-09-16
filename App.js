// /**
//  * @format
//  */
//  import { registerRootComponent } from 'expo';
//  import {AppRegistry} from 'react-native';
//  import App from './src/App.js';
//  import {name as appName} from './app.json';
 
//  AppRegistry.registerComponent(appName, () => App);

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/routes/index';

function App() {
  return (
      <NavigationContainer>
        <Router/>
      </NavigationContainer>
  );
}

export default App;