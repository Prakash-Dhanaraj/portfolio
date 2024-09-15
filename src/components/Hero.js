import React from 'react';
import Heroimg from '../assets/hero.png';
import { AiOutlineLinkedin, AiOutlineBehance, AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineGithub } from "react-icons/ai";

export default function Hero() {
    const config = {
        subtitle: 'Front end and UI/UX developer',
        social: {
            linkedin: 'https://www.linkedin.com/in/prakash-dhanaraj',
            behance: 'https://www.behance.net/prakashd4',
            instagram: 'https://www.instagram.com/designbyprakash',
            whatsapp: 'https://wa.me/6379517451',
            github: 'https://github.com/Prakash-Dhanaraj' 
        }
    };

    return (
        <section id="hero" className='flex flex-col md:flex-row justify-center px-5 py-20 bg-secondary'>
            <div className='w-1/2 py-10 space-y-2'>
                <h1 className='md:w-1/2 text-5xl font-bold role font-hero-font space-y-20'>Hi! <br />I'm <span> Prakash.</span></h1>
                <p className='text-1xl font-bold'>{config.subtitle}</p>
                <p className='font-semibold text-1xl text-black'>I am Prakash, a passionate Front end and UI/UX web developer who sculpts digital experiences with creativity and precision, transforming visions into enthralling user journeys.</p>
                
                <div className="flex md:flex-row align-center py-6 space-x-5 Hero-btns">
                    <a href={config.social.whatsapp} target='_blank' rel="noopener noreferrer"><button>Hire me</button></a>
                    <a href='#projects'><button>Projects</button></a>  
                </div>
                
                <div className='social-media py-20'>
                    <h1 className="font-hero-font font-light text-2xl">Follow:</h1>
                    <a href={config.social.linkedin} target='_blank' rel="noopener noreferrer"><AiOutlineLinkedin /></a>
                    <a href={config.social.github} target='_blank' rel="noopener noreferrer"><AiOutlineGithub /></a>
                    <a href={config.social.behance} target='_blank' rel="noopener noreferrer"><AiOutlineBehance /></a>
                    <a href={config.social.instagram} target='_blank' rel="noopener noreferrer"><AiOutlineInstagram /></a>
                    <a href={config.social.whatsapp} target='_blank' rel="noopener noreferrer"><AiOutlineWhatsApp /></a>
                </div>
            </div>

            <img className='md:w-1/3' src={Heroimg} alt="Hero"/>
        </section>
    );
}
