import React, { useState, useRef, useEffect } from "react";
import styles from './audioPlayer.module.css';

export default function AudioPlayer({
    currentTrack,
    currentIndex,
    setCurrentIndex,
    total,
  }) {


  return (
    <div className={styles.mainContainer}>
        <div className={styles.songInfo}>
            song info
        </div>
        <div className={styles.controls}>
            Controls
        </div>
    </div>
  )
}
