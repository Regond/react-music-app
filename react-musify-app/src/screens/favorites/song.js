import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import styles from './sond.module.css';
import { IconContext } from "react-icons";
import { AiFillPlayCircle} from "react-icons/ai";
import Like from '../../components/like/like'

export default function Song(track, key) {

    const artists = [];
    track?.track?.album?.artists?.forEach((element) => {
      artists.push(element.name);
    });


    // console.log(track.track.album.id);
    function millisToMinutesAndSeconds(millis) {
      var minutes = Math.floor(millis / 60000);
      var seconds = ((millis % 60000) / 1000).toFixed(0);
      return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
    

    const navigate = useNavigate();

    const playPlaylist = (id) => {
      navigate("/player", { state: { ids: id } });
    };

  return (
    <div 
      className={styles.song}
      key={track.track.album.id}
      onClick={() => playPlaylist(track.track.album.id)}
    > 
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
