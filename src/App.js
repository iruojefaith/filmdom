import * as React from 'react';
import './App.css';
import Navbar from './NavBar/navbar';
import Tab from './components/tab';
import Search  from './components/Search';



export default function App() {
  return (
    <div className="bg-black ">
    <Navbar />
     <Search />
      <Tab />
    </div>
  );
}
