import * as React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Search from "./components/Search";
import AddList from "./components/Addlist";
import Navbar from "./NavBar/navbar";
import Singlemovie from "./components/singlemovie";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/addlist' element={<AddList />} />
        <Route path='/singlemovie' element={<Singlemovie />} />
      </Routes>
    </BrowserRouter>
  );
}
