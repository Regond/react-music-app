import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Library from '../library/library';
export default function Home() {
  return (
    <div>
        <Router>
            <Routes>
            <Route path="/" element={<Library />} />

            </Routes>
        </Router>
    </div>
  )
}
