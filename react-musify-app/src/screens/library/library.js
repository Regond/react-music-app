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

                

            </div>
        ))}

      </div>
    </div>
  )
}
