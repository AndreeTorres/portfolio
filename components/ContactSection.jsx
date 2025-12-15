"use client";
import React, { useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // UI-only: mostrar confirmación simple
    setStatus("Gracias — tu mensaje ha sido preparado (no se envía realmente).");
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <section id="contact" className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">Contact</h2>
        <p className="mt-2 text-gray-600">
          Want to collaborate or discuss an opportunity? Feel free to reach out — I’m happy to chat.
        </p>
        <p className="mt-1 text-sm text-gray-700 font-semibold italic">I usually respond within 24–48 hours.</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden md:flex md:space-x-6">
        {/* Left info panel - softer contrast and padding */}
        <aside className="md:w-1/3 bg-gray-800 text-white p-5">
          <h3 className="text-xl font-semibold">Contact Information</h3>
          <p className="mt-2 text-gray-300 text-sm">Choose a channel below and I’ll get back to you.</p>

          <nav className="mt-6 space-y-3" aria-label="Contact methods">
            <a
              href="mailto:andreets15@gmail.com"
              aria-label="Send email to andreets15@gmail.com"
              className="flex items-center gap-4 p-3 rounded-md hover:bg-gray-700 hover:text-indigo-100 transition-colors"
            >
              <span className="flex-none">
                {/* mail icon */}
                <svg className="w-6 h-6 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <div className="text-left">
                <div className="text-sm font-medium">andreets15@gmail.com</div>
                <div className="text-xs text-gray-300">Email</div>
              </div>
            </a>

            <a
              href="tel:+50378826383"
              aria-label="Call or WhatsApp +503 7882 6383"
              className="flex items-center gap-4 p-3 rounded-md hover:bg-gray-700 hover:text-indigo-100 transition-colors"
            >
              <span className="flex-none">
                {/* phone icon */}
                <svg className="w-6 h-6 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h2.2a1 1 0 01.9.55l1.2 2.4a1 1 0 01-.2 1.05L7.6 9.6a11.05 11.05 0 005.8 5.8l1.6-1.6a1 1 0 011.05-.2l2.4 1.2a1 1 0 01.55.9V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                </svg>
              </span>
              <div className="text-left">
                <div className="text-sm font-medium">+503 7882 6383</div>
                <div className="text-xs text-gray-300">Phone / WhatsApp</div>
              </div>
            </a>

            <a
              href="https://github.com/AndreeTorres"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open GitHub profile"
              className="flex items-center gap-4 p-3 rounded-md hover:bg-gray-700 hover:text-indigo-100 transition-colors"
            >
              <span className="flex-none">
                {/* github icon */}
                <svg className="w-6 h-6 text-indigo-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.49 2.87 8.31 6.84 9.66.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.45-1.18-1.11-1.49-1.11-1.49-.91-.63.07-.62.07-.62 1.01.07 1.54 1.06 1.54 1.06.9 1.55 2.36 1.1 2.94.84.09-.66.35-1.1.63-1.35-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05A9.4 9.4 0 0112 6.8c.85.004 1.71.115 2.51.338 1.9-1.32 2.74-1.05 2.74-1.05.56 1.42.21 2.47.11 2.73.64.72 1.03 1.63 1.03 2.75 0 3.95-2.35 4.82-4.59 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.25 10.25 0 0022 12.22C22 6.58 17.52 2 12 2z" />
                </svg>
              </span>
              <div className="text-left">
                <div className="text-sm font-medium">github.com/AndreeTorres</div>
                <div className="text-xs text-gray-300">GitHub</div>
              </div>
            </a>
          </nav>
        </aside>

        {/* Right form panel */}
        <div className="md:flex-1 p-6 bg-white">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your full name"
                className="mt-2 block w-full rounded-md border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="mt-2 block w-full rounded-md border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                placeholder="Tell me about your project, idea, or opportunity."
                className="mt-2 block w-full rounded-md border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div className="flex flex-col md:flex-row items-center md:justify-between gap-3">
              <button
                type="submit"
                className="w-full md:w-auto inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 transition-colors"
              >
                Send Message
              </button>
              <p className="text-sm text-gray-600 font-semibold">I usually respond within 24–48 hours.</p>
            </div>

            {status && (
              <div className="mt-2 text-sm text-green-600" role="status">
                {status}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
