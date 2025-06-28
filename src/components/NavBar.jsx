import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { navLinks } from '../constants/index.js';

const Navbar = () => {
  const navRef = useRef(null);

  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: navRef.current,
        start: 'top top',
        end: '+=100',
        scrub: true,
      }
    }).to(navRef.current, {
      backgroundColor: '#00000050',
      backdropFilter: 'blur(10px)',
      duration: 1,
      ease: 'power1.inOut'
    });
  }, []);

  return (
    <nav ref={navRef} className="fixed w-full top-0 z-50 bg-transparent transition-all duration-300">
      <div className="flex justify-between items-center px-4 py-2">
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="logo" className="h-8" />
          <p className="text-white font-bold">Velvet Pour</p>
        </a>

        <ul className="flex gap-4">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="text-white hover:underline">{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
