import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Nav from "./components/Nav";
import About from "./pages/About";
import Footer from "./components/shared/Footer";
import BlogDetails from "./pages/BlogDetails";
import Blog from "./pages/Blog";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div className=" font-roboto">
      <div className=" ">
        <Nav />
      </div>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
