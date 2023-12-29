// src/components/LoginForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const LoginForm = ({ registeredUsers, onLogin }) => {
  const [loginData, setLoginData] = useState({
    name: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!loginData.name || !loginData.password) {
      alert("Please fill in all fields");
      return;
    }

    // Check if the user exists
    const user = registeredUsers.find(
      (u) => u.name === loginData.name && u.password === loginData.password
    );

    if (user) {
      // Successful login
      onLogin(user);
      console.log("Login successful:", user);
    } else {
      // Wrong name or password
      alert("Wrong name or password");
    }
  };

  return (
    <form className="w-1/2 mx-auto mt-8" onSubmit={handleSubmit}>
      <label className="block mb-2">Name:</label>
      <input
        type="text"
        name="name"
        value={loginData.name}
        onChange={handleChange}
        className="w-full p-2 mb-4"
      />

      <label className="block mb-2">Password:</label>
      <input
        type="password"
        name="password"
        value={loginData.password}
        onChange={handleChange}
        className="w-full p-2 mb-4"
      />

      <button
        onClick={() => navigate("/")}
        type="submit"
        className="bg-green-500 text-white p-2 rounded"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
