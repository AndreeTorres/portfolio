import React from 'react';

const HeroSection = () => {
    return (
        <section className="bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="order-2 md:order-1">
                        <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
                            Backend & Mobile Developer
                        </p>
                        <h1 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                            Miguel Andreé Torres
                        </h1>
                        <p className="mt-4 text-lg text-gray-600">
                            I build scalable backend systems and intuitive mobile applications using modern technologies
                            across Java ecosystems, Android development, and full-stack tools like React and relational
                            databases such as PostgreSQL.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href="#projects"
                                aria-label="View my projects"
                                className="inline-block px-6 py-3 text-center font-semibold text-white bg-gray-900 rounded-lg shadow-md hover:bg-gray-800 transition-colors duration-300"
                            >
                                View Projects
                            </a>
                            <a
                                href="/CV-Miguel-Torres.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Download my resume"
                                className="inline-block px-6 py-3 text-center font-semibold text-gray-900 bg-transparent border-2 border-gray-900 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                            >
                                Download Resume
                            </a>
                        </div>
                        <p className="mt-8 text-sm text-gray-500">
                            Based in San Salvador, El Salvador · Open to remote opportunities
                        </p>
                    </div>

                    {/* Image Placeholder */}
                    <div className="order-1 md:order-2 flex justify-center">
                        <div
                            className="w-full max-w-xs sm:max-w-sm md:max-w-full aspect-[3/4] bg-gray-200 rounded-lg shadow-lg flex items-center justify-center">
                            <span className="text-gray-500">Profile photo</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;