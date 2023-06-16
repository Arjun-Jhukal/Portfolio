import { useState } from "react";
import "./_Footer.scss";
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
const Footer = () => {
  const [currentyear, setCurrentYear] = useState(new Date().getFullYear());

  return (
    <footer className="footer section_gap">
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
        </ul>
        <div className="footer__copyright">
          <p>
            Copyright &copy; {currentyear} <span>Arjun Jhukal</span>. All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
