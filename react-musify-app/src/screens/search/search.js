import React, { useState, useEffect } from 'react';
import APIKit from '../../spotify';


export default function Feed() {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };


  return (
    <div>

    </div>
  )
}
