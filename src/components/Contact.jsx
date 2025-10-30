import React from "react";
import "./Contact.css";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="contact-section plain-contact">
      <h2 className="contact-title">Contact Information</h2>
      <p className="contact-subtitle">
        Feel free to reach out. I'm available for internships, projects, and collaborations.
      </p>

      <div className="contact-list">
        <div className="contact-row">
          <Mail className="contact-icon" />
          <div className="contact-text">
            <div className="contact-label">Email</div>
            <div className="contact-value">manjulampc0@gmail.com</div>
          </div>
        </div>

        <div className="contact-row">
          <Phone className="contact-icon" />
          <div className="contact-text">
            <div className="contact-label">Phone</div>
            <div className="contact-value">7780508766</div>
          </div>
        </div>

        <div className="contact-row">
          <MapPin className="contact-icon" />
          <div className="contact-text">
            <div className="contact-label">Location</div>
            <div className="contact-value">Hyderabad, Telangana, India</div>
          </div>
        </div>
      </div>

      <div className="connect-box plain-connect">
        <h3 className="connect-title">Let's Connect</h3>
        <p className="connect-text">
          I'm currently available for freelance work and open to new opportunities. 
          If you'd like to collaborate, feel free to note my contact details above.
        </p>
      </div>
    </section>
  );
};

export default Contact;
