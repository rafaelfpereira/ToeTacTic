import React from 'react'
import { View, Text } from 'react-native'
import styles from './square.style'
function Square({ mark }) {
  return (
    <View style={styles.box}>
      <Text style={styles.mark}>{mark}</Text>
    </View>
  )
}

export default Square
