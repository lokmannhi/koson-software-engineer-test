import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AboutUs from "./components/AboutUs";
import Service from "./components/Service";
import Team from "./components/Team";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Service />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
