"use client";
import Link from "next/link";
import { Menu, X, House, Hammer, BookOpen, Music, Linkedin, Github, Instagram } from "lucide-react";
import { useState } from "react";

// Icon mapping configuration
const iconMap = [
  {
    id: 'home',
    icon: House,
    href: '/',
    label: 'Home',
    external: false,
  },
  {
    id: 'projects',
    icon: Hammer,
    href: '#',
    label: 'Projects',
    external: false,
  },
  {
    id: 'blog',
    icon: BookOpen,
    href: '#',
    label: 'Blog',
    external: false,
  },
  {
    id: 'music',
    icon: Music,
    href: '#',
    label: 'Music',
    external: false,
  },
  {
    id: 'linkedin',
    icon: Linkedin,
    href: 'https://linkedin.com/in/sathya-sriram',
    label: 'LinkedIn',
    external: true,
  },
  {
    id: 'github',
    icon: Github,
    href: 'https://github.com/sathyasriram777',
    label: 'GitHub',
    external: true,
  },
  {
    id: 'instagram',
    icon: Instagram,
    href: 'https://instagram.com/sathyasriram7',
    label: 'Instagram',
    external: true,
  }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="flex items-center justify-between mb-13">
      {/* Desktop Navigation Icons */}
      <div className="hidden lg:flex space-x-4">
        {iconMap.map(({ id, icon: Icon, href, label, external }) => (
          <Link
            key={id}
            href={href}
            className="text-foreground hover:text-foreground transition-colors p-2"
            aria-label={label}
            {...(external && { target: "_blank", rel: "noopener noreferrer" })}
          >
            <Icon className="size-6 lg:size-8 transition-transform duration-150 ease-out hover:scale-150 origin-center" />
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden p-2 text-foreground hover:bg-accent rounded-lg transition-colors"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} fixed inset-0 z-50 bg-background`}>
        <div className="noise" />
        
        {/* Close Button - Upper Left */}
        <button
          onClick={closeMenu}
          className="absolute top-4 left-4 p-2 text-foreground hover:bg-accent rounded-lg transition-colors z-10"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
        
        {/* Menu Items - Centered */}
        <div className="flex items-center justify-center h-full">
          <div className="space-y-8">
            {iconMap.map(({ id, icon: Icon, href, label, external }) => (
              <Link
                key={id}
                href={href}
                className="text-foreground hover:text-foreground transition-colors p-4 block"
                aria-label={label}
                onClick={closeMenu}
                {...(external && { target: "_blank", rel: "noopener noreferrer" })}
              >
                <Icon className="size-6 transition-transform duration-150 ease-out hover:scale-150 origin-center" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
