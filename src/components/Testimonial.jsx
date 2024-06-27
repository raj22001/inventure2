import { useState } from "react";
import { TestimonialData } from "../data/data"
import { PiCaretLeftBold , PiCaretRightBold } from "react-icons/pi";

const Testimonial = () => {


   const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? TestimonialData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === TestimonialData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="mobile:mt-4 sm:mt-4 md:mt-28 w-auto mobile:h-auto mobile:mb-8 md:mb-2  sm:mb-5  md:h-[350px] relative overflow-x-hidden">
      <div className="w-full md:flex md:flex-row mobile:flex-col sm:flex-col">
          <div className="md:w-[35%] md:mt-[2.5%] mobile:w-[84%] h-full flex flex-col justify-center items-center">
             <div className="md:w-[25%] mobile:w-[84%] mobile:mx-auto ">
            <h1 className=" w-full font-bold text-base uppercase">
              <span className=" p-2 bg-[#F2EBFF]  text-purple">
                Testimonial
                </span> 
            </h1>
          </div>

          <div className="mt-5 md:w-full mobile:mb-3 sm:mb-3 md:mb-0 mobile:w-[84%]">
            <div className="md:w-[50%] mobile:w-[100%] md:mx-auto">
            <h1 className="md:text-5xl mobile:text-3xl  sm:text-3xl  text-start font-medium">
              Voices of Satisfaction:
            </h1>
            </div>
          </div>

          <div className="sm:hidden mobile:hidden md:block w-[80%]  mt-4">
            <div className=" w-[90%] flex justify-end">

             <p  className="inline cursor-pointer "  onClick={handlePrev}>
              <PiCaretLeftBold size={25} className="hover:text-purple "/>
            </p>
            <p className="inline cursor-pointer" onClick={handleNext}>
              <PiCaretRightBold size={25} className="hover:text-purple"/>
            </p>
          </div>
            </div>
          </div>

          {/* Testimonial slider  */}
          <div className="md:ml-[10%] mobile:ml-0 sm:ml-0 mobile:mx-auto flex gap-x-10 items-center relative">
  

          <div className="md:h-[220px] md:w-[600px] mobile:w-[84%] mobile:h-[350px] mobile:mx-auto sm:mx-auto sm:w-[84%] sm:h-[350px] flex flex-col justify-center items-center bg-white shadow-lg">
            <div className="w-[85%] h-[80%]">
              <div>
                <h1 className="text-purple text-2xl">
                  {TestimonialData[currentIndex].name}  
                </h1>
                <p className="text-base mt-1 text-[#808080]">
                  {/* {TestimonialData[currentIndex].position} */}
                </p>
              </div>
              <div className="mt-4">
                <p className="text-base text-[#30303C]">
                  {TestimonialData[currentIndex].description}
                </p>
              </div>
            </div>
          </div>

         
        </div>
         <div className=" md:hidden w-[90%] mx-auto flex justify-end mt-5">
             <p onClick={handlePrev}>
              <PiCaretLeftBold size={25} className="hover:text-purple"/>
            </p>
            <p onClick={handleNext}>
              <PiCaretRightBold size={25} className="hover:text-purple"/>
            </p>
          </div>
      </div>
    </div>
  )
}

export default Testimonial