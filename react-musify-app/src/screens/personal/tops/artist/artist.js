import React from 'react';
import styles from './artist.module.css'


export default function Artist({
    name,
    image,
    genre
}) {
  return (
    <div className={styles.mainContainer}>
        <img 
            src={image}
            alt={image}
            className={styles.artistImage}
        />
        <h3>{name}</h3>
        <h4>{genre}</h4>
    </div>
  )
}
