// components
import {Navbar, Footer} from "@/components";

// sections
import Skills from "./skills";
import Projects from "./projects";
import Resume from "./resume";
import Testimonial from "./testimonial";
import PopularClients from "./popular-clients";
import ContactForm from "./contact-form";
import HeroSection from "@/app/Hero";
import AboutSection from "@/app/aboutMe";
import SkillsSection from "@/app/newSkills";

export default function Portfolio() {
    return (
        <>
            <Navbar/>
            <HeroSection/>
            <AboutSection/>
            <SkillsSection/>
            <Projects/>
            <Resume/>
            <Testimonial/>
            <PopularClients/>
            <ContactForm/>
            <Footer/>
        </>
    );
}
