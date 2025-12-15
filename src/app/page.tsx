// components
import {Navbar, Footer} from "@/components";

import Projects from "./projects";
import HeroSection from "@/app/Hero";
import AboutSection from "@/app/aboutMe";
import SkillsSection from "@/app/newSkills";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "../../components/EducationSection";
import ContactSection from "../../components/ContactSection";

export default function Portfolio() {
    return (
        <>
            <Navbar/>
            <HeroSection/>
            <AboutSection/>
            <SkillsSection/>
            <Projects/>
            <ExperienceSection/>
            <EducationSection/>
            <ContactSection/>
            <Footer/>
        </>
    );
}
