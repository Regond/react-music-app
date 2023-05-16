import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import APIKit from '../../spotify';
import styles from './styles.module.css';
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";


export default function GenreList(genre) {
    const [playlists, setPlaylists] = useState([])
    useEffect(() => {
        APIKit.get(`/search?q=${genre.genre}&type=playlist&limit=15`).then(function(response) {
        setPlaylists(response.data.playlists.items)
      })
    }, []) 

  const navigate = useNavigate();
  const playPlaylist = (id) => {
    navigate("/player", { state: { id: id } });
  };
  return (
    <div className={styles.mainContainer}>
        <h1>{genre.genre}'s playlists</h1>
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
