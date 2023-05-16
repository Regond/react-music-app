import React, { useState, useRef, useEffect } from "react";
import styles from './audioPlayer.module.css';
import Controls from './controls/controls';
import {AiOutlineClockCircle} from 'react-icons/ai'

export default function AudioPlayer({
    currentTrack,
    currentIndex,
    setCurrentIndex,
    total,
  }) {

    const [isPlaying, setIsPlaying] = useState(false);
    const [trackProgress, setTrackProgress] = useState(0);

    let audioSrc = total[currentIndex]?.track.preview_url;
    const isReady = useRef(false);

    const { duration } = audioRef.current;

    const audioRef = useRef(new Audio(total[0]?.track.preview_url));

    const artists = [];
    currentTrack?.album?.artists.forEach((artist) => {
      artists.push(artist.name);
    });

  return  (
    <div className={styles.wrapper}>
        <div className={styles.mainContainer}>
        <div className={styles.songInfo}>
            <img 
                className={styles.songImage}
                src={currentTrack?.album?.images[0]?.url}
            />
            <div className={styles.info}>
                <div className={`${styles.scrollContainer} ${styles.marqueeContainer}`}>
                    <h1 className={`${styles.songTitle} ${styles.marquee}`}>{currentTrack?.name} - {artists.join(" | ")}</h1>
                </div>
                <h2 className={styles.duration}><AiOutlineClockCircle /> Duration: 0:30</h2>
                <div className={styles.type}>{currentTrack?.type}</div>
                <div className={styles.progressBar}></div>
            </div>
        </div>
        <div className={styles.controls}>
            <Controls />
        </div>
      </div>

    </div>
  )
}
