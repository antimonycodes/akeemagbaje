import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Nav from "./components/Nav";
import About from "./pages/About";
import Footer from "./components/shared/Footer";
import BlogDetails from "./pages/BlogDetails";
import Blog from "./pages/Blog";
import { useEffect, useState } from "react";
import Preloader from "./components/shared/Preloader";

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  // Handle smooth scrolling to hash links
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  // Add a backup timer to ensure preloader doesn't get stuck
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Force hide after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="font-roboto">
      {isLoading ? (
        <Preloader onComplete={handlePreloaderComplete} />
      ) : (
        <>
          <div>
            <Nav />
          </div>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
