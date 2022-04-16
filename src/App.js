import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} />
        <Route path="login" element={<About />} />
        <Route path="signup" element={<About />} />
        <Route path="blog" element={<About />} />
        <Route path="checkout" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
