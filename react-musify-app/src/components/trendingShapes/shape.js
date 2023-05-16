import React, { useState } from 'react';
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import styles from  './shape.module.css';

export default function Shape(playlists, title) {

  const [playlist, setPlayList] = useState(playlists);
  return (
        <div className={styles.features}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.playlists}>
                {playlist?.map((playlist) => (
                    <div 
                    className={styles.playlist}
                    key={playlist.id}
                    onClick={() => playPlaylist(playlist.id)}
                    >
                        <img
                        src={playlist.images[0].url}
                        className={styles.playlistImage}
                        alt="Playlist-Art"
                        />
                    <div className={styles.info}>
                        <h3 className={styles.playlistTitle}>{playlist.name}</h3>
                            <IconContext.Provider  value={{ size: "50px", color: "#24252A" }}>
                            <AiFillPlayCircle className={styles.play}/>
                            </IconContext.Provider>
                        
                    </div>
                    <h3 className={styles.totalTracks}>{playlist.tracks.total} Songs</h3>
                    

                    </div>
                ))}
            </div>
    </div>
  )
}
