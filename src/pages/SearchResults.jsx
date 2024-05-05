import React, { useEffect, useState } from 'react'
import { useSearchResult } from '../context/SearchContext'
import { Container, Typography } from '@mui/material'
import TopArtistCard from '../components/ArtistCard'
import Loading from '../components/Loading'

const SearchResults = () => {
    const {searchResults} = useSearchResult()
    const [loading,setLoading] = useState(true)

    useEffect(()=> {
      let timer = setTimeout(()=> {
        setLoading(false)
      },1000)
      return () => clearTimeout(timer)
    },[])
    console.log(searchResults)
  return (
 <>
 {loading ? <Loading/> : (   <Container sx={{backgroundColor:'black', width:"100vw", marginRight:"-.2px", minHeight:"100vh",py:10, pt:15,backgroundImage:`url("/images/loginback.jpg")`, backgroundPosition:"center",backgroundRepeat:"repeat", backgroundSize:"contain"}}>
      <Typography  fontWeight={'bold'}  variant="h4"color="white" py='2rem' mb={5} textAlign={'center'} sx={{background: "linear-gradient(180deg, #393940 30%, #202024 100%)",}} mt={2}>Artists</Typography>
      <Container sx={{display:"flex", flexWrap:"wrap", justifyContent:"center", rowGap:"1rem", columnGap:"10px"}}>{
        searchResults?.length > 0 ? (searchResults.map(artist => (
          <TopArtistCard key={artist.name} {...artist}/>
        ))):(<Typography>No Results</Typography>)
      }</Container>
    </Container>)}
 </>
  )
}

export default SearchResults
