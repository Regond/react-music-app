import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Library from '../library/library';
import Feed from '../feed/feed'
export default function Home() {
  return (
    <div>
        <Router>
            <Routes>
            <Route path="/" element={<Library />} />
            <Route path="/feed" element={<Feed />} />
            </Routes>
        </Router>
    </div>
  )
}
