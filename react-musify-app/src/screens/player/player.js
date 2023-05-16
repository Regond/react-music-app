import React, { useEffect, useState } from 'react';
import styles from './player.module.css';
import { useLocation } from "react-router-dom";
import APIKit from "../../spotify";
import AudioPlayer from '../../components/audioPlayer/audioPlayer';

export default function Player() {

  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if(location.state) {
      APIKit
      .get("playlists/" + location.state?.id + "/tracks")
      .then(response => {
        setTracks(response.data.items);
        setCurrentTrack(response.data?.items[0]?.track);
      });
    }
  }, [location.state]);

  useEffect(() => {
    setCurrentTrack(tracks[currentIndex]?.track);
  }, [currentIndex, tracks]);

  return (
    <div className={styles.mainContainer}>
        <AudioPlayer 
          currentTrack={currentTrack}
          total={tracks}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
    </div>
  )
}
