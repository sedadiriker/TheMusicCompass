import React from 'react'
import { useSearchResult } from '../context/SearchContext'
import { Container, Typography } from '@mui/material'
import TopArtistCard from '../components/ArtistCard'

const SearchResults = () => {
    const {searchResults} = useSearchResult()
    
    console.log(searchResults)
  return (
    <Container sx={{backgroundColor:'black', width:"100vw", marginRight:"-.2px", minHeight:"100vh"}}>
      <Typography variant="h4" color="white" pt='2rem' mb={5} textAlign={'center'}> Artists</Typography>
      <Container sx={{display:"flex", flexWrap:"wrap", justifyContent:"center", rowGap:"1rem", columnGap:"10px"}}>{
        searchResults?.length > 0 ? (searchResults.map(artist => (
          <TopArtistCard key={artist.name} {...artist}/>
        ))):(<Typography>No Results</Typography>)
      }</Container>
    </Container>
  )
}

export default SearchResults
