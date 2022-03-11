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
      <View style={styles.container}>
        <Text style={styles.text}>{result.name}</Text>
        <Text style={styles.info}>{result.location.display_address}</Text>
        <Text style={styles.info}>{result.phone.slice(1)}</Text>
       
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
  container: {
    marginLeft:15,


  },
    images: {
        width: 200,
        height: 175, 
        borderRadius: 4,
        marginBottom: 6,
        
    }, 
    text: {
      marginBottom: 10,
      fontWeight: 'bold',

    },
    info: {

    }
})
export default ResultsShowScreen
