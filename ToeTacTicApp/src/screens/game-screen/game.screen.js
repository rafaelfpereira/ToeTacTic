import React from 'react';
import { View } from 'react-native';
import { TimeBoardSection, GameBoardSection } from '../../sections'
import { PlayerTag, Timer, Square } from '../../components'
import styles from './game.style';

function GameScreen() {
  return (
    <View style={styles.screen}>
      <TimeBoardSection>
        <PlayerTag tag="jogador 1" />
        <Timer time="30" />
        <PlayerTag tag="jogador 2" />
      </TimeBoardSection>
      <GameBoardSection>
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

export default GameScreen;
