import * as React from 'react';
import './App.css';
import Navbar from './NavBar/navbar';
import Trending from './components/Search';
import Search from './components/Trending';

export default function App() {
  return (
    <div className="bg-black ">
    <Navbar />
      <h1>Movie App </h1>
      <Search />
      <Trending />
    </div>
  );
}
