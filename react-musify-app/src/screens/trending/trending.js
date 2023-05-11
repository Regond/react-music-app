import React from 'react'
import { useLocation } from "react-router-dom";

export default function Trending() {
  const location = useLocation();
  const showGenreItems =  location.state?.genre;
  return (
    !showGenreItems ? 
    <div>trending</div> : location.state?.genre
  )
}
