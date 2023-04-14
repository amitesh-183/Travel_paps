import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import FaqScreen from "./screens/FaqScreen";
import FooterComp from "./components/FooterComp";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/faq" element={<FaqScreen />} />
        </Routes>
      </Router>
      <FooterComp />
    </div>
  );
}

export default App;
