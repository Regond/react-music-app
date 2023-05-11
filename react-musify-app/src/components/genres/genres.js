import React, {useState, useEffect} from 'react';
import styles from './genres.module.css';
import APIKit from '../../spotify';

export default function Genres() {

    const [genres, setGenres] = useState(null);

  useEffect(() => {
    APIKit.get('recommendations/available-genre-seeds').then(function(response) {
      setGenres(response.data.genres);
      console.log(response.data.genres);
  })
}, []) 
  return (
    <div>Genres</div>
  )
}
