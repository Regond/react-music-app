import React, { useState, useEffect } from 'react';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import APIKit from '../../spotify';
export default function Like(track) {

const [isLiked, setIsLiked] = useState(false);

useEffect(() => {
    APIKit.get(`me/tracks/contains?ids=${track.track.track.id}`)
    .then(function(response) {
      setIsLiked(response.data[0]);
  })
}, []) 


function handleAddToFavoirtes() {
    APIKit.put(`/me/tracks?ids=${track.track.track.id}`)
    .then(function(response) {
        console.log(response);
    })
}

  return (
    <AiOutlineHeart size={"40px"} onClick={handleAddToFavoirtes}/>
  )
}
