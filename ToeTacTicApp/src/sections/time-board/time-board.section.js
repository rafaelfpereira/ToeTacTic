import React from 'react'
import { View } from 'react-native'
import styles from './time-board.style'

function TimeBoardSection({ children }) {
  return <View style={styles.main}>
    {children}
  </View>
}

export default TimeBoardSection
