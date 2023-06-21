import Navbar from "../components/Navbar/Navbar";
import PageBanner from "../commonComponent/PageBanner";
import Portfolio from "../components/Portolio/Portfolio";
import Footer from "../components/Footer/Footer";
const PortfolioPage = () => {
  return (
    <main className="main">
      <Navbar />
      <PageBanner pageTitle={"Portfolio"} />
      <Portfolio length={6} />
      <Footer />
    </main>
  );
};

export default PortfolioPage;
