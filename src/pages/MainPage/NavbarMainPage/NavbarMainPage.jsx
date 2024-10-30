import { useEffect, useState } from "react";
import styles from "../NavbarMainPage/NavbarMainPage.module.css";
import logo from "../../../assets/logo/logo-1-removebg.png";

const NavbarMainPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const navbar = document.querySelector(`.${styles.navbar}`);
      if (window.scrollY > lastScrollY) {
        navbar.classList.add(styles.hidden); 
      } else {
        navbar.classList.remove(styles.hidden); 
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav className={`text-white ${styles.navbar}`}>
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          {/* Logo and Company Name */}
          <div className="flex items-center flex-col">
            <div className="flex items-center justify-center rounded">
              <img src={logo} alt="Company Logo" className="h-8 w-16" />
            </div>
            <span className="text-xs font-bold text-yellow-500 mt-1">
              Golden Development
            </span>
          </div>

          {/* Hamburger Menu */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-yellow-500 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Navbar Links */}
          <div
            className={`${
              isOpen ? "flex" : "hidden"
            } flex-col lg:flex lg:flex-row lg:items-center lg:space-x-4 items-start lg:bg-transparent absolute top-16 right-4 w-48 p-4 rounded-lg lg:relative lg:top-auto lg:right-auto lg:w-auto space-y-2 lg:space-y-0`}
          >
            <ul className="flex flex-col lg:flex-row items-start lg:items-center space-y-2 lg:space-y-0 lg:space-x-4">
              <li>
                <a href="#" className="text-lg text-yellow-500">
                  HOME
                </a>
              </li>
              <li className="text-yellow-500 hidden lg:inline">/</li>      
              <li>
                <a href="#" className="text-lg hover:text-yellow-500">
                  ABOUT
                </a>
              </li>
              <li className="text-yellow-500 hidden lg:inline">/</li>
              <li>
                <a href="#" className="text-lg hover:text-yellow-500">
                  OUR PROJECTS
                </a>
              </li>
              <li className="text-yellow-500 hidden lg:inline">/</li>
              <li>
                <a href="#" className="text-lg hover:text-yellow-500">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavbarMainPage;
