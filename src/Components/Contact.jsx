import React, { useState } from 'react';
import { assets } from '../assets/assets'
import SectionTitle from './SectionTitle'

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
    services: '' // new field
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone Number is required';
    if (!formData.services.trim()) newErrors.services = 'Please select a service';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        message: '',
        services: '',
      });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div id="contact" className="contact-section">
      <div className="heading-breadcrumb">
        <SectionTitle text1={"C"} text2={"Contact"} />
      </div>

      <div className="contact-container">
        <div className="stripe-container">
          <div className="stripe stripe-one"></div>
          <div className="stripe stripe-two"></div>
        </div>
        <div className="contact-left">
          <h2>
            Lets Get in <span className="blue">Touch!</span>
          </h2>
          <p>
            Link World FZCO provides comprehensive financial, strategic <br />
            and operational support to its subsidiaries, <br /> enabling sustainable
            growth
            maximizing business performance <br /> and ensuring long-term
            success across global markets.
          </p>
          {/* <p>
            <strong>Qui laudantium</strong>
          </p> */}
          <img src={assets.contImg} alt="Person" className="contact-image" />
        </div>

        <div className="contact-right">
          <form
            className="contact-form"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <label>Full Name:</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <small>{errors.fullName}</small>}

            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <small>{errors.email}</small>}

            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              maxLength={10}
            />
            {errors.phone && <small>{errors.phone}</small>}

            <label>Services:</label>
            <select
              name="services"
              value={formData.services}
              onChange={handleChange}
            >
              <option value="">-- Select a Service --</option>
              <option value="Investment & Capital Management">
                Investment & Capital Management
              </option>
              <option value="Strategic Business Development">
                Strategic Business Development
              </option>
              <option value="Corporate Governance & Compliance">
                Corporate Governance & Compliance
              </option>
              <option value="Operational Support & Advisory">
                Operational Support & Advisory
              </option>
              <option value="Mergers & Acquisitions (M&A) ">
                Mergers & Acquisitions (M&A){" "}
              </option>
            </select>
            {errors.services && <small>{errors.services}</small>}

            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
            ></textarea>
            {errors.message && <small>{errors.message}</small>}

            <div className="cont-btn">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
