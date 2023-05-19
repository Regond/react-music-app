import React from 'react';
import styles from './queue.module.css';

export default function Queue({ tracks, setCurrentIndex }) {
  return (
    <div className={styles.mainContainer}>
        <h1 className={styles.title}>Queue</h1>
        <h2>Up to next:</h2>
        <div className={styles.queueList}>
          {tracks?.map((track, index) => (
            <div
              key={index + "key"}
              className={styles.queueItem}
              onClick={() => setCurrentIndex(index)}
            >
              <p className={styles.trackName}>{(track?.name ? track?.name : track?.track?.name)}</p>
              <p>0:30</p>
            </div>
          ))}
        </div>
    </div>
    
  )
}
