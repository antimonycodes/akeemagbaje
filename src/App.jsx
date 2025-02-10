import "./App.css";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Nav from "./components/Nav";
import About from "./pages/About";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <div className=" font-roboto">
      <div className=" ">
        <Nav />
      </div>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
