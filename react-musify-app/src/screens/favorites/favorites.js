import React, {useState} from 'react';
import { useEffect } from 'react';
import APIKit from '../../spotify';
import styles from './favorites.module.css';
import Song from './song';

export default function Favorites() {

  const [tracks, setTracks] = useState(null);

  useEffect(() => {
      APIKit.get('me/tracks').then(function(response) {
        setTracks(response.data.items);
    })
  }, []) 

 
  return (
    <div className={styles.main}>
      <h1 className={styles.mainTitle}>Your favorites</h1>
      {tracks?.map((track) => (
        <Song track = {track.track} key = {track.track.id}/>
      ))}

    </div>
  )
}