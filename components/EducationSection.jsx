import React from "react";

export default function EducationSection() {
  return (
    <section id="education" className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">Education</h2>
        <p className="mt-2 text-gray-600">
          Academic background that supports my technical foundation and continuous learning.
        </p>
      </div>

      {/* Timeline container */}
      <div className="relative">
        {/* vertical line */}
        <div className="hidden md:block absolute left-8 top-2 bottom-2 w-[2px] bg-gray-200" aria-hidden="true" />

        <div className="space-y-8">
          {/* UCA - main node */}
          <div className="relative md:pl-16 group">
            {/* node marker */}
            <div className="absolute md:left-4 -left-1 top-2 flex items-center justify-center w-9 h-9 rounded-full bg-indigo-50 text-indigo-600 shadow-sm">
              {/* graduation cap icon */}
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 3L2 8l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 8v4c0 5 4 9 10 9s10-4 10-9V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 11v7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <article className="bg-white rounded-xl p-6 md:p-8 shadow-xl hover:shadow-2xl transform-gpu group-hover:-translate-y-2 group-hover:scale-[1.01] transition-all duration-300 overflow-hidden">
              <header className="mb-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg md:text-2xl font-extrabold text-gray-900">Computer Engineering</h3>
                    <div className="text-sm text-gray-500">Universidad Centroamericana José Simeón Cañas (UCA)</div>
                    <div className="text-xs text-gray-400 mt-1">Mar 2022 – Present</div>
                  </div>

                  <div className="flex flex-col items-end space-y-2">
                    <span className="inline-flex items-center gap-2 px-2 py-1 rounded-full text-xs bg-indigo-50 text-indigo-700">
                      Current Studies
                    </span>
                    {/* rombo icon removed as requested */}
                  </div>
                </div>
              </header>

              <p className="text-sm text-gray-600 leading-7 mb-3">
                Throughout my studies in Computer Engineering, I’ve gained exposure to different areas of modern
                technology and software development. I’ve learned how to adapt quickly, strengthen my existing knowledge,
                and continuously improve through hands-on projects that simulate real-world scenarios.
              </p>
              <p className="text-sm text-gray-600 leading-7 mb-4">
                Working in team-based environments has helped me understand the importance of collaboration, communication,
                and critical thinking when building scalable and maintainable software solutions.
              </p>

              <div className="mt-2 space-y-3">
                {/* subtle divider */}
                <div className="h-px bg-gray-100" />

                {/* visual progress */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 mb-1">Progress</div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: "73%" }} aria-valuenow="73" aria-valuemin="0" aria-valuemax="100" />
                    </div>
                  </div>

                  <div className="ml-4 text-sm text-gray-400">73%</div>
                </div>

                <ul className="list-disc list-inside space-y-1 text-sm text-gray-400">
                  <li>GPA: 7.92 / 10</li>
                </ul>
              </div>
            </article>
          </div>

          {/* IBERO - secondary node */}
          <div className="relative md:pl-16 group">
            <div className="absolute md:left-4 -left-1 top-2 flex items-center justify-center w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 shadow-sm">
              {/* globe icon */}
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12h20M12 2c2.5 4 2.5 8 2.5 10S14.5 20 12 22" stroke="currentColor" strokeWidth="1" strokeOpacity="0.8" />
              </svg>
            </div>

            <article className="bg-white rounded-xl p-5 md:p-6 shadow-lg hover:shadow-xl transform-gpu group-hover:-translate-y-1 group-hover:scale-[1.005] transition-all duration-300 md:border-l-4 md:border-indigo-200 md:pl-6">
              <div className="md:flex md:items-start md:justify-between">
                <div className="md:flex-1">
                  <header className="mb-3">
                    <h4 className="text-base font-medium text-gray-800">Academic Exchange Program</h4>
                    <div className="text-sm text-gray-500">Universidad Iberoamericana (IBERO), Mexico</div>
                    <div className="text-xs text-gray-400 mt-1">Aug 2025 – Dec 2025</div>
                  </header>

                  <p className="text-sm text-gray-600 leading-7 mb-3">
                    During my academic exchange, I gained a broader perspective both personally and professionally by working
                    in a different academic and cultural environment. This experience allowed me to approach software projects
                    with a more critical and structured mindset, focusing on improvement, collaboration, and adaptability.
                  </p>
                  <p className="text-sm text-gray-600 leading-7 mb-3">
                    I was exposed to new ways of analyzing problems, organizing projects, and refining technical solutions,
                    which helped me strengthen my ability to evaluate my own work and continuously improve the quality of my projects.
                  </p>
                </div>

                <div className="ml-4 flex-shrink-0 hidden md:flex flex-col items-end">
                  <span className="inline-flex items-center gap-2 px-2 py-1 rounded-full text-xs bg-indigo-50 text-indigo-700">
                    International Academic Experience
                  </span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
