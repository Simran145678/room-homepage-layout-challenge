import React from "react";
import heroDesktopImg1 from "./assets/images/desktop-image-hero-1.jpg";
import heroDesktopImg2 from "./assets/images/desktop-image-hero-2.jpg";
import heroDesktopImg3 from "./assets/images/desktop-image-hero-3.jpg";
import heroMobileImg1 from "./assets/images/mobile-image-hero-1.jpg";
import heroMobileImg2 from "./assets/images/mobile-image-hero-2.jpg";
import heroMobileImg3 from "./assets/images/mobile-image-hero-3.jpg";
import imgAboutDark from "./assets/images/image-about-dark.jpg";
import imgAboutLight from "./assets/images/image-about-light.jpg";

export default function HomePage() {
  const [isLargeScreen, setIsLargeScreen] = React.useState(
    window.innerWidth >= 768
  );

  React.useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const slider = [
    {
      id: 1,
      imageDesktop: heroDesktopImg1,
      imageMobile: heroMobileImg1,
      heading: "Discover innovative ways to decorate",
      description:
        "We provide unmatched quality, comfort and style from property owners accross the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    },
    {
      id: 2,
      imageDesktop: heroDesktopImg2,
      imageMobile: heroMobileImg2,
      heading: "We are available all accross the globe",
      description:
        "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today. ",
    },
    {
      id: 3,
      imageDesktop: heroDesktopImg3,
      imageMobile: heroMobileImg3,
      heading: "Manufactured with the best materials",
      description:
        "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    },
  ];

  const handleRightClick = () => {
    setCurrentSlide((prev) => (prev === slider.length - 1 ? 0 : prev + 1));
  };
  const handleLeftClick = () => {
    setCurrentSlide((prev) => (prev === 0 ? slider.length - 1 : prev - 1));
  };
  return (
    <>
      <div className="w-full container font-sans flex flex-col">
        <div className="flex flex-col md:flex-row ">
          <div className="w-full md:w-1/2 xl:w-3/5">
            <img
              className="w-full object-cover md:h-[480px]"
              src={
                isLargeScreen
                  ? slider[currentSlide].imageDesktop
                  : slider[currentSlide].imageMobile
              }
              alt=""
            />
          </div>

          <div className="relative w-full md:w-1/2 xl:w-2/5 flex flex-col justify-center items-center px-10 py-10 md:px-16">
            <h2 className="text-3xl md:text-4xl font-bold my-4">
              {slider[currentSlide].heading}
            </h2>
            <p className="text-xs text-darkGray leading-normal">
              {slider[currentSlide].description}
            </p>
            <button className="group my-4 w-full text-left tracking-widest text-sm flex items-center hover:text-darkGray">
              SHOP NOW
              <svg
                className="ml-6 group-hover:fill-darkGray"
                width="40"
                height="12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
                  fillule="nonzero"
                />
              </svg>
            </button>
            <div
              className={`${
                isLargeScreen ? "" : " -top-[56px]"
              } absolute  md:bottom-0 flex right-0 md:left-0`}
            >
              <button
                onClick={handleLeftClick}
                className="bg-black py-4 px-5 xl:px-6 cursor-pointer hover:bg-veryDarkGray"
              >
                <svg
                  className="  "
                  width="14"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 0L1 12l12 12"
                    stroke="#FFF"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
              </button>
              <button
                onClick={handleRightClick}
                className="bg-black py-4 px-5 xl:px-6 cursor-pointer hover:bg-veryDarkGray"
              >
                <svg
                  className=""
                  width="14"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 0l12 12L1 24"
                    stroke="#FFF"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/****************************  Row 2 starts ***************************/}
        <div className="flex flex-col md:flex-row w-full justify-between h-[235px]">
          <img
            className="w-full md:w-1/3 object-cover"
            src={imgAboutDark}
            alt=""
          />
          <div className="w-full md:w-1/3 lg:w-3/5 xl:w-1/3 flex flex-col justify-center px-10 md:px-6 xl:px-10 py-10 md:py-0  ">
            <h3 className=" text-sm tracking-widest font-bold my-3">
              ABOUT OUR FURNITURE
            </h3>
            <p className="text-xs text-darkGray">
              Our multifunctional collection blends design and function to suit
              your individual taste. Make each room unique, or pick a cohesive
              theme that best express your interests and what inspires you. Find
              the furniture pieces you need, from traditional to contemporary
              styles or anything in between. Product specialists are available
              to help you create your dream space.
            </p>
          </div>
          <img
            className="w-full md:w-1/3 lg:w-2/5 xl:w-1/3 object-cover"
            src={imgAboutLight}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
