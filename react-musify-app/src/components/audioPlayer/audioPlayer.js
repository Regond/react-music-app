import React, { useState, useRef, useEffect } from "react";
import styles from './audioPlayer.module.css';

export default function AudioPlayer({
    currentTrack,
    currentIndex,
    setCurrentIndex,
    total,
  }) {

    console.log(currentTrack);

  return (
    <div className={styles.mainContainer}>
        <div className={styles.songInfo}>
            <img 
                className={styles.songImage}
                src={currentTrack?.album?.images[0]?.url}
            />
            song info
        </div>
        <div className={styles.controls}>
            Controls
        </div>
    </div>
  )
}
