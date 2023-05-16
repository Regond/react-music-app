import React, { useState, useRef, useEffect } from "react";
import styles from './audioPlayer.module.css';

export default function AudioPlayer({
    currentTrack,
    currentIndex,
    setCurrentIndex,
    total,
  }) {

    const artists = [];
    currentTrack?.album?.artists.forEach((artist) => {
      artists.push(artist.name);
    });

  return (
    <div className={styles.mainContainer}>
        <div className={styles.songInfo}>
            <img 
                className={styles.songImage}
                src={currentTrack?.album?.images[0]?.url}
            />
            <div className={styles.info}>
                <h1 className={styles.songTitle}>{currentTrack?.name} - {artists.join(" | ")}</h1>
                <h2 className={styles.duration}>Duration: 0:30</h2>
                <div className={styles.type}>{currentTrack?.type}</div>
            </div>
        </div>
        <div className={styles.controls}>
            Controls
        </div>
    </div>
  )
}
