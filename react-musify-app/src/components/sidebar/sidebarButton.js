import React from 'react';
import styles from './sidebarButton.module.css'
import { IconContext } from "react-icons";
import { Link, useLocation } from "react-router-dom";

export default function SidebarButton(props) {

  const location = useLocation();

  const isActive = location.pathname === props.to;
  
  const btnClass = isActive ? "btn-body active" : "btn-body";
  return (
    <Link to={props.to}>
      <div className={btnClass}>
        <IconContext.Provider className={styles.btnIcon} value={{ size: "24px" }}>
          {props.icon}
          <p className={styles.btnTitle}>{props.title}</p>
        </IconContext.Provider>
      </div>
    </Link>
  )
}
