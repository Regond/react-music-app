import React from 'react';
import styles from './sond.module.css';
import { IconContext } from "react-icons";
import { AiFillPlayCircle} from "react-icons/ai";
import Like from '../../components/like/like'

export default function Song(track, key) {

    const artists = [];
    track?.track?.album?.artists?.forEach((element) => {
      artists.push(element.name);
    });


    function millisToMinutesAndSeconds(millis) {
      var minutes = Math.floor(millis / 60000);
      var seconds = ((millis % 60000) / 1000).toFixed(0);
      return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
    

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
          <p className={styles.songDuration}>{millisToMinutesAndSeconds(track.track.duration_ms)}</p>
          <Like track = {track}/>
          <IconContext.Provider  value={{ size: "70px", color: "#24252A" }}>
              <AiFillPlayCircle className={styles.play}/>
          </IconContext.Provider>

  </div>

  )
}
