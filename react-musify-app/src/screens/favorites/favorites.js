import React, {useState} from 'react';
import { useEffect } from 'react';
import APIKit from '../../spotify';
import styles from './favorites.module.css'

export default function Favorites() {

  const [tracks, setTracks] = useState(null);

  useEffect(() => {
      APIKit.get('me/tracks').then(function(response) {
        setTracks(response.data.items);
    })
  }, []) 


  return (
    <div className={styles.main}>
      {tracks?.map((track) => (
        <div className={styles.song}> 

        </div>
        // <img 
        //   src={track.track.album.images[0].url}
        //   alt='asdas'
        //   key={track.track.id}
        // />
          // track.track.name
        ))}
    {console.log(tracks)}
    </div>
  )
}