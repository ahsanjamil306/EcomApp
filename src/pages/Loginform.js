// src/components/LoginForm.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField/InputField";
import OrangeButton from "../components/OrangeButton/OrangeButton";
const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    name: "",
    password: "",
  });

  const navigate = useNavigate();

  const [loader, setLoader] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Function to validate the form fields
  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (values.email === "") {
      newErrors.email = "Please enter an email";
      isValid = false;
    } else if (!emailRegex.test(values.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (values.password === "") {
      newErrors.password = "Please enter a password";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    setErrors({
      email: "",
      password: "",
    });
  }, [values]);

  const handleSubmit = () => {
    if (!validateForm()) {
      return;
    }

    if (values.email == "zobi.asad97@gmail.com" && values.password == 123) {
      navigate("/");
    } else {
      alert("Please Enter Correct Email and Password");
    }
  };

  return (
    <div className="bg-blue-500 w-screen h-screen m-auto flex flex-col justify-center items-center space-y-4">
      <div className="">
        <p className="text-[50px] text-white font-bold mb-10">SHOW WHOP</p>
      </div>
      <div>
        <InputField
          name="email"
          heading={"Email Address"}
          value={values.email}
          onChange={(e) => handleChange(e)}
        />
        <p className="text-yellow-500 text-[10px] italic font-inter mt-2">
          {errors?.email}
        </p>
      </div>
      <div>
        <InputField
          type={"password"}
          name="password"
          heading={"Password"}
          value={values.password}
          onChange={(e) => handleChange(e)}
        />
        <p className="text-yellow-500 text-[10px] italic font-inter mt-2">
          {errors?.password}
        </p>
        {/* <div className="w-[320px] text-white flex justify-end mt-1 font-inter font-[600] italic text-[10px] ">
          <p className="cursor-pointer underline ">Forgot Password</p>
        </div> */}
      </div>
      <div className="my-5">
        <OrangeButton ButtonTitle={"Login"} onClick={() => handleSubmit()} />
      </div>
      {/* <p className="text-white text-[12px] italic text-center font-inter">
        Need an account? Create one over{" "}
        <span
          className="text-[#0291F9] cursor-pointer underline"
          onClick={() => navigate("/")}
        >
          here.
        </span>
      </p> */}
    </div>
  );
};

export default LoginForm;
