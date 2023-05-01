import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Library from '../library/library';
import Feed from '../feed/feed';
import Favorites from '../favorites/favorites';
import Trending from '../trending/trending';
import Player from '../player/player';
export default function Home() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={<Library />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/trending" element={<Trending />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/player" element={<Player />} />
            </Routes>
        </Router>
    </div>
  )
}
