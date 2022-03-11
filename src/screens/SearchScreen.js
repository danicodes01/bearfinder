import React, { useState,} from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'
import { withNavigation } from 'react-navigation'

const SearchScreen = () => {

  const [term, setTerm] = useState('')
  const [results, errorMessage, searchApi] = useResults('')


  const filteredResultsPrice = price => {
      // price === $ || $$ || $$$
      return results.filter(result => {
        return result.price === price
      }) 
  }

  return (
    <>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
      <ResultsList results={filteredResultsPrice('$')} title="Broke, Sad, Drinking Alone..."/>
      <ResultsList results={filteredResultsPrice('$$')} title="Just Got Paid, Going Out With Friends..."/>
      <ResultsList results={filteredResultsPrice('$$$')} title="Feeling Fancy..."/>
      </ScrollView>
    </>
  ) 
}
 
const styles = StyleSheet.create({})
export default SearchScreen
