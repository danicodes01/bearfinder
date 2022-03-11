import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'


const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather style={styles.icon} name='search' />
      <TextInput
        style={styles.input}
        placeholder='Search'
        value={term}
        autoCapitalize='none'
        autoCorrect
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    // borderWidth: 1,
    marginTop: 10,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    fontSize: 18
  },
  icon: {
    color: 'black',
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  }
})

export default SearchBar
