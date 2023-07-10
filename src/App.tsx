import React from "react";
import { Route, Routes } from "react-router-dom";
import Consent from "./pages/Consent";
import Register from "./pages/Register";
import Thankyou from "./pages/Thankyou";
import AgeVerify from "./pages/AgeVerify";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AgeVerify />} />
      <Route path="/consent" element={<Consent />} />
      <Route path="/register" element={<Register />} />
      <Route path="/thankyou" element={<Thankyou />} />
    </Routes>
  );
}

export default App;
