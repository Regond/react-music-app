import React from 'react';
import styles from './genre.module.css';
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";

export default function Genre(props) {
  return (
    <div className={styles.mainContainer} style={props.style}>
      <h2 className={styles.genre}>{props.genre}</h2>
      <IconContext.Provider  value={{ size: "70px", color: "white" }}>
            <AiFillPlayCircle className={styles.play}/>
        </IconContext.Provider>
    </div>
  )
}
