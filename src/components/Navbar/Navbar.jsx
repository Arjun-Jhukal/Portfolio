import { useEffect, useState } from "react";
import "./_Navbar.scss";
import HeaderLogo from "../../assets/img/company/png/logo-no-background.png";
import { NavbarItems } from "../../data";
const Navbar = () => {
  const [active, setActive] = useState("Home");

  const toggleActive = (value) => {
    setActive(value);
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
            <ul className="nav__items">
              {NavbarItems.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      href="#"
                      onClick={() => {
                        toggleActive(item);
                      }}
                      className={active === item ? "active nav__link" : "nav__link"}
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
