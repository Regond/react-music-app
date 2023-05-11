import React, {useState, useEffect} from 'react';
import styles from './genres.module.css';
import APIKit from '../../spotify';
import Genre from '../genre/genre';

export default function Genres() {

    const [genres, setGenres] = useState(null);
    const colors = ["#1e1f21", "#2e3033", "#1e1e1f", "#0d0d0f", "#18181f"];

  useEffect(() => {
    APIKit.get('recommendations/available-genre-seeds').then(function(response) {
      setGenres(response.data.genres);
      console.log(response.data.genres);
  })
}, []) 
  return (
    <div className={styles.mainContainer}>
        <h1 className={styles.mainTitle}>Genres</h1>
        <div className={styles.genres}>
            {genres?.map((genre,index) => (
                <Genre key={index} genre={genre} style={{background: `linear-gradient(to right, ${colors[index % colors.length]}, #000000`,}}/>
            ))}
        </div>

    </div>
  )
}
