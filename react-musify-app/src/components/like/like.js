import React, { useState, useEffect } from 'react';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import APIKit from '../../spotify';
export default function Like({id}) {

const [isLiked, setIsLiked] = useState();

useEffect(() => {
    APIKit.get(`me/tracks/contains?ids=${id}`)
    .then(function(response) {
      setIsLiked(response.data[0]);
  })
}, []) 


function handleAddToFavoirtes() {
    APIKit.put(`/me/tracks?ids=${id}`)
    .then(function(response) {
        setIsLiked(!isLiked);
    })
}

function handleDeleteFromFavoirtes() {
    APIKit.delete(`/me/tracks?ids=${id}`)
    .then(function(response) {
        setIsLiked(!isLiked);
    })
}


  return (
    isLiked ? <AiFillHeart size={"40px"} onClick={handleDeleteFromFavoirtes}/> :
    <AiOutlineHeart size={"40px"} onClick={handleAddToFavoirtes}/>
  )
}
