import React from 'react';

const AboutSection = () => {
    const quickFacts = [
        "Computer Engineering student at UCA with strong academic performance",
        "Experience teaching Mobile Development and IoT at UCA",
        "Focused on backend architecture, API design, and mobile development",
        "Committed to clean, maintainable code and collaborative development"
    ];

    return (
        <section id="about" className="bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        About Me
                    </h2>
                </div>

                <div className="mt-8 text-lg text-gray-600 leading-relaxed space-y-4">
                    <p>
                        I&apos;m a backend and mobile developer who enjoys building scalable, efficient,
                        and user-focused software. I work with technologies across the Java and Android ecosystems,
                        and I also use React to develop full-stack solutions when needed. I value clean architecture,
                        reliable systems, and development practices that lead to long-term maintainability.
                    </p>
                    <p>
                        I enjoy working in teams because diverse ideas lead to better,
                        more scalable software and deliver greater value to users.
                        I believe technology is constantly evolving, and it’s important to adapt,
                        learn, and improve while staying objective and critical in our decisions.
                        I&apos;m someone who likes to understand problems deeply, propose solutions thoughtfully,
                        and build software that people can trust.
                    </p>
                </div>

                <div className="mt-12">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-600">
                        {quickFacts.map((fact, index) => (
                            <li key={index} className="flex items-start">
                                <svg className="flex-shrink-0 h-6 w-6 text-indigo-500 mr-2 mt-1"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"/>
                                </svg>
                                <span>{fact}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;