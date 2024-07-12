import React, { useState } from "react";

const Ragistation = () => {
  let [email, setEmail] = useState("");
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");

  let HandleEmail = (e) => {
    setEmail(e.target.value);
  };
  let HandleName = (e) => {
    setName(e.target.value);
  };
  let HandlePassword = (e) => {
    setPassword(e.target.value);
  };
  let handleSubmit = () => {
    console.log(email,name,password)
  }
  return (
    <>
      <div className="w-full h-screen flex">
        <div className="p1 w-2/4 h-full justify-end items-center flex">
          <div className="mr-[70px]">
            <h1 className="text-[35px] font-Ghost font-bold text-[#11175D] mb-[12px]">
              Get started with easily register
            </h1>
            <p className="text-[20px] font-Ghost font-normal text-[#000000] opacity-[50%] mb-[40px]">
              Free register and you can enjoy it
            </p>
            <div className="w-[368px] h-[81px] relative mb-[30px]">
              <input
                onChange={HandleEmail}
                className="w-full h-full text-[18px] font-Ghost font-medium text-[#11175D] p-6 border border-[#11175D] border-opacity-50 rounded-lg "
                type="text"
              />
              <span className="absolute top-[26px] left-[25px] transition duration-300 input-text px-2 text-[20px] font-medium text-[#11175D]">
                Email Address
              </span>
            </div>
            <div className="w-[368px] h-[81px] relative mb-[30px]">
              <input
                onChange={HandleName}
                className="w-full h-full text-[18px] font-Ghost font-medium text-[#11175D] p-6 border border-[#11175D] border-opacity-50 rounded-lg "
                type="text"
              />
              <span className="absolute top-[26px] left-[25px] transition duration-300 input-text px-2 text-[20px] font-medium  text-[#11175D]">
                Ful name
              </span>
            </div>
            <div className="w-[368px] h-[81px] relative mb-[30px]">
              <input
                onChange={HandlePassword}
                className="w-full h-full text-[18px] font-Ghost font-medium text-[#11175D] p-6  border border-[#11175D] border-opacity-50 rounded-lg "
                type="text"
              />
              <span className="absolute top-[26px] left-[25px] transition duration-300 input-text px-2 text-[20px] font-medium text-[#11175D]">
                Password
              </span>
            </div>
            <a
              onClick={handleSubmit}
              className="text-[20px] font-Ghost font-semibold text-[#FFFFFF] px-[150px] py-[20px] bg-[#5F35F5] rounded-[83px] mt-[50px] inline-block "
              href="#"
            >
              Sign up
            </a>
            <h5 className="text-[13px] font-Ghost font-normal text-[#03014C] ml-[80px] mt-[20px]">
              Already have an account ?{" "}
              <span>
                <a
                  className="text-[15px] font-Ghost font-medium text-[#EA6C00]"
                  href="#"
                >
                  Sign In
                </a>
              </span>
            </h5>
          </div>
        </div>
        <div className="p2 w-2/4 h-full">
          <img
            className="w-full object-cover overflow-hidden h-full"
            src="Benner.png"
            alt="Benner"
          />
        </div>
      </div>
    </>
  );
};

export default Ragistation;
