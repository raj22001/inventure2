import React from 'react';
import { TbArrowNarrowUp, TbArrowNarrowDown } from "react-icons/tb";

const FAQToggle = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question cursor-pointer">
        {faq.question}
        <span className="faq-icon cursor-pointer">
          {faq.open ? <TbArrowNarrowUp /> : <TbArrowNarrowDown />}
        </span>
      </div>
      <div className="faq-answer">{faq.answer}</div>
    </div>
  );
};

export default FAQToggle;
