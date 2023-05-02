import React, {useState} from 'react';
import { useEffect } from 'react';
import APIKit from '../../spotify';
import styles from './favorites.module.css';
import Song from './song';
import { IconContext } from "react-icons";
import { MdFavorite } from "react-icons/md";
export default function Favorites() {

  const [tracks, setTracks] = useState(null);

  useEffect(() => {
      APIKit.get('me/tracks').then(function(response) {
        setTracks(response.data.items);
    })
  }, []) 

 
  return (
    <div className={styles.main}>
      <div className={styles.favoritesHeader}>
        <IconContext.Provider value={{ size: "100px", color: "#fff" }}>
            <MdFavorite />
        </IconContext.Provider>
        <h1 className={styles.mainTitle}>Your favorites</h1>
      </div>
      {tracks?.map((track) => (
        <Song track = {track.track} key = {track.track.id}/>
      ))}

    </div>
  )
}