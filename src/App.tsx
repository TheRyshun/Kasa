import "../sass/style.scss";
import About from "./pages/About";
import Home from "./pages/Home";
import Apartment from "./pages/Apartment";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/";
import Error from "./pages/Error";

const  App =() => {
  return (
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Apartment" element={<Apartment />} />
          <Route path="/apartment/:id" element={<Apartment />} />
          <Route path="/404" element={<Error />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
      </Router>
  );
}

export default App;
