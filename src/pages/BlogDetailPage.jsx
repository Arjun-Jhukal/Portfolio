import BlogDetail from "../components/BlogDetail/BlogDetail";
import Navbar from "../components/Navbar/Navbar";
import { Auxilary } from "../hoc/Auxilary";
const BlogDetailPage = () => {
  return (
    <Auxilary>
      <Navbar />
      <section className="section_gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-12">
              <BlogDetail />
            </div>
          </div>
        </div>
      </section>
    </Auxilary>
  );
};

export default BlogDetailPage;
