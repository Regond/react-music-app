import React, { useEffect, useRef, useState } from 'react';
import styles from './personal.module.css';
import APIKit from '../../spotify';
import { FaUserAlt } from "react-icons/fa";

export default function Personal() {

    const [user, setUser] = useState();

    useEffect(() => {
        APIKit.get("me").then(response => {
          setUser(response.data);
          console.log(response.data)
        })
      }, []) 
  return (
    <div className={styles.mainContainer}>
        <div className={styles.wrapper}>
            <img
                className={styles.Image}
                src={user?.images[0]?.url}
                alt={user?.id}
            />
            <div className={styles.userInfo}>
                <div className={styles.Info}>
                    <h1 className={styles.userName}>Nickname: {user?.display_name}</h1>
                    <h2 className={styles.userEmail}>Email: {user?.email}</h2>
                </div>
                <div className={styles.type}>
                    user
                </div>
                <h2 className={styles.userFollowers}>Followers: {user?.followers.total} <FaUserAlt /></h2>
            </div>
        </div>
    </div>
  )
}
