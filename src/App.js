import React, { useState } from "react";
import googlePlayIcon from "./assets/google-play-icon.png";
import appStoreIcon from "./assets/app-store-icon.png";
import QRCodeIcon from "./assets/QR_code.jpg";
// import D2CAwardLogoV from "./assets/D2C-award-logov.jpg";
import GoogleIcon from "./assets/Google-icon.jpg";
import FacebookIcon from "./assets/Facebook-icon.jpg";
import AppleIcon from "./assets/Apple-icon.jpg";
import PayPalIcon from "./assets/PayPal-icon.jpg";

const Login = () => {
  const [selectedMethod, setSelectedMethod] = useState("password");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // State for password visibility

  const handleOTPClick = () => {
    window.location.reload();
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible); // Toggle the password visibility
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <div className="flex flex-col lg:flex-row max-w-4xl w-full">
        {/* Left section (Login Form) */}
        <div className="w-full lg:w-[532px] h-[444px] lg:h-auto">
          <h2 className="text-2xl font-bold mb-6 text-center lg:text-left">
            WELCOME TO UBUY
          </h2>
          <div className="flex justify-center lg:justify-start space-x-6">
            <button className="w-full lg:w-[476px] h-[45px] rounded-l-[3px] border-t border-l border-b border-[#FFB100] bg-[#FFB100] text-[#151515] font-semibold">
              Log In
            </button>
            <button className="w-full lg:w-[476px] h-[45px] bg-[#F9F9F9] font-semibold">
              Sign Up
            </button>
          </div>
          <form className="mt-8 px-4 lg:px-0">
            <div className="mb-4">
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Email Address *"
              />
            </div>

            <div className="flex flex-col lg:flex-row items-center mb-4 space-y-4 lg:space-y-0 lg:space-x-4">
              <div className="flex items-center">
                <button
                  type="button"
                  className={`px-4 py-2 rounded-l-lg ${
                    selectedMethod === "password"
                      ? "bg-yellow-500 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => setSelectedMethod("password")}
                >
                  Password
                </button>
                <button
                  type="button"
                  className={`px-4 py-2 rounded-r-lg ${
                    selectedMethod === "otp"
                      ? "bg-yellow-500 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={handleOTPClick}
                >
                  OTP
                </button>
              </div>
              <div className="w-full lg:w-3/4 flex items-center border rounded-lg px-4 py-2">
                <input
                  type={isPasswordVisible ? "text" : "password"} // Toggle input type
                  className="w-full focus:outline-none"
                  placeholder="Password *"
                />
                <span
                  className="text-gray-500 ml-2 cursor-pointer" // Added cursor pointer for the eye icon
                  onClick={togglePasswordVisibility} // Call toggle function on click
                >
                  {isPasswordVisible ? "👁️" : "👁️"}{" "}
                </span>
              </div>
            </div>

            {selectedMethod === "password" && (
              <div className="mb-4 flex justify-end">
                <button className="font-poppins font-medium text-[#999999] text-sm">
                  Forgot your password?
                </button>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-yellow-500 text-custom-gray py-2 rounded-lg hover:bg-yellow-600 transition duration-200 font-semibold"
            >
              Log In
            </button>
          </form>
          <div className="mt-4 flex justify-center lg:justify-start w-full bg-[#F9F9F9] py-2 rounded-lg border border-[#E0E0E0]">
            <div className="flex items-center justify-center space-x-4 mx-auto">
              <img
                src={GoogleIcon}
                alt="Google"
                className="w-[28px] h-[30px]"
              />
              <img
                src={FacebookIcon}
                alt="Facebook"
                className="w-[24px] h-[25px]"
              />
              <img src={AppleIcon} alt="Apple" className="w-[23px] h-[23px]" />
              <img
                src={PayPalIcon}
                alt="PayPal"
                className="w-[22px] h-[22px]"
              />
              <span className="text-gray-500 text-sm font-semibold">
                Login with Social Accounts
              </span>
            </div>
          </div>
        </div>

        <div className="w-[1px] bg-gray-300 mx-4 hidden lg:block"></div>

        {/* Right section (Features) */}
        <div className="w-full lg:w-1/2 p-4 lg:p-8 flex flex-col justify-start items-center lg:items-start">
          <div className="flex w-full justify-between items-start">
            <ul className="space-y-4 mt-8">
              <li className="flex items-center space-x-2">
                <div className="w-[15px] h-[15px] rounded-full bg-[#0EBC3F]"></div>
                <span
                  className="text-[16px] font-medium text-left text-[#151515]"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Delivering in 10000+ Cities
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-[15px] h-[15px] rounded-full bg-[#0EBC3F]"></div>
                <span
                  className="text-[16px] font-medium text-left text-[#151515]"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Presence in 6 Continents
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-[15px] h-[15px] rounded-full bg-[#0EBC3F]"></div>
                <span
                  className="text-[16px] font-medium text-left text-[#151515]"
                  style={{ whiteSpace: "nowrap" }}
                >
                  300 Million Products
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-[15px] h-[15px] rounded-full bg-[#0EBC3F]"></div>
                <span
                  className="text-[16px] font-medium text-left text-[#151515] "
                  style={{ whiteSpace: "nowrap" }}
                >
                  10 Million Happy Customers & Counting style
                </span>
              </li>
              <li className="flex items-center space-x-2 ">
                <div className="w-[15px] h-[15px] rounded-full bg-[#0EBC3F]"></div>
                <span
                  className="text-[16px] font-medium text-left text-[#151515]"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Ubuy Wins Best Cross Border Brand Award in 2023 style
                </span>
              </li>
            </ul>

            {/* <div className="w-[100px] h-[100px] flex justify-center items-center">
              <img
                src={D2CAwardLogoV}
                alt="D2C Award"
                className="w-full h-full"
              />
            </div> */}
          </div>

          <div className="flex items-center mt-8">
            <img
              src={QRCodeIcon}
              alt="QR Code"
              className="w-[110px] h-[110px] mr-4"
            />
            <div>
              <p
                className="font-poppins text-[17.53px] font-bold text-[#151515] mb-1"
                style={{ whiteSpace: "nowrap" }}
              >
                DON'T HAVE UBUY APP?
              </p>

              <p className="font-poppins text-[15.34px] font-medium text-[#151515]">
                Download it here!
              </p>
              <div className="flex mt-2">
                <img
                  src={googlePlayIcon}
                  alt="Google Play"
                  className="w-[109.57px] h-[36.16px] mr-2"
                />
                <img
                  src={appStoreIcon}
                  alt="App Store"
                  className="w-[111.76px] h-[36.16px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
