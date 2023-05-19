import React, {useState} from 'react';
import styles from './widget.module.css';
import APIKit from '../../spotify';
import { FaUserAlt } from "react-icons/fa";


export default function Widget({ artistID }) {
    const [similar, setSimilar] = useState([]);
    if(artistID) {
        APIKit
        .get(`/artists/${artistID}/related-artists`)
        .then(response => {
            setSimilar(response.data?.artists);
        })
    }
  return (
    <div className={styles.mainContainer}>
        <h1 className={styles.title}>Similar</h1>
        <h2>Artists</h2>
        <div className={styles.queueList}>
          {similar?.map((artist, index) => (
            <div
              key={index + "key"}
              className={styles.queueItem}
            >
              <p className={styles.artistName}>{artist?.name}</p>
              <p>{artist?.followers?.total} <FaUserAlt/></p>
            </div>
          ))}
        </div>
    </div>
  )
}
