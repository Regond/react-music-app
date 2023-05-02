import React from 'react';
import styles from './sond.module.css';
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";

export default function Song(track, key) {

    const artists = [];
    track?.track?.album?.artists?.forEach((element) => {
      artists.push(element.name);
    });
  return (
    <div className={styles.song}> 
        <img 
            src={track.track.album.images[0].url}
            alt={track.track.name}
            key={track.track.id}
            className={styles.songImage}
        />
        <div className={styles.songInfo}>
            <h2 className={styles.songTitle}>{track.track.name}</h2>
            <h3 className={styles.songArtist}>{artists?.join(', ')}</h3>
        </div>
        <IconContext.Provider  value={{ size: "70px", color: "#24252A" }}>
            <AiFillPlayCircle className={styles.play}/>
        </IconContext.Provider>
  </div>

  )
}
