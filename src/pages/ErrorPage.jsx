import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <main className="main">
      <div className="container">
        <section className="error">
          <span>Error</span>
          <h1>
            404 <span>Page Not Found</span>
          </h1>

          <p className="text-center">
            The page you are looking for could not be found. It may have been moved, renamed, or deleted. Our team is constantly working on improving
            the website, and sometimes changes can result in outdated or broken links
          </p>
          <Link to={"/"} className="btn btn__view__all">
            Back To Home
          </Link>
        </section>
      </div>
    </main>
  );
};

export default ErrorPage;
