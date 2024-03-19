import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Housing from "./pages/Housing/Housing.jsx";
import Error from "./pages/Error/Error.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/Logements/id" element={<Housing />} />
        <Route path="*" element={<Error />} />
        {/* verifier si id logement n'existe pas que l'on retourne bien sur Error  */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
