import React, {useState} from 'react';
import { useEffect } from 'react';
import APIKit from '../../spotify';
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import styles from './library.module.css';

export default function Library() {
  const [playlists, setPlaylists] = useState(null)

  useEffect(() => {
      APIKit.get('me/playlists').then(function(response) {
      setPlaylists(response.data.items)
      console.log(response.data.items);
    })
  }, []) 


  const navigate = useNavigate();

  const playPlaylist = (id) => {
    navigate("/player", { state: { id: id } });
  };

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.mainTitle}>Playlists</h1>
      <div className={styles.playlists}>
        {playlists?.map((playlist) => (
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
