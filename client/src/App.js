import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import Shopepage from "./components/pages/Shopepage";
import CreateEventpage from "./components/pages/CreateEventpage";
import Signuppage from "./components/pages/Signuppage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shopepage />} />
          <Route path="/create-event" element={<CreateEventpage />} />
          <Route path="/signup" element={<Signuppage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
