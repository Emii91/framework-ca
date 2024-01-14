import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  const [formErrors, setFormErrors] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "fullName":
      case "subject":
      case "body":
        error = value.length < 3 ? `Must be at least 3 characters` : "";
        break;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        error = !emailRegex.test(value) ? "Enter a valid email address" : "";
        break;
      default:
        break;
    }

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));

    return !error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = Object.keys(formData).every((name) =>
      validateField(name, formData[name])
    );

    if (isValid) {
      console.log("Form data:", formData);
    } else {
      console.log("Form contains errors. Please fix them.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(formData).map((name) => (
        <div key={name}>
          <label htmlFor={name}>
            {name === "fullName"
              ? "Full name"
              : name.charAt(0).toUpperCase() + name.slice(1)}
            :
          </label>
          {name === "body" ? (
            <textarea
              id={name}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              required
            />
          ) : (
            <input
              type={name === "email" ? "email" : "text"}
              id={name}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              required
            />
          )}
          <div className="error-message">{formErrors[name]}</div>
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
