import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="flex justify-between px-8 py-6 bg-primary">
      <a className="font-bold text-white text-4xl" href="#"><h1>PK</h1></a>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex space-x-5 nav-li text-white">
          <li><a href="#/">Home</a></li>
          <li><a href="#about">About</a></li> {/* Link to the About section */}
          <li><a href="#projects">Projects</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#contact">phone</a></li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      {toggleMenu && (
        <nav className="block md:hidden">
          <ul onClick={() => setToggleMenu(false)} className="flex menu flex-col text-black mobile-nav">
            <li><a href="#/">Home</a></li>
            <li><a href="#about">About</a></li> {/* Link to the About section */}
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      )}

      {/* Mobile Menu Button */}
      <button onClick={() => setToggleMenu(!toggleMenu)} className="text-black md:hidden">
        <Bars3Icon className=' menu-btn 
         h-5' />
      </button>
      
      <div className='flex hd-btns space-x-5'>
        <button><a href='https://wa.me/6379517451' target='_blank' rel="noopener noreferrer">Message</a></button>
        <button>Contact</button>
      </div>
    </header>
  );
}

