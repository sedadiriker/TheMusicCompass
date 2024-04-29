import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import About from "../pages/About";
import ArtistDetail from "../pages/ArtistDetail";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";

const AppRouter = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path=":id" element={<ArtistDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRouter;
