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
    <IconContext.Provider value={{ size: "50px", color: "black" }}>
        <div className={styles.mainContainer}>
            <div className={styles.action} onClick={handlePrev}>
                <IoPlaySkipBack />
            </div>
            <div 
                className={styles.action}
                onClick={() => setIsPlaying(!isPlaying)}
            >
                {isPlaying ? <FaPause /> : <IoPlay />}
            </div>
            <div className={styles.action} onClick={handleNext}>
                <IoPlaySkipForward />
            </div>

        </div>
    </IconContext.Provider>

  )
}
