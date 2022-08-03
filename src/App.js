import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import CharacterList from "./components/CharacterList/CharacterList";
import ComicsList from "./components/ComicsList/ComicsList";
import SeriesList from "./components/SeriesList/SeriesList";
import EventsList from "./components/EventsList/EventsList";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/heroes" element={<CharacterList />} />
          <Route path="/comics" element={<ComicsList />} />
          <Route path="/series" element={<SeriesList />} />
          <Route path="/eventos" element={<EventsList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
