"use client";

import { useState } from "react";
import Button from "../../components/Button";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-10 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-primary-dark mb-6 border-b-2 border-primary-dark pb-2">
          Contact Us
        </h1>

        {submitted && (
          <div className="bg-green-100 text-green-800 p-4 rounded mb-6">
            Thank you for reaching out! We'll get back to you soon.
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-5 bg-white p-6 rounded-lg shadow-md"
        >
          <div>
            <label className="block mb-2 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-dark"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-dark"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-dark"
            ></textarea>
          </div>

          <Button label={"Send Messages"} style={"primary"} />
        </form>

        <div className="mt-10 text-center">
          <h2 className="text-xl font-semibold mb-2">Other Ways to Reach Us</h2>

          <p>
            Phone:
            <a href="tel:+923401938272" className="text-primary-dark underline">
              +92-305-5367458
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
