"use client";
import React, { useState } from "react";

const experiences = [
	{
		title: "Mobile Development Instructor",
		org: "Central American University José Simeón Cañas (UCA)",
		period: "March 2025 – July 2025",
		label: "Teaching Role",
		desc: "Taught native Android development focusing on MVVM architecture, Retrofit, Room, Firebase, and best practices for clean and maintainable code. Designed and guided hands-on labs and projects, helping students build functional mobile applications and understand real-world development workflows.",
		bullets: [
			"Android development with MVVM, Retrofit, and Room",
			"Firebase integration and clean architecture practices",
			"Hands-on labs and real-world project guidance",
		],
	},
	{
		title: "IoT Course Instructor",
		org: "Central American University José Simeón Cañas (UCA)",
		period: "January 2025",
		label: "Academic Experience",
		desc: "Delivered an introductory IoT course covering sensors, microcontrollers, connectivity, and real-world use cases. Helped students understand how IoT solutions can be applied to solve practical problems and improve everyday systems.",
		bullets: [
			"Intro to sensors and microcontrollers",
			"Connectivity and communication protocols",
			"Practical IoT use cases and system design",
		],
	},
	{
		title: "Web Developer (Social Service)",
		org: "CRAI – UCA Library",
		period: "March 2024",
		label: "Social Service",
		desc: "Redesigned the university library website with a focus on usability, accessibility, and visual clarity. Improved the user experience through modern UI practices and implemented the solution using WordPress.",
		bullets: [
			"UX improvements focused on accessibility and clarity",
			"Modern UI practices and component-driven layouts",
			"Implemented site using WordPress with accessible templates",
		],
	},
];

const ExperienceSection: React.FC = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const toggle = (index: number) => {
		setActiveIndex((prev) => (prev === index ? null : index));
	};

	return (
		<section id="experience">
			<div className="max-w-5xl mx-auto px-4 py-24">
				<header className="mb-10 text-center">
					<h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
						Experience
					</h2>
					<p className="mt-4 text-gray-600 max-w-2xl mx-auto">
						Professional and academic experience where I’ve applied my technical
						skills in real-world scenarios.
					</p>
				</header>

				{/* Row of projects */}
				<div className="flex flex-wrap justify-center gap-6 mb-8">
					{experiences.map((exp, i) => (
						<button
							key={exp.title}
							type="button"
							onClick={() => toggle(i)}
							aria-pressed={activeIndex === i}
							className={`w-full sm:w-64 md:w-72 text-left p-5 rounded-lg transition transform duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-200 ${
								activeIndex === i
									? "bg-white border border-gray-200 shadow-lg scale-105"
									: "bg-white border border-gray-100 shadow-sm hover:shadow-md"
							}`}
						>

							<div className="flex flex-col items-center text-center">
								<h3 className="text-lg md:text-xl font-bold text-gray-900">
									{exp.title}
								</h3>


								<span className="mt-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
									{exp.label}
								</span>

								<p className="text-sm md:text-base text-gray-700 mt-3">
									{exp.org}
								</p>
								<p className="text-sm text-gray-500 mt-1">
									{exp.period}
								</p>
							</div>
						</button>
					))}
				</div>


				<div className="mx-auto max-w-3xl">
					<div
						className={`transition-all duration-250 ease-in-out overflow-hidden ${
							activeIndex !== null ? "max-h-[900px] opacity-100" : "max-h-0 opacity-0"
						}`}
						aria-live="polite"
					>
						{activeIndex !== null && (
							<div className="bg-white border border-gray-100 shadow-lg rounded-lg p-8">

								<h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
									{experiences[activeIndex].title}
								</h3>
								<p className="text-sm text-gray-700 mt-2 text-center">
									{experiences[activeIndex].org}
								</p>
								<p className="text-sm text-gray-500 mt-1 text-center">
									{experiences[activeIndex].period}
								</p>

								<div className="mt-6 text-gray-700 space-y-4">
									<p>{experiences[activeIndex].desc}</p>

									<ul className="mt-1 ml-5 list-disc text-gray-700 space-y-2">
										{experiences[activeIndex].bullets.map((b, idx) => (
											<li key={idx}>{b}</li>
										))}
									</ul>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ExperienceSection;

