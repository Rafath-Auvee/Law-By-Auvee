import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import Signup from "./components/Signup/Signup";
import Blog from "./components/Blog/Blog";
import About from "./components/About/About";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";
import "bootstrap/dist/css/bootstrap.min.css";
import RequireAuth from "./components/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
