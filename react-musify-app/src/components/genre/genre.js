import React from 'react';
import { useNavigate } from "react-router-dom";
import styles from './genre.module.css';
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";

export default function Genre(props) {

  const navigate = useNavigate();
  const showGenreItems = (genre) => {
    navigate("/trending", { state: { genre: genre } });
  };
  return (
    <div className={styles.mainContainer} style={props.style} onClick={() => showGenreItems(props.genre)}>
      <h2 className={styles.genre}>{props.genre}</h2>
      <IconContext.Provider  value={{ size: "70px", color: "white" }}>
            <AiFillPlayCircle className={styles.play}/>
        </IconContext.Provider>
    </div>
  )
}
