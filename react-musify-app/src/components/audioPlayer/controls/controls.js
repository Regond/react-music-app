import React from 'react';
import styles from "./controls.module.css";
import { IconContext } from "react-icons";
import { FaPause } from "react-icons/fa";
import { IoPlaySkipBack, IoPlaySkipForward, IoPlay } from "react-icons/io5";

export default function Controls({
    isPlaying,
    setIsPlaying,
    handleNext,
    handlePrev,
  }) {
  return (
    <IconContext.Provider >
        <div className={styles.mainContainer}>
            
        </div>
    </IconContext.Provider>

  )
}
