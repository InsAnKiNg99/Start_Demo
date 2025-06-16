import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/pages/Homepage.jsx";
import CreateEventpage from "./components/pages/CreateEventpage.jsx";
import Signuppage from "./components/pages/Signuppage.jsx";
import Shoppage from "./components/pages/Shoppage.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div><h1>Hello </h1></div> } />
          <Route path="/s" element={<Homepage />} />
          <Route path="/shop" element={<Shoppage />} />
          <Route path="/create-event" element={<CreateEventpage />} />
          <Route path="/signup" element={<Signuppage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
