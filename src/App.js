import * as React from 'react';
import './App.css';
import Navbar from './NavBar/navbar';
import Trending from './components/Search';
import Search from './components/Trending';
import Toprated from './components/Toprated';

export default function App() {
  return (
    <div className="bg-black ">
    <Navbar />
     <Search />
      <h1>Movie App </h1>

      <Trending />
      <h1>Toprated</h1>
      <Toprated />
    </div>
  );
}
