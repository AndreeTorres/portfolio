import React from 'react';
import {FiServer, FiSmartphone, FiCode, FiDatabase, FiActivity, FiUsers} from 'react-icons/fi';

const skills = [
    {
        icon: <FiServer/>,
        title: "Backend Development",
        description: "I develop RESTful APIs and backend services using Java, Spring Boot, and PostgreSQL, focusing on clean architecture, security, and scalability."
    },
    {
        icon: <FiSmartphone/>,
        title: "Mobile App Development",
        description: "I build native Android apps with Kotlin/Java, MVVM, Retrofit, and Room, creating intuitive and reliable mobile experiences."
    },
    {
        icon: <FiCode/>,
        title: "Full-Stack Web Applications",
        description: "I use React, TailwindCSS, and modern tooling to build complete web applications from the interface to the database."
    },
    {
        icon: <FiDatabase/>,
        title: "APIs & Databases",
        description: "I design APIs and model relational databases, ensuring data consistency, performance, and scalable integrations."
    },
    {
        icon: <FiActivity/>,
        title: "Performance & Reliability",
        description: "I focus on performance, efficient queries, responsive interfaces, and robust error handling to keep applications fast and stable."
    },
    {
        icon: <FiUsers/>,
        title: "Teaching & Collaboration",
        description: "As an instructor of Mobile Development and IoT, I’ve learned to communicate clearly, give constructive feedback, and collaborate effectively."
    }
];

const SkillsSection = () => {
    return (
        <section id="skills" className="bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 py-20">
                <div className="text-center">
                    <p className="text-3xl font-semibold text-indigo-600 uppercase tracking-widest">
                        MY SKILLS
                    </p>
                </div>

                <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
                    {skills.map((skill) => (
                        <div key={skill.title}
                             className="bg-white shadow-md rounded-xl p-8 text-center space-y-3 flex flex-col">
                            <div
                                className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 mx-auto text-gray-700 text-2xl">
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 pt-2">{skill.title}</h3>
                            <p className="text-gray-600">{skill.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;