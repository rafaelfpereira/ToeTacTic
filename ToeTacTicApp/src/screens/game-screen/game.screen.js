import React from 'react';
import { View } from 'react-native';
import { TimeBoardSection, GameBoardSection } from '../../sections'
import { PlayerTag, Timer, Square } from '../../components'
import styles from './game.style';

function GameScreen() {
  return (
    <View style={styles.screen}>
      <View />
      <TimeBoardSection>
        <PlayerTag tag="jogador 1" />
        <Timer time="30" />
        <PlayerTag tag="jogador 2" />
      </TimeBoardSection>
      <GameBoardSection>
        {/* in the future, squares should come from the api */}
        <Square mark="x"/>
        <Square mark="x"/>
        <Square mark="o"/>
        <Square mark="x"/>
        <Square mark="o"/>
        <Square mark="x"/>
        <Square mark=""/>
        <Square mark=""/>
        <Square mark="o"/>
      </GameBoardSection>
    </View>
  );
}

GameScreen.navigationOptions = {
  title: 'ToeTacTic',
  headerStyle: styles.navigationHeader,
  headerTitleStyle: styles.navigationTitle,
}

export default GameScreen;
