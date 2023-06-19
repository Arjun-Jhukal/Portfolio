import { useState } from "react";
import "./_Footer.scss";
import { BsFacebook, BsLinkedin, BsGithub, BsFillEnvelopePaperFill } from "react-icons/bs";
const Footer = () => {
  const [currentyear, setCurrentYear] = useState(new Date().getFullYear());

  return (
    <footer className="footer">
      <div className="container text-center">
        <ul className="footer__socials">
          <li>
            <a href="#">
              <BsFacebook size={20} />
            </a>
          </li>
          <li>
            <a href="#">
              <BsLinkedin size={20} />
            </a>
          </li>
          <li>
            <a href="#">
              <BsGithub size={20} />
            </a>
          </li>
          <li>
            <a href="#">
              <BsFillEnvelopePaperFill size={20} />
            </a>
          </li>
        </ul>
        <div className="footer__copyright">
          <p>
            Copyright &copy; {currentyear} <span>Arjun Jhukal</span>. All Right Reserved
          </p>
          <ul className="footer__menu">
            <li>
              <a href="#">Blogs</a>
            </li>
            <li>
              <a href="#">Privacy & Policy</a>
            </li>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
