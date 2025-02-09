import "./App.css";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Nav from "./components/Nav";
import About from "./pages/About";

function App() {
  return (
    <div className=" font-roboto">
      <Nav />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
