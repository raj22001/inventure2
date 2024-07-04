import React, { useEffect, useState } from "react";
import formbackgroundimage from "../assets/dematbg2.png";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

const DematAccountForm = () => {
  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const charsArray =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let captchaString = "";
    for (let i = 0; i < 6; i++) {
      const index = Math.floor(Math.random() * charsArray.length);
      captchaString += charsArray[index];
    }
    setCaptcha(captchaString);
  };

  const initialValues = {
    name: "",
    dematEmail: "",
    phoneNumber: "",
    terms: false,
  };

  const DematAccoutObjectSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Please enter your name"),
    dematEmail: yup
      .string()
      .email("Invalid email")
      .required("Email Id is required"),
    phoneNumber: yup
      .string() // Convert to string for exact length validation
      .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
      .required("Please enter the Phone Number"),
    terms: yup
      .boolean()
      .oneOf([true], "You must agree to the terms and conditions")
      .required("You must agree to the terms and conditions"),
  });

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    touched,
    handleBlur,
    resetForm,
  } = useFormik({
    initialValues,
    validationSchema: DematAccoutObjectSchema,
    onSubmit: async (values) => {
      if (captchaInput !== captcha) {
        setCaptchaError("Captcha does not match");
        generateCaptcha();
        return;
      }

      try {

        const url = '/api/superfone/webhook/integration/L9IdPFhPnoUvQEVeobLgL5VQh_Zpnc';

        // console.log({ url })

        const payload = {
          first_name: values.name,
          last_name:"",
          email: [values.dematEmail],
          additional_info:"Demat Account Opening",
          phones: [
            {
              phone:values.phoneNumber,
            }
          ] ,
        };

        // console.log("payload", payload);

        const response = await axios.post(url, payload);

        console.log({response})

        toast.success("form submitted successfully")
        generateCaptcha();
        resetForm();
        setCaptchaError("");
        setCaptchaInput("");

         fbq('track', 'Lead');

        // triggerFacebookLeadEvent();
      } catch (error) {
        console.error("Form submission error", error);

      }
    },
  });

  // const triggerFacebookLeadEvent = () => {
  //   const script = document.createElement("script");
  //   script.innerHTML = `fbq('track', 'Lead');`;
  //   document.body.appendChild(script);
  // };

  return (
    <div
      className="w-full h-auto  md:h-[750px]  md:mb-14 sm:mb-0 mobile:mb-0"
      style={{
        backgroundImage: `url(${formbackgroundimage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Toaster />
      <div className="w-full  md:flex md:flex-row  sm:flex sm:flex-col  h-[100%]">
        {/* Left Side */}
        <div className="md:w-[70%] mobile:w-[100%] sm:w-full md:h-full sm:h-[40%] mobile-h-[50%] ">
          {/* <div className="flex flex-col h-full md:w-[80%] sm:w-[94%] mobile-[94%]  mobile:mx-auto justify-center ">
            <h1 className="md:text-5xl text-white mobile:mt-6 sm:mt-6 md:mt-0 overflow-y-hidden mobile:text-3xl sm:text-3xl md:w-full mobile:w-[94%] sm:w-[94%] mobile:mx-auto sm:mx-auto">
              Lorem ipsum dolor sit amet consectetur.r
            </h1>

            <p className="mt-5  text-white mobile:mb-6 sm:mb-6 md:mb-0 sm:text-base mobile:text-base md:text-2xl md:w-[100%] mobile:w-[94%] sm:w-[94%] mobile:mx-auto sm:mx-auto">
              Lorem ipsum dolor sit amet consectetur. Enim nisl venenatis
              gravida scelerisque posuere bibendum nunc at.
            </p>
          </div> */}
        </div>

        {/* Right Side */}
        <div className="md:w-[50%] mobile:w-[100%] sm:w-full md:h-full sm:h-[50%]  bg-cover ">
          <div className="w-full h-full mobile:py-6 sm:py-6 md:py-0 flex justify-center items-center">
            <div className=" mobile:w-[90%]  sm:w-[90%] md:w-[70%] md:m-auto  sm:h-[80%]  md:h-auto flex my-auto bg-white rounded-lg shadow ">
              <div className="w-full px-8 py-8">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(e);
                  }}
                >
                  <h1 className="mobile:text-base sm:text-base md:text-4xl overflow-y-hidden font-medium">
                    Open your FREE Demat Account
                  </h1>

                  <div className="mb-4 mt-4">
                    <input
                      className="text-sm appearance-none border-gray border-2 rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
                      type="text"
                      id="name"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Name"
                    />
                    {errors.name && touched.name ? (
                      <p className="font-Marcellus text-start text-red-900">
                        {errors.name}
                      </p>
                    ) : null}
                  </div>
                  <div className="mb-3 mt-4">
                    <input
                      className="text-sm bg-gray-200 border-gray border-2 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                      type="email"
                      id="dematEmail"
                      name="dematEmail"
                      value={values.dematEmail}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Email address "
                    />
                    {errors.dematEmail && touched.dematEmail ? (
                      <p className="font-Marcellus text-start text-red-900">
                        {errors.dematEmail}
                      </p>
                    ) : null}
                  </div>
                  <div className="flex w-full">
                    <select
                      id="states"
                      class="bg-gray-50 border-gray border-2 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-[20%] h-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="MI">+91</option>
                    </select>
                    <input
                      className="text-sm bg-gray-200 border-gray border-2 appearance-none  border-gray-300 w-[90%] py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={values.phoneNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Phone number"
                    />
                  </div>
                  {errors.phoneNumber && touched.phoneNumber ? (
                    <p className="font-Marcellus text-start text-red-900">
                      {errors.phoneNumber}
                    </p>
                  ) : null}

                  <div className="mb-4 mt-4">
                    <div className="flex items-center">
                      <div
                        className="bg-gray-200 text-gray-900 text-center font-bold text-xl p-2 rounded"
                        style={{
                          userSelect: "none",
                          transform: "scale(1.2) ",
                          letterSpacing: "3px",
                        }}
                      >
                        {captcha}
                      </div>
                      <button
                        type="button"
                        onClick={generateCaptcha}
                        className="ml-2 text-sm text-purple hover:text-gray-900"
                      >
                        Refresh
                      </button>
                    </div>
                    <input
                      className="text-sm appearance-none border-gray border-2 rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10 mt-2"
                      type="text"
                      id="captcha"
                      name="captcha"
                      value={captchaInput}
                      onChange={(e) => setCaptchaInput(e.target.value)}
                      placeholder="Enter captcha"
                    />
                    {captchaError && (
                      <p className="font-Marcellus text-start text-red-900">
                        {captchaError}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center mb-4">
                    <input
                      type="checkbox"
                      id="terms"
                      name="terms"
                      checked={values.terms}
                      onChange={handleChange}
                      value={values.terms}
                      className="mr-2"
                    />
                    <label htmlFor="terms" className="text-base text-gray-700">
                      I agree to the terms and conditions
                    </label>
                  </div>
                  {errors.terms && (
                    <p className="font-Marcellus text-start text-red-900 ml-2">
                      {errors.terms}
                    </p>
                  )}

                  <div className="flex w-full mt-8">
                    <button
                      className="w-full bg-purple hover:bg-gray-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DematAccountForm;
