import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import BlogPage from "./pages/BlogPage";
import AlbumPage from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import BlogDetail from "./pages/BlogDetailPage";
import AboutPage from "./pages/AboutPage";
import Privacy from "./pages/Privacy";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Porjects" element={<PortfolioPage />} />
        {/* <Route path="/Porjects/:id" element={<PortfolioPage />} /> */}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/contact" element={<AlbumPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
