import React from 'react'
import { GameScreen } from './src/screens'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  //Home: {screen: HomeScreen},
  Game: {screen: GameScreen},
});
const App = createAppContainer(MainNavigator);

export default App
