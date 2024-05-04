import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import About from "../pages/About";
import ArtistDetail from "../pages/ArtistDetail";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import SearchResults from "../pages/SearchResults";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="Home" element={<Home />} />
        <Route path="" element={<PrivateRouter/>}>
          <Route path="about" element={<About />} />
          <Route path=":name" element={<ArtistDetail />} />
          <Route path="search" element={<Search />} />
          <Route path="searchresults" element={<SearchResults />} />
        </Route>

        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
