import {useEffect, useState} from 'react'
import yelp from '../api/yelp'


export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
  
    const searchApi = async (searchTerm) => {
      try {
        const response = await yelp.get(`/search`, {
          params: {
            limit: 50,
            term: 'gay bar', 
            location: searchTerm
          }
        })
        setResults(response.data.businesses)
        
      } catch (err) {
          console.log('Something Went Wrong')
          setErrorMessage('Something Went Wrong')
      }
    }
  
  
    useEffect(() => {
        searchApi('New York')
    }, [])

    return [results, errorMessage, searchApi]
}
