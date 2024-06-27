import React, { useState } from "react";
import {
  FooterData,
  FooterSocialMediaData,
  footerAdvisoryInvestors,
  footerInvestors,
} from "../data/data";
import InventureLogo from "../assets/inventurelogo.png";
import { LuDot } from "react-icons/lu";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (id) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="mt-10 w-full h-auto bg-[#F5F2F0]">
      {/* Icons sections */}

      <div className="md:hidden w-[94%] mt-4 mx-auto">
        <div className=" md:hidden pt-3 h-full w-[50%] flex justify-center">
          <img src={InventureLogo} alt="" />
        </div>
      </div>

      {/* Desktop Footer  */}
      <div className="mobile:hidden sm:hidden md:block w-[94%]">
        <div className=" w-[100%] h-[100px] flex  justify-end ">
          {FooterSocialMediaData.map((socialMedia) => (
            <div key={socialMedia.id} className="flex px-3">
              <p className="flex justify-center items-center text-lg">
                <span className="px-1.5">
                  {React.createElement(socialMedia.icon)}
                </span>
                {socialMedia.socialMediaTitle}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="md:hidden w-[94%] h-[80px] mx-auto flex  justify-start ">
        {FooterSocialMediaData.map((socialMedia) => (
          <div key={socialMedia.id} className="flex ">
            <p className="flex justify-center items-center text-xl">
              <span className="px-1.5">
                {React.createElement(socialMedia.icon)}
              </span>
            </p>
          </div>
        ))}
      </div>

      <div className=" w-full">
        <div className="w-[94%] h-auto mx-auto flex">
          <div className="w-[20%] flex justify-center h-full sm:hidden mobile:hidden md:block">
            <div className="  w-full ">
              <img src={InventureLogo} alt="" />
            </div>
          </div>

          <div className="sm:hidden mobile:hidden md:block ml-[4%] flex w-[70%] ">
            <div className="w-full flex justify-between">
              {FooterData.map((footerHeadersData) => (
                <div className="" key={footerHeadersData.id}>
                  <h1 className="mb-4 font-bold text-lg text-[#30303C]">
                    {footerHeadersData.title}
                  </h1>
                  <div>
                    {footerHeadersData.subtitle.map((subtitle, index) => (
                      <div key={index} className="py-1.5">
                        <Link to={subtitle.link}>
                        <p className="text-base text-[#30303C] cursor-pointer hover:text-purple">
                          {subtitle.heading}
                        </p>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

            {/* Mobile View Footer  */}
          <div className="md:hidden ml-[4%] flex w-[90%] flex-col md:flex-row">
            <div className="w-full flex flex-col md:flex-row justify-between">
              {FooterData.map((footerHeadersData) => (
                <div className="mb-4 md:mb-0" key={footerHeadersData.id}>
                  <h1
                    className="mb-4 font-bold text-lg text-[#30303C] flex items-center justify-between cursor-pointer"
                    onClick={() => toggleSection(footerHeadersData.id)}
                  >
                    {footerHeadersData.title} 
                    <span>
                     { openSections[footerHeadersData.id] ? < FaAngleUp/> : <FaAngleDown/> }
                    </span>
                  </h1>
                  {openSections[footerHeadersData.id] && (
                    <div>
                      {footerHeadersData.subtitle.map((subtitle, index) => (
                        <div key={index} className="py-1.5">
                           <Link to={subtitle.link}>
                          <p className="text-base text-[#30303C]">
                            {subtitle.heading}
                          </p>
                           </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-[94%] mx-auto mt-4">
        <div className="w-full mx-auto">
          <p className="text-xs">
            NSE- 09017 | BSE-0275 | Investor Awareness | SEBI | Investor
            Complaints BSE | SEBI Complaints Redress System (SCORES) | Account
            Closure | Investor Charter SEBI Registration No: INZ000221934
            (BSE-0275| NSE- 09017| MSEI- 1032| MCX- 10845| NCDEX- 00485)
            Research Analyst: INH000006129. CDSL Registration No:
            IN-DPCDSL-12-99 AMFI ARN NO:- ARN-33446. CIN No:
            L65990MH1995PLC089838, ISIN No:- INE878H01024, GSTIN NO:-
            27AAACI2044K1ZP.
          </p>
        </div>

        <div className="mt-6">
          <h1 className="text-sm mb-1">ATTENTION INVESTORS :</h1>
          {footerInvestors.map((inverstor) => (
            <div>
              <p className="flex text-xs">
                <span className="mt-1">
                  <LuDot />
                </span>
                {inverstor.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 mb-1">
          <h1 className="text-sm">Advisory - Investors</h1>
          {footerAdvisoryInvestors.map((Advisory, index) => (
            <div>
              <p className="flex text-xs">
                <span className="pr-1"> {`${index + 1}) `} </span>{" "}
                {Advisory.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <p className="text-xs">
            {" "}
            Privacy | Terms & Conditions | Disclaimer | Vernacular Languages
          </p>
        </div>

        <div className="mt-10 ">
          <div className="border-t-[1px] py-4 md:flex md:flex-row mobile:flex-col sm:flex-col justify-between ">
            <p className="text-base">
              Copyright © 2024 Inventure Growth & Securities Limited.
            </p>
            <p className="mr-4 mobile:text-center sm:text-center text-base">All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
