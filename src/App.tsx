import React from "react";
import MainPage from "./components/pages/MainPage";
import CharactersPage from "./components/pages/CharactersPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/characters' element={<CharactersPage />} />
          <Route path='*' element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
