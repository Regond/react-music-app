import React, {useState} from 'react';
import { useEffect } from 'react';
import APIKit from '../../spotify';
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import styles from './library.module.css';

export default function Library() {
  const [playlists, setPlaylists] = useState(null)

  useEffect(() => {
      APIKit.get('me/playlists').then(function(response) {
      setPlaylists(response.data.items)
    })
  }, []) 
  
  return (
    <div>library</div>
  )
}
