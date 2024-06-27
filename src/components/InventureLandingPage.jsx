import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InventureLogo from "../assets/inventurelogo.png";
import { NavbarData, NavbarDatahover, NavbarDatahoverData2, SliderData } from "../data/data";
import CustomCarousel from "./CustomCarousel";
import DematAccountForm from "./DematAccountForm";
import Inverstment from "./Inverstment";
import DematAccount from "./DematAccount";
import Testimonial from "./Testimonial";
import Faq from "./Faq";
import Footer from "./Footer";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const InventureLandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Only one open dropdown


  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (id) => {
    if (openDropdown === id) {
      setOpenDropdown(null); // Close if the same dropdown is clicked
    } else {
      setOpenDropdown(id); // Open the clicked dropdown and close others
    }
  };

    const [activeNav, setActiveNav] = useState(null); // State to track active navigation item

   const handleMouseEnter = (navId) => {
    setActiveNav(navId);
  };

  const handleMouseLeave = () => {
    setActiveNav(null);
  };

  return (
    <div className="w-full h-auto">
      {/* Navbar */}
      <nav className="w-full fixed z-20 backdrop-filter backdrop-blur-lg bg-opacity-30 firefox:bg-opacity-90">
        <div className="w-[94%] h-20 mx-auto flex items-center justify-between">
          <div className="md:w-[15%] mobile:w-[45%] sm:w-[40%]  mr-[2%]">
            <img src={InventureLogo} alt="Inventure Logo" />
          </div>
          <div className="sm:hidden mobile:hidden md:flex w-[60%] justify-between px-[1%]">
            {NavbarDatahoverData2.map((navdata) => (
              <div
                key={navdata.id}
                className=""
                onMouseEnter={() => handleMouseEnter(navdata.id)}
                
              >
                <Link to={navdata.Link}>
                  <div>
                    <h1>{navdata.Navtitle}</h1>
                  </div>
                </Link>

                {/* Conditional rendering for NavTitleData */}
                {activeNav === navdata.id && navdata.NavTitleData.length > 0 && (
                <div onMouseLeave={handleMouseLeave} className="absolute top-20 left-1/2 transform -translate-x-1/2 w-full  bg-white shadow-lg border-t-[1px] border-lightGray p-4 z-10 animate-slide-up">
                  <div className="w-[60%] mx-auto grid grid-cols-3 gap-4">
                    {navdata.NavTitleData.map((item, index) => (
                      <div key={index} className="py-2">
                        <Link to={item.titleLink}>
                          <p className=" text-xl  cursor-default text-purple hover:text-purple hover:nav-item ">
                            {item.title}
                          </p>
                        </Link>
                        {
                          item?.otherData?.map((data , index) => (
                            <div>
                            <Link to={data.titleLink}>
                            <p  className="mt-3 cursor-pointer hover:underline hover:text-purple text-base text-[#30303C]" key={index}>
                              {data.title}
                            </p>
                            </Link>
                            </div>
                          ))
                        }
                      </div>
                    ))}
                  </div>
                </div>
              )}
              </div>
            ))}

            
          </div>
          <div className="sm:hidden mobile:hidden md:flex">
            <button onClick={() => window.location.href = "https://signup.inventuregrowth.com/default.aspx"} className="px-5 py-3 border-2 border-purple rounded-full hover:bg-purple hover:text-white transition duration-700 ease-in-out">
              Open an Account
            </button>
          </div>
          <div className="md:hidden">
            <button className="mt-3" onClick={toggleMenu}>
              {/* Hamburger Icon */}
              <GiHamburgerMenu size={30} />
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar Menu */}
      <>
        <button onClick={toggleMenu} className="menu-button">
          {/* Menu Icon */}
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
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        <div
          className={`fixed top-0 left-0 w-[60%] bg-white h-full shadow-lg transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-30`}
        >
          <div className="flex h-[50px] px-[5%] justify-between items-center bg-purple" >
          <p className="text-white text-2xl">Inventure</p>
          <button className=" top-4 right-4" onClick={toggleMenu}>
            {/* Close Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              color="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          </div>
          <div className="p-4 ">
            {NavbarData.map((navdata) => (
              <div key={navdata.id}>
                <div className="py-2 flex justify-between items-center">
                  <Link to={navdata.Link} onClick={toggleMenu}>
                    <h1 className="font-semibold">{navdata.Navtitle}</h1>
                  </Link>
                  {navdata.NavTitleData && navdata.NavTitleData.length > 0 && (
                    <button
                      onClick={() => toggleDropdown(navdata.id)}
                      className="ml-2 focus:outline-none"
                    >
                      {openDropdown === navdata.id ? (
                        <FaAngleUp />
                      ) : (
                        <FaAngleDown />
                      )}
                    </button>
                  )}
                </div>
                {openDropdown === navdata.id && (
                  <div className="pl-4">
                    {navdata.NavTitleData.map((subItem, index) => (
                      <Link
                        key={index}
                        to={subItem.titleLink}
                        onClick={toggleMenu}
                        className="block py-1"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
           <div className="md:hidden w-[90%] mx-auto">
            <button onClick={() => window.location.href = "https://signup.inventuregrowth.com/default.aspx"}  className="px-5 py-3 border-2 border-purple rounded-full hover:bg-purple hover:text-white transition duration-700 ease-in-out">
              Open an Account
            </button>
          </div>
        </div>
        
      </>

      {/* Slider */}
      <div className="">
        <CustomCarousel>
          {SliderData.map((image, index) => (
            <img key={index} src={image.image} alt={image.alt} />
          ))}
        </CustomCarousel>
      </div>

      {/* DematAccountDiv */}
      <div className="mt-16">
        <DematAccountForm />
      </div>

      {/* Investment */}
      <div className="mobile:mt-0 sm:mt-0 md:mt-16">
        <Inverstment />
      </div>

      {/* Demat Account  */}
      <div className="">
        <DematAccount />
      </div>

      {/* Testimonial section */}
      <div>
        <Testimonial />
      </div>

      {/* FAQ section */}
      <div>
        <Faq />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default InventureLandingPage;
