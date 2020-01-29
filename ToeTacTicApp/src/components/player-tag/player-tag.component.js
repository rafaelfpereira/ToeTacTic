import React from 'react'
import { Text } from 'react-native'
import styles from './player-tag.style'

function PlayerTag({ tag }) {
  return <Text style={styles.tagText}>{tag}</Text>
}

export default PlayerTag
