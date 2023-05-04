import React, { useState, useEffect } from 'react';
import Recomendations from '../../components/recomendations/recomendations';
import APIKit from '../../spotify';
import styles from './search.module.css';
import { IoSearch } from "react-icons/io5";
import { IconContext } from "react-icons";
import SearchItem from './searchItem';

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
        <form className={styles.form} onSubmit={handleFormSubmit}>
          <div className={styles.inputContainer}>
            <IconContext.Provider value={{ size: "32px" }}>
              <IoSearch />
            </IconContext.Provider>

            <input type="text" placeholder='Enter the author or track' value={searchTerm} className={styles.searchInput} onChange={handleInputChange} />
            <button className={styles.searchButton} type="submit">Search</button>
         </div>

        </form>
        <div className={styles.searchResultContainer}>
          {searchResults.map((track) => (
            <SearchItem track = {track}/>
          ))}
        </div>
      </div>

      <Recomendations />


    </div>
  )
}
