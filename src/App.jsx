import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom"; // Cambia BrowserRouter por HashRouter
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div
          className="container-fluid flex-grow-1"
          style={{ margin: 0, padding: 0 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
