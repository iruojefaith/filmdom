import * as React from 'react';
import './App.css';
import Trending from './components/Search';
import Search from './components/Trending';

export default function App() {
  return (
    <div className="bg-black ">
      <h1>Movie App </h1>
      <Search />
      <Trending />
    </div>
  );
}
