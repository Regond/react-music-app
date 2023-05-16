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

    const startTimer = () => {
      clearInterval(intervalRef.current);
  
      intervalRef.current = setInterval(() => {
        if (audioRef.current.ended) {
          handleNext();
        } else {
          setTrackProgress(audioRef.current.currentTime);
        }
      }, [1000]);
    };

    useEffect(() => {
      if (audioRef.current.src) {
        if (isPlaying) {
          audioRef.current.play();
          startTimer();
        } else {
          clearInterval(intervalRef.current);
          audioRef.current.pause();
        }
      } else {
        if (isPlaying) {
          audioRef.current = new Audio(audioSrc);
          audioRef.current.play();
          startTimer();
        } else {
          clearInterval(intervalRef.current);
          audioRef.current.pause();
        }
      }
    }, [isPlaying]);

    useEffect(() => {
      audioRef.current.pause();
      audioRef.current = new Audio(audioSrc);
  
      setTrackProgress(audioRef.current.currentTime);
  
      if (isReady.current) {
        audioRef.current.play();
        setIsPlaying(true);
        startTimer();
      } else {
        isReady.current = true;
      }
    }, [currentIndex]);
  
    useEffect(() => {
      return () => {
        audioRef.current.pause();
        clearInterval(intervalRef.current);
      };
    }, []);

    const handleNext = () => {
      if (currentIndex < total.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else setCurrentIndex(0);
    };

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
