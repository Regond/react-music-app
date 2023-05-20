import React, { useState, useRef, useEffect } from "react";
import styles from './audioPlayer.module.css';
import Controls from './controls/controls';
import {AiOutlineClockCircle} from 'react-icons/ai'

export default function AudioPlayer({
    currentTrack,
    currentIndex,
    setCurrentIndex,
    total,
    image,
  }) {

    let audioSrc;
    let audioRef;
    let id;
    const [isPlaying, setIsPlaying] = useState(false);
    const [trackProgress, setTrackProgress] = useState(0);

    let artists = [];
    let type, name;
    const albumImage = (image != null ? image : currentTrack?.album?.images[0].url);
    
    if(total[currentIndex]?.preview_url) {
      audioSrc = total[currentIndex]?.preview_url;
      audioRef = useRef(new Audio(total[0]?.preview_url));
      id = (total[currentIndex]?.id)
    }
    else {
      audioSrc = total[currentIndex]?.track.preview_url;
      audioRef = useRef(new Audio(total[0]?.track.preview_url));
      id = ((total[currentIndex])?.track?.id);
    }
    const isReady = useRef(false);
    const intervalRef = useRef();
    const { duration } = audioRef.current;

    const currentPercentage = duration ? (trackProgress / duration) * 100 : 0;

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
          audioRef.current.play().then(() => {
            startTimer();
          });
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
      audioRef.current = new Audio(audioSrc);
      const onCanPlay = () => {
        setTrackProgress(audioRef.current.currentTime);
        if (isReady.current) {
          audioRef.current.play();
          setIsPlaying(true);
          startTimer();
        } else {
          isReady.current = true;
        }
      };
    
      audioRef.current.addEventListener('canplay', onCanPlay);
      return () => {
        audioRef.current.removeEventListener('canplay', onCanPlay);
        audioRef.current.pause();
        clearInterval(intervalRef.current);
      };
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
        setIsPlaying(false);
      } else setCurrentIndex(0);
    };

    const handlePrev = () => {
      if (currentIndex - 1 < 0) setCurrentIndex(total.length - 1);
      else setCurrentIndex(currentIndex - 1);
    };

    const addZero = (n) => {
      return n > 9 ? "" + n : "0" + n;
    };

    if(total[currentIndex]?.artists) {
      total[currentIndex]?.artists.forEach((artist) => {
        artists.push(artist.name);
      })
      name = (total[currentIndex].name)
      type = (total[currentIndex].type)
    }
    else {
      currentTrack?.album?.artists.forEach((artist) => {
        artists.push(artist.name);
      });
      name = currentTrack?.name;
      type = currentTrack?.type;
    }

  return  (
    <div className={styles.wrapper}>
        <div className={styles.mainContainer}>
        <div className={styles.songInfo}>
            <img 
                className={styles.songImage}
                src={albumImage}
            />
            <div className={styles.info}>
                <div className={`${styles.scrollContainer} ${styles.marqueeContainer}`}>
                    <h1 className={`${styles.songTitle} ${styles.marquee}`}>{name} - {artists.join(" | ")}</h1>
                </div>
                <h2 className={styles.duration}><AiOutlineClockCircle /> Duration: <span>0:{addZero(Math.round(trackProgress))}</span>/ 0:30</h2>
                <div className={styles.type}>{type}</div>
                <div className={styles.progressBar}>
                    <div className={styles.progress} style={{width: currentPercentage + '%', transition: 'width .3s'}}></div>
                </div>
            </div>
        </div>
        <div className={styles.controls}>
            <Controls             
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              handleNext={handleNext}
              handlePrev={handlePrev}
              total={total}
            />
        </div>
      </div>

    </div>
  )
}
