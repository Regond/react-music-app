import React from 'react';
import { Link } from "react-router-dom";
import styles from './sidebar.module.css';
import SidebarButton from './sidebarButton';
import { MdSpaceDashboard } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";

export default function Sidebar() {
  return (
    <div className={styles.mainContainer}>
        <Link to='/' className={styles.Logo}>
            <h1 className={styles.logoName}>Musify</h1>
        </Link>

        <div className={styles.buttonsContainer}>
          <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
          <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} />
          <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
          <SidebarButton title="Favorites" to="/favorites" icon={<MdFavorite />}/>
          <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
        </div>   
    </div>
  )
}
