import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Housing from "./pages/Housing/Housing.jsx";
import Error from "./pages/Error/Error.jsx";
import { housingList } from "./Datas/Housing.js";

const theme = {
  theme: {
    primary: "#FF6060",
    primary60: "rgb(255 96 96 / 60%)",
    second: "#F6F6F6",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          {housingList.map((housing) => (
            <Route
              key={housing.id}
              path={`/Logements/${housing.id}`}
              element={<Housing id={housing.id} />}
            />
          ))}
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
