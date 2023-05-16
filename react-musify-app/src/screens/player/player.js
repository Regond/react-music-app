import React, { useEffect, useState } from 'react';
import styles from './player.module.css';
import { useLocation } from "react-router-dom";
import APIKit from "../../spotify";

export default function Player() {

  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if(location.state) {
      apiClient
      .get("playlists/" + location.state?.id + "/tracks")
      .then(response => {
        setTracks(response.data.items);
        setCurrentTrack(response.data?.items[0]?.track);
      });
    }
  }, [location.state]);

  
  return (
    <div className={styles.mainContainer}>
    </div>
  )
}
