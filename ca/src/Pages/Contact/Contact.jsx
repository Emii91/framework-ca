import React from "react";
import "./Contact.css";
import ContactForm from "./ContactForm";
const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <p className="contact-text">
        Please feel free to contact us with any questions you may have. Our
        customer support service are available to you at any time.
      </p>
      <ContactForm />
    </div>
  );
};
export default Contact;
