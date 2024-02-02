import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Comments from './components/Comments/Comments';
import Users from './components/Users/Users';
import Posts from './components/Posts/Posts';
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <h1>Desafio 6:</h1>
        <hr />
        <div className='bar'>
          <nav>
            <ul>
              <li>
                <Link to="/comments">Comments</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/posts">Posts</Link>
              </li>
            </ul>
          </nav>
        </div>
        <hr />
        <Routes>
          <Route path="/comments" element={<Comments />} />
          <Route path="/users" element={<Users />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
