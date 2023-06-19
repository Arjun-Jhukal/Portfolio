import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./_Pagination.scss";
const Pagination = () => {
  return (
    <ul className="pagination">
      <li>
        <FaArrowLeft />
      </li>
      <li className="active">1</li>
      <li>2</li>
      <li>3</li>
      <li>
        <FaArrowRight />
      </li>
    </ul>
  );
};

export default Pagination;
