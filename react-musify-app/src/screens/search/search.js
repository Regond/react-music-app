import React, { useState, useEffect } from 'react';
import APIKit from '../../spotify';


export default function Feed() {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (searchTerm === '') {
      return;
    }

    APIKit.get(`/search?q=${searchTerm}&type=track`)
      .then(function(response) {
        setSearchResults(response.tracks.items);
      })
      .catch(function(error) {
        console.log(error);
      });
  };


  return (
    <div>
        <form onSubmit={handleFormSubmit}>
        <input type="text" value={searchTerm} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {searchResults.map((track) => (
          <li key={track.id}>{track.name}</li>
        ))}
      </ul>
    </div>
  )
}
