import React from 'react';
import styles from './sidebar.module.css';
import SidebarButton from './sidebarButton';
import { MdSpaceDashboard } from "react-icons/md";

export default function Sidebar() {
  return (
    <div className={styles.mainContainer}>
        <div>
          <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
        </div>   
    </div>
  )
}
