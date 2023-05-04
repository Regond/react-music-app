import React, { useState, useEffect } from 'react';
import Recomendations from '../../components/recomendations/recomendations';
import APIKit from '../../spotify';
import styles from './search.module.css';

export default function Search() {

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

    APIKit.get(`/search?q=${searchTerm}&type=track&limit=50`)
      .then(function(response) {
       setSearchResults(response.data.tracks.items);
      })
      .catch(function(error) {
        console.log(error);
      });
  };


  return (
    <div className={styles.mainContainer}>

      <div className={styles.searchContainer}>
        <form onSubmit={handleFormSubmit}>
          <input type="text" value={searchTerm} className={styles.searchInput} onChange={handleInputChange} />
          <button type="submit">Search</button>
        </form>
        <ul>
          {searchResults.map((track) => (
            <li key={track.id}>{track.name}</li>
          ))}
        </ul>
      </div>

      <Recomendations />


    </div>
  )
}
