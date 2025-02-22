import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import VenuePage from "./pages/VenuePage";
import LocationsPage from "./pages/LocationsPage";
import FAQPage from "./pages/FAQPage";
import TrailerPage from "./pages/TrailerPage";

function App() {
  return (
    <Router>
      {" "}
      {/* Set the base URL for React Router */}
      <Sidebar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/venue" element={<VenuePage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/trailer" element={<TrailerPage />} />
        </Routes>
      </Sidebar>
    </Router>
  );
}

export default App;
