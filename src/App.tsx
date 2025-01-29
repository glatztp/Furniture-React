import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home"
import {About} from "./pages/About/About"
import { Shop } from "./pages/Shop/Shop"
import {Contact} from "./pages/Contact/Contact"
import { Navbar } from "./components/Navbar/Navbar";

export function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}