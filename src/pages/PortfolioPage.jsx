import Navbar from "../components/Navbar/Navbar";

import Portfolio from "../components/Portolio/Portfolio";

const PortfolioPage = () => {
  return (
    <main className="main">
      <Navbar />
      <Portfolio length={6} />
      {/* <Footer /> */}
    </main>
  );
};

export default PortfolioPage;
