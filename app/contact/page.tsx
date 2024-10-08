"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Email sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send email. Please try again later.");
      }
    } catch (error) {
      setStatus("Failed to send email. Please try again later.");
      console.error("Error:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-black dark:text-white mb-8">
        Contact Us
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-medium text-black dark:text-white">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-2 p-3 border border-gray-300 dark:border-zinc-700 rounded-md dark:bg-black dark:text-white"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium text-black dark:text-white">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-2 p-3 border border-gray-300 dark:border-zinc-700 rounded-md dark:bg-black dark:text-white"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="text-sm font-medium text-black dark:text-white">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="mt-2 p-3 border border-gray-300 dark:border-zinc-700 rounded-md dark:bg-black dark:text-white"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-zinc-900 dark:bg-white text-white dark:text-black p-3 rounded-md font-bold hover:bg-zinc-700 dark:hover:bg-zinc-200 transition"
        >
          Send Message
        </button>
      </form>

      {status && <p className="mt-6 text-center text-sm text-red-500">{status}</p>}

      <div className="mt-12 text-center">
        <p className="text-sm text-black dark:text-white">
          Or, send us an email directly at{" "}
          <a href="mailto:hello@ingenieriaslentas.com" className="text-blue-600 dark:text-blue-400 underline">
            hello@ingenieriaslentas.com
          </a>
        </p>
      </div>
    </section>
  );
}
