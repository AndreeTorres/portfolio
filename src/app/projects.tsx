"use client";

import ProjectCard from "@/components/project-card";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
	{
		img: "/image/blog-1.svg",
		title: "AutoHub – Real-Time Vehicle Monitoring System",
		desc: "A real-time vehicle monitoring system that uses an ESP32 with OBD2, DHT11, and ultrasonic sensors to collect temperature, RPM, speed, internal conditions, and obstacle proximity. Data is transmitted via MQTT and displayed on a custom React dashboard for remote visualization.",
	},
	{
		img: "/image/blog2.svg",
		title: "Restaurant Management System",
		desc: "Full restaurant management platform with authentication, role-based access, and data persistence using Spring Boot and PostgreSQL.",
	},
	{
		img: "/image/blog3.svg",
		title: "Restaurant Menu App (Android)",
		desc: "Native Android app that allows restaurants to manage and update their digital menus in real time using Firebase.",
	},
	{
		img: "/image/blog2.svg",
		title: "UCA Library Website Redesign (CRAI)",
		desc: "A full redesign of the university library website, focusing on improved accessibility, user experience, and modern UI components using WordPress.",
	},
];

export function Projects() {
	return (
		<section className="py-28 px-8">
			<div className="container mx-auto mb-20 text-center">
				<Typography as="h2" variant="h2" color="blue-gray" className="mb-4">
					My Projects
				</Typography>
				<Typography
					as="p"
					variant="lead"
					className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
				>
					Here are some of the backend, mobile, and full-stack projects I&apos;ve
					worked on recently.
				</Typography>
			</div>
			<div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 items-stretch">
				{PROJECTS.map((props, idx) => (
					<div key={idx} className="h-full">
						<ProjectCard {...props} />
					</div>
				))}
			</div>
		</section>
	);
}

export default Projects;
