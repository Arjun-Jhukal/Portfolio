import { useEffect, useState } from "react";
import "./_Navbar.scss";
import HeaderLogo from "../../assets/img/company/png/logo-no-background.png";
import { NavbarItems } from "../../data";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
// import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [showMenu, setShowMenu] = useState({
    show: false,
    showCloseBtn: false,
  });

  const toggleActive = (value) => {
    setActive(value);
    setShowMenu({
      show: false,
      showCloseBtn: false,
    });
  };

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

      setIsFixed(scrollTop > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const toggleMobileMenu = () => {
    setShowMenu({
      show: true,
      showCloseBtn: true,
      showBurgerBtn: false,
    });
  };

  return (
    <header className={isFixed ? "header fixed" : "header"}>
      <div className="container-fluid">
        <div className="header__wrapper">
          <div className="header__logo">
            <img src={HeaderLogo} alt="Arjun Jhukal Logo" />
            <div className="header__logo__text d-none d-lg-block">
              <span>Arjun</span>
              <span>Jhukal</span>
            </div>
          </div>
          <nav className="nav">
            <ul className={showMenu.show ? "nav__items active" : "nav__items"}>
              {NavbarItems.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      onClick={() => {
                        toggleActive(item);
                      }}
                      to={`/${item}`}
                      className={active === item ? "active nav__link" : "nav__link"}
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="d-md-none">
              <FaBars size={32} className="text-light" style={{ cursor: "pointer" }} onClick={toggleMobileMenu} />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
