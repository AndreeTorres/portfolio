import React from "react";

export function Footer(): JSX.Element {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Left / Main info */}
          <div className="flex-1">
            <div className="text-white font-semibold text-lg">Miguel Andreé Torres</div>
            <div className="text-indigo-200 text-sm mt-1">Backend &amp; Mobile Developer</div>
            <p className="mt-3 text-sm text-gray-400 max-w-lg">
              Building scalable and reliable software solutions.
            </p>
          </div>

          {/* Links section */}
          <nav className="flex-1 md:flex md:items-center md:justify-end">
            <ul className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start md:items-center">
              <li>
                <a
                  href="https://github.com/AndreeTorres"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub — opens in new tab"
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-800 transition-colors"
                >
                  {/* GitHub icon */}
                  <svg className="w-5 h-5 text-gray-200" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.49 2.87 8.31 6.84 9.66.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.45-1.18-1.11-1.49-1.11-1.49-.91-.63.07-.62.07-.62 1.01.07 1.54 1.06 1.54 1.06.9 1.55 2.36 1.1 2.94.84.09-.66.35-1.1.63-1.35-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05A9.4 9.4 0 0112 6.8c.85.004 1.71.115 2.51.338 1.9-1.32 2.74-1.05 2.74-1.05.56 1.42.21 2.47.11 2.73.64.72 1.03 1.63 1.03 2.75 0 3.95-2.35 4.82-4.59 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.25 10.25 0 0022 12.22C22 6.58 17.52 2 12 2z" />
                  </svg>
                  <span className="text-sm">GitHub</span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:andreets15@gmail.com"
                  aria-label="Send email"
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-800 transition-colors"
                >
                  {/* Mail icon */}
                  <svg className="w-5 h-5 text-gray-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
                    <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-sm">Email</span>
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/50378826383"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp — opens in new tab"
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-800 transition-colors"
                >
                  {/* Phone / WhatsApp icon */}
                  <svg className="w-5 h-5 text-gray-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M2 8.5A7.5 7.5 0 1011.5 17L21 22l-4.5-9.5A7.5 7.5 0 002 8.5z" />
                  </svg>
                  <span className="text-sm">WhatsApp</span>
                </a>
              </li>

              <li>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Resume — opens PDF"
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-800 transition-colors"
                >
                  {/* FileText / Resume icon */}
                  <svg className="w-5 h-5 text-gray-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M14 2v6h6" />
                    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 18h4M8 14h8M8 10h8" />
                  </svg>
                  <span className="text-sm">Resume</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="text-sm text-gray-400 md:order-1 md:text-right">
              © 2025 Miguel Andreé Torres — All rights reserved.
            </div>
            <div className="text-xs text-gray-500">
              <span className="hidden sm:inline">Site built with care • </span>
              <span>Designed for clarity</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
