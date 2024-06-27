import React from "react";
import { DematAccountData } from "../data/data";
import DematBackgroundImage from "../assets/DematAcImages/dematBackgroundimage.jpeg";
import GroupImage from "../assets/DematAcImages/IGSL-Trade-app-Desktop-Size.jpg";
import clockviseImage from "../assets/DematAcImages/Vector1.png";
import straightImage from "../assets/DematAcImages/straightline.png";
import antiClockWiseImage from "../assets/DematAcImages/Vector2.png";

const DematAccount = () => {
  return (
    <>
      <div className="w-full h-auto mt-10 flex justify-center overflow-x-hidden">
        <div className="w-[85%] h-[85%] flex flex-col justify-center">
          <div className="md:max-w-[25%] md:mx-auto ">
            <h1 className=" md:text-center  font-bold text-base">
              <span className="p-1.5 bg-[#F2EBFF] text-purple">
                Why choose us
                </span>
            </h1>
          </div>

          <div className="md:w-[65%] mobile:w-[80%] sm:w-[80%] md:mx-auto mt-5">
            <h1 className="md:text-5xl sm:text-3xl mobile:text-3xl  w-[100%] md:text-center font-medium">
              Benefits for opening Demat A/C with IGSL:-
            </h1>
          </div>

          <div className="w-full flex justify-center mt-8">
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-auto-rows-1/3">
              {DematAccountData.map((demataccount) => (
                <div
                  key={demataccount.id}
                  className={`border-l-[1px] border-[#E7E7E7] py-4 px-6 ${
                    demataccount.id === 4 || demataccount.id === 8
                      ? "border-r-[1px]"
                      : ""
                  }`}
                >
                  <div className="flex pb-2 border-b-[1px] border-[#111112]">
                    <img
                      src={demataccount.image}
                      alt={demataccount.title}
                      className="h-[32px] w-[32px]"
                    />
                  </div>
                  <div className="mt-4 text-start text-2xl text-[#30303C]">
                    <p className="text-xl font-medium">{demataccount.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mt-6 w-full object-contain">
        <img className="w-full  object-cover" src={GroupImage} alt="" />
      </div> */}

      {/* Demat Account Open */}

      <div className="w-full mt-12 flex justify-center">
        <div className="w-[85%] h-[85%] flex flex-col justify-center">
          <div className="max-w-[25%] md:mx-auto">
            <h1 className="p-1.5 px-3 bg-[#F2EBFF] uppercase text-center text-purple font-bold text-base">
              Steps
            </h1>
          </div>

          <div className="md:w-[65%] sm:w-[80%] mobile:w-[80%] md:mx-auto mt-5">
            <h1 className="md:text-5xl sm:text-3xl mobile:text-3xl w-[100%] md:text-center font-medium">
              Steps to Open a  <br/>
              <span className="mt-3">
               Demat Trading Account
               </span>
            </h1>
          </div>

          <div className="w-full mobile:mt-0 sm:mt-0 md:mt-10 mb-11 relative">
           
              <div className="w-full relative md:flex md:flex-row sm:flex-col justify-between mt-12">
                  <div className="mobile:w-[350px] md:w-[250px] h-[150px] flex items-center bg-white shadow-xl rounded-lg z-10">
                     <div className="w-[90%] h-[50%] flex flex-col justify-between items-center">
                        <h3 className="w-[90%] mx-auto text-[#30303C] text-2xl">Step 01</h3>

                        <p className="w-[90%] mx-auto mt-2">Fill up your personal details in the form above</p>
                     </div>
                  </div>
                  <div className="mobile:w-[350px] md:w-[250px] mobile:mt-5 sm:mt-5 md:mt-10 h-[150px] flex items-center bg-white shadow-xl rounded-lg z-10">
                     <div className="w-[80%] h-[50%] flex flex-col justify-between items-center">
                        <h3 className="w-[90%] mx-auto text-[#30303C] text-2xl">Step 02</h3>

                        <p className="w-[90%] mx-auto mt-2">Enter OTP received on your registered mobile number.</p>
                     </div>
                  </div>
                  <div className="mobile:w-[350px] md:w-[250px] h-[150px] mobile:mt-5 sm:mt-5 md:mt-2 flex items-center bg-white shadow-xl rounded-lg z-10">
                     <div className="w-[80%] h-[50%] flex flex-col justify-between items-center">
                        <h3 className="w-[90%] mx-auto text-[#30303C] text-2xl">Step 03</h3>

                        <p className="w-[90%] mx-auto mt-2">Upload the required documents.</p>
                     </div>
                  </div>
                  <div className="mobile:w-[350px] md:w-[250px] h-[150px] mobile:mt-5 sm:mt-5 md:mt-10 flex items-center bg-white shadow-xl rounded-lg z-10">
                     <div className="w-[80%] h-[50%] flex flex-col justify-between items-center">
                        <h3 className="w-[90%] mx-auto text-[#30303C] text-xl">Congratulations !</h3>

                        <p className="w-[90%] mx-auto mt-2">You have completed the account opening process.</p>
                     </div>
                  </div>
              </div>
               <div className="absolute sm:hidden mobile:hidden md:block top-[2%] left-[66%]" >
               <img src={antiClockWiseImage} alt="" />
            </div>
            <div className="absolute sm:hidden mobile:hidden md:block top-[51%] left-[46%] z-5" >
               <img src={straightImage} alt="" />
            </div>
             <div className="absolute sm:hidden mobile:hidden md:block top-[90%] left-[15%]" >
               <img src={clockviseImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DematAccount;
