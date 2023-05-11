import React, { useState, useEffect } from 'react';
import APIKit from '../../spotify';
import styles from './search.module.css';
import { IoSearch } from "react-icons/io5";
import { IconContext } from "react-icons";
import { useTransition, animated } from 'react-spring';
import SearchItem from '../favorites/song';
import Genres from '../../components/genres/genres';

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

  const transitions = useTransition(searchResults, {
    key: (item) => item.id,
    from: { opacity: 0, transform: 'translateY(-50%)' },
    enter: { opacity: 1, transform: 'translateY(0%)' },
    trail: 50,
  });


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
          {transitions((style, track, index) => (
            <animated.div key={index.ctrl.id} style={style}>
              <SearchItem track={track} />
            </animated.div>
          ))}
        </div>
      </div>

      <Genres />


    </div>
  )
}
