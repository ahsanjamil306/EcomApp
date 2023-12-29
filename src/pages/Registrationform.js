// src/components/RegisterForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const RegisterForm = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    mobile: "",
    email: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.name ||
      !formData.password ||
      !formData.mobile ||
      !formData.email ||
      !formData.location
    ) {
      alert("Please fill in all fields");
      return;
    }

    // Save the registered values
    onRegister(formData);
  };

  return (
    <form className="w-1/2 mx-auto mt-8" onSubmit={handleSubmit}>
      <label className="block mb-2">Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 mb-4"
      />

      <label className="block mb-2">Password:</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        className="w-full p-2 mb-4"
      />

      <label className="block mb-2">Mobile Number:</label>
      <input
        type="text"
        name="mobile"
        value={formData.mobile}
        onChange={handleChange}
        className="w-full p-2 mb-4"
      />

      <label className="block mb-2">Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 mb-4"
      />

      <label className="block mb-2">Location:</label>
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleChange}
        className="w-full p-2 mb-4"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded"
        onClick={() => navigate("/Login")}
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
