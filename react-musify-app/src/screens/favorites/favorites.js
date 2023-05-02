import React, {useState} from 'react';
import { useEffect } from 'react';
import APIKit from '../../spotify';

export default function Favorites() {

  const [tracks, setTracks] = useState(null);

  useEffect(() => {
      APIKit.get('me/tracks').then(function(response) {
        setTracks(response.data.items);
    })
  }, []) 


  return (
    <div>

      {tracks?.map((track) => (
        <img 
          src={track.track.album.images[0].url}
          alt='asdas'
          key={track.track.id}
        />
          
        ))}
    {console.log(tracks)}
    </div>
  )
}