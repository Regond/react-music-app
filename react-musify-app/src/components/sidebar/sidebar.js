import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import styles from './sidebar.module.css';
import SidebarButton from './sidebarButton';
import { IoSearch } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { SlMenu } from "react-icons/sl";
import { IoClose } from "react-icons/io5";
import apiClient from '../../spotify';
export default function Sidebar() {

  const [image, setImage] = useState(
    <FaUserAlt className={styles.profilePic} />
  );
  const [name, setName] = useState('Гість');
  
  const [open, setOpen] = useState(false);
  const handleButton = () => {
    setOpen(!open);
  }

  useEffect(() => {
    apiClient.get("me").then(response => {
      setName(response.data.display_name);
      setImage(
        <img 
          src={response.data.images[0].url}
          className={styles.profileImg}
          alt={name}
        />     
        );
    })
  }, []) 

  return (
    <div className={styles.mainContainer}>
        <Link to='/' className={styles.Logo}>
            <h1 className={styles.logoName}>Musify</h1>
        </Link>
          <div className={styles.buttonsContainer}>
            <SidebarButton to="/search" icon={<IoSearch />} />
            <SidebarButton to="/trending" icon={<FaGripfire />} />
            <SidebarButton to="/player" icon={<FaPlay />} />
            <SidebarButton to="/favorites" icon={<MdFavorite />}/>
            <SidebarButton to="/" icon={<IoLibrary />} />
          </div>  
         
         {
          open?
            <div className={styles.menu}>
              <SidebarButton title="Search" to="/search" icon={<IoSearch />} />
              <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} />
              <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
              <SidebarButton title="Favorites" to="/favorites" icon={<MdFavorite />}/>
              <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
              <IoClose className={styles.btnClose} onClick={handleButton}/>
            </div>
            :
            undefined
         }

        <div className={styles.userInfo}>
          {image}
          
          
        </div>
        <SlMenu  onClick={handleButton} className={styles.btnMenu}/>


    </div>
  )
}
