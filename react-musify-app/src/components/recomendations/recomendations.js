import React, {useState, useEffect} from 'react';
import styles from './recomendation.module.css';
import APIKit from '../../spotify';
import Song from '../../screens/favorites/song';


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
      Recomendations
    </div>
  )
}
