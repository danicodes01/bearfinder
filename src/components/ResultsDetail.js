import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: result.image_url}}/>
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.reviews}>{result.rating} Stars, {result.review_count}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
    },
    image: {
        width: 200,
        height: 165,
        marginBottom: 5,
        borderRadius: 4,
    },
    name: {
        fontWeight: 'bold',


    },
    reviews: {


    }
})

export default ResultsDetail
