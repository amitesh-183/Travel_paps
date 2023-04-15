import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import FaqScreen from "./screens/FaqScreen";
import FooterComp from "./components/FooterComp";
import CareerScreen from "./screens/CareerScreen";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/faq" element={<FaqScreen />} />
          <Route path="/careers" element={<CareerScreen />} />
        </Routes>
      </Router>
      <FooterComp />
    </div>
  );
}

export default App;
