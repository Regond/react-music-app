import React from 'react'
import { useLocation } from "react-router-dom";
import GenreList from '../../components/genreList/genreList';

export default function Trending() {
  const location = useLocation();
  const showGenreItems =  location.state?.genre;
  return (
    !showGenreItems ? 
      <></> 
      
      : 
    <GenreList genre = {showGenreItems}/>
  )
}
