import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image
} from 'react-native'
import yelp from '../api/yelp'

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null)
  const id = navigation.getParam('id')
  console.log(result)

  const getResult = async id => {
    const response = await yelp.get(`/${id}`)
    setResult(response.data)
  }

  useEffect(() => {
    getResult(id)
  }, [])

  if (!result) {
    return null
  }
  return (
    <>
      <View>
        <Text>{result.name}</Text>
        <FlatList
          keyExtractor={photo => photo}
          data={result.photos}
          renderItem={({ item }) => {
            return <Image style={styles.images} source={{ uri: item }} />
          }}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
    images: {
        width: 200,
        height: 175, 
        borderRadius: 4,
    }
})
export default ResultsShowScreen
