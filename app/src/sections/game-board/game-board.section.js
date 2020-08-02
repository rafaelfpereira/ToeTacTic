import React from 'react'
import { View } from 'react-native'
import styles from './game-board.style'

function GameBoardSection({ children }) {
  return <View style={styles.main}>{children}</View>
}

export default GameBoardSection
