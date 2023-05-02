import React, {useState} from 'react';
import { useEffect } from 'react';
import APIKit from '../../spotify';
import styles from './favorites.module.css';
import Song from './song';
import { IconContext } from "react-icons";
import { MdFavorite } from "react-icons/md";
export default function Favorites() {

  const [tracks, setTracks] = useState(null);

  const [image, setImage] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
      APIKit.get('me/tracks').then(function(response) {
        setTracks(response.data.items);
    })
  }, []) 

  useEffect(() => {
    APIKit.get('me/').then(function(response) {
      setImage(response.data.images[0].url);
      setName(response.data.display_name);
  })
}, [])

 
  return (
    <div className={styles.main}>
      <div className={styles.favoritesHeader}>
        <IconContext.Provider value={{ size: "150px", color: "#DEDFE4" }}>
            <MdFavorite />
        </IconContext.Provider>
        <div className={styles.info}>
          <h1 className={styles.mainTitle}>Your favorites</h1>
          <div className={styles.userInfo}>
            <img 
              src={image}
              alt={name}
              className={styles.profilePic}
            />
            <h2 className={styles.name}>{name}</h2>
          </div>
        </div>

      </div>
      {tracks?.map((track) => (
        <Song track = {track.track} key = {track.track.id}/>
      ))}

    </div>
  )
}