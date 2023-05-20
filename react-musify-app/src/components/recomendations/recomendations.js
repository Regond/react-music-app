import React, {useState, useEffect} from 'react';
import styles from './recomendation.module.css';
import APIKit from '../../spotify';

export default function Recomendations() {

  const [tracks, setTracks] = useState(null);

  useEffect(() => {
    APIKit.get('browse/new-releases').then(function(response) {
      setTracks(response.data.albums.items);
      console.log(response.data.albums.items);
  })
}, []) 



return (
  <div className={styles.mainContainer}>
      <h1 className={styles.title}>Recomendations</h1>
      <h2>For you:</h2>
      <div className={styles.queueList}>
        {tracks?.map((track, index) => (
          <div
            key={index + "key"}
            className={styles.queueItem}
          >
            <p className={styles.trackName}>{(track?.name ? track?.name : track?.track?.name)}</p>
            <p>0:30</p>
          </div>
        ))}
      </div>
  </div>
)
}
