import React from 'react';
import styles from './genre.module.css';

export default function Genre(props) {
  return (
    <div className={styles.mainContainer} style={props.style}>
      <h2 className={styles.genre}>{props.genre}</h2>

    </div>
  )
}
