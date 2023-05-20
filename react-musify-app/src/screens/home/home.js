import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Library from '../library/library';
import Search from '../search/search';
import Favorites from '../favorites/favorites';
import Trending from '../trending/trending';
import Player from '../player/player';
import Sidebar from '../../components/sidebar/sidebar';
import Login from '../auth/login';
import Personal from '../personal/personal';
import { setClientToken } from '../../spotify';

export default function Home() {
  const [token, setToken] = useState('');
  useEffect (() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token)
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, [])

  return !token ? (
    <Login />
  ) : (
    <div>
        <Router>
            <Sidebar />
            <Routes>
                <Route path="/" element={<Library />} />
                <Route path="/search" element={<Search />} />
                <Route path="/trending" element={<Trending />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/player" element={<Player />} />
                <Route path="/personal" element={<Personal />} />
            </Routes>
        </Router>
    </div>
  )
}
