import React, {useState} from 'react';
import styles from './topArtists.module.css';
import APIKit from '../../../spotify';
import Artist from './artist/artist';

export default function TopArtists() {
  const [artists, setArtists] = useState();
  APIKit
  .get("me/top/artists?limit=6")
  .then(response => {
    setArtists(response.data.items)
  })

  return (
    <div className={styles.mainContainer}>
        {artists?.map((artist) => (
            <Artist key={artist?.id} genre={artist?.genres[0]} image={artist?.images[1].url} name={artist?.name}/>
        ))}
    </div>
  )
}
