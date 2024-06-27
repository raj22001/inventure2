import React, { useState } from 'react'
import { FAQData } from '../data/data'
import FAQToggle from './FAQToggle';
import { TbArrowNarrowUp  , TbArrowNarrowDown } from "react-icons/tb";

const Faq = () => {

   const [faqs, setFaqs] = useState(FAQData)

   const toggleFAQ = index => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className='mt-4 w-full mb-8'>
      <div className='md:w-[55%] sm:w-[100%] mobile:w-[100%] md:mx-auto'>
         <h3 className="p-1.5 w-[84%] mx-auto md:text-center  font-bold text-base uppercase">
              <span className='bg-[#F2EBFF] py-1.5 px-4 text-purple'>
               FAQ
              </span>
            </h3>
         <h1 className='mobile:w-[84%] sm:w-[84%] md:w-full  mx-auto md:text-5xl sm:text-3xl mobile:text-3xl md:text-center mt-3 font-bold'>Got a question? Get your answers </h1>

          <div className="faqs">
        {faqs.map((faq, index) => (
          <FAQToggle faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
      </div>
    </div>
  )
}

export default Faq