import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [signup, isSigningUp] = useAuthStore();

  const validateForm = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return <div className="min-h-screen grid lg:grid-cols-2">

  </div>;
};

export default SignupPage;
