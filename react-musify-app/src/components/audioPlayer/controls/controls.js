import React from 'react';
import styles from "./controls.module.css";
import { IconContext } from "react-icons";
import { IoPlayBackSharp, IoPlayForwardSharp, IoPlaySharp } from "react-icons/io5";
import { IoMdPause } from "react-icons/io";

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
                <IoPlayBackSharp />
            </div>
            <div 
                className={isPlaying ? styles.playing : styles.action}
                onClick={() => setIsPlaying(!isPlaying)}
            >
                { isPlaying ? <IoMdPause /> : <IoPlaySharp />}
            </div>
            <div className={styles.action} onClick={handleNext}>
                <IoPlayForwardSharp />
            </div>

        </div>
    </IconContext.Provider>

  )
}
