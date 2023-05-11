import React from 'react';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import APIKit from '../../spotify';
export default function Like(track) {

function handleLike() {
    APIKit.put(`/me/tracks?ids=${track.track.track.id}`)
    .then(function(response) {
        console.log(response);
    })
}
console.log(track.track.track.id);
  return (
    <AiFillHeart size={"40px"} onClick={handleLike}/>
  )
}
