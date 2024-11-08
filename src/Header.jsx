import React from "react";
import hamburger from "./assets/images/icon-hamburger.svg";
import cross from "./assets/images/icon-close.svg";
export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"></div>
      )}
      <header
        className={`${
          isOpen ? "bg-white" : ""
        } fixed container text-white z-50 p-10 md:bg-transparent`}
      >
        <div className="relative flex items-center justify-center md:justify-start">
          <button className="absolute left-0 md:hidden">
            <img
              onClick={handleClick}
              src={hamburger}
              alt="menu button, Click this button to read navigation"
            />
          </button>
          <p
            className={`${
              isOpen ? "hidden" : ""
            } text-4xl ml-4 xl:ml-8 md:hidden`}
          >
            room
          </p>
          <nav className={`${isOpen ? "" : "hidden"} md:block `}>
            <ul className="flex items-center">
              <li className=" text-4xl ml-4 xl:ml-8 hidden md:block">room</li>
              <li className="md:hidden" onClick={handleClick}>
                <img
                  src={cross}
                  alt="close button, click here to close navigation"
                />
              </li>

              <li className=" ml-4 xl:ml-8 cursor-pointer text-black md:text-white nav-item">
                home
              </li>
              <li className="ml-4 xl:ml-8 cursor-pointer text-black md:text-white nav-item">
                shop
              </li>
              <li className="ml-4 xl:ml-8 cursor-pointer text-black md:text-white nav-item">
                about
              </li>
              <li className="ml-4 xl:ml-8 cursor-pointer text-black md:text-white nav-item">
                contact
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
