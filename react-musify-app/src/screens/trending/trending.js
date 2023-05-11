import React, {useState, useEffect, useRef} from 'react';
import { useLocation } from "react-router-dom";
import GenreList from '../../components/genreList/genreList';
import styles from './trending.module.css';
import APIKit from '../../spotify';
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";

export default function Trending() {
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    APIKit.get('browse/featured-playlists?limit=5').then(function(response) {
      setPlaylists(response.data.playlists.items);
      console.log(response.data.playlists.items);
  })
}, []) 

  const location = useLocation();
  const showGenreItems =  location.state?.genre;
  return (
    !showGenreItems ? 
      <div className={styles.mainContainer}>
        <h1 className={styles.mainTitle}>Trending</h1>
         <div className={styles.features}>
            <h2 className={styles.title}>Featured</h2>
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
      </div> 
      
      : 
    <GenreList genre = {showGenreItems}/>
  )
}
