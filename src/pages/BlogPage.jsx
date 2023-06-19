import Blog from "../components/Blog/Blog";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import PageBanner from "../commonComponent/PageBanner";

const BlogPage = () => {
  return (
    <main className="main">
      <Navbar />
      <PageBanner pageTitle={"Blog"} />
      <Blog />
      <Footer />
    </main>
  );
};

export default BlogPage;
