import React, { useEffect, useState, useRef } from 'react';
import styles from './player.module.css';
import { useLocation } from "react-router-dom";
import APIKit from "../../spotify";
import Queue from '../../components/queue/queue';
import AudioPlayer from '../../components/audioPlayer/audioPlayer';
import Widget from '../../components/widgets/widget';
import Recomendations from '../../components/recomendations/recomendations';

export default function Player() {

  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [image, setImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [artist, setArtist] = useState();

  useEffect(() => {
    if(location.state.id) {
      APIKit
      .get("playlists/" + location.state?.id + "/tracks")
      .then(response => {
        setTracks(response.data.items);
        setCurrentTrack(response.data?.items[0]?.track);
        setArtist(response.data?.items[0]?.track.artists[0]?.id);
      });
    }
    else {
      APIKit
      .get("albums/" + location.state?.ids + "/tracks")
      .then(response => {
        setTracks(response.data?.items);
        setCurrentTrack(response.data?.items[0]);
        setArtist(response.data?.items[0].artists[0]?.id);
      });

      APIKit
      .get("albums/" + location.state?.ids)
      .then(response => {
        setImage(response.data.images[0].url);
      })
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
          image = {image}
        />
        <div className={styles.widgets}>
          <Queue tracks={tracks} setCurrentIndex={setCurrentIndex}/>
          <Recomendations setCurrentIndex={setCurrentIndex}/>
          <Widget artistID={artist}/>
        </div>

    </div>
  )
}
