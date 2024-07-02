import React, { useRef } from 'react'
import { LuMoveLeft , LuMoveRight } from "react-icons/lu";
import { InventureData } from '../data/data';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Inverstment = () => {

   const sliderRef = useRef(null);
   

  const settings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024, // Up to medium size screen
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768, // Up to mobile size screen
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };


  return (
    <div className='w-full bg-gray h-[700px]'>
      <div className='w-[86%] h-[86%] m-auto flex  flex-col justify-center pt-[7%]'>
        <div className=' mobile:w-auto sm:w-auto '>
          <h1 className='  text-start h-50px font-bold  text-base overflow-y-clip '>
            <span className='p-1.5 py-2 bg-[#F2EBFF] overflow-y-hidden text-purple'>
              Investment Options
              </span></h1>
        </div>
        <div className='mt-5 '>
            <div className='md:flex md:flex-row md:h-auto mobile:flex-col sm:flex-col w-full md:justify-between items-center'>
             <h1 className='lg:h-[50px] md:h-[80px]  check font-medium overflow-y-clip mobile:text-3xl sm:text-3xl md:text-getSize leading-gapline'>
  Get Everything Under One Roof 
</h1>
              <div className='mt-2 flex pr-[2%]'>
                <p  onClick={handlePrev} className='p-3 bg-white mr-4 cursor-pointer rounded-md'>
                  <LuMoveLeft  />
                </p>
                <p onClick={handleNext} className='p-3 bg-white cursor-pointer  rounded-md '>
                  <LuMoveRight  />
                </p>
              </div>
            </div>
        </div>

        <div className='w-[100%] m-auto overflow-y-clip'>
          <Slider  ref={sliderRef} {...settings}>
          {
            InventureData.map((inventure) => (
              <div className='w-[380px] h-[330px] rounded-lg' key={inventure.id}>
                <div className='w-[90%] h-[90%] flex justify-center flex-col items-center mx-auto'>
                  <div className='h-[150px] w-[150px]'>
                      <img src={inventure.image} alt="" />
                  </div>

                  <div className='mt-4 text-2xl font-bold'>
                    <h1>{inventure.title}</h1>
                  </div>

                  <div className='mt-4 text-base text-[#474752]'>
                    <p>
                      {inventure.description}
                    </p>
                  </div>
                </div>
              </div>
            ))
          }
          </Slider>
           <style jsx>{`
            .slick-prev,
            .slick-next {
              display: none !important; // Hide default arrows
            }
          `}</style>
        </div>
      </div>
    </div>
  )
}

export default Inverstment