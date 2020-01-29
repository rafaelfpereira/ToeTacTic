import React from 'react'
import { Text } from 'react-native'
import styles from './timer.style'

function Timer({time}) {
  return <Text style={styles.timerText}>{time}</Text>
}

export default Timer
