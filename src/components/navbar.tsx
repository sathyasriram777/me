"use client";
import Link from "next/link";
import { Menu, X, House, Hammer, BookOpen, Music, FileText, Linkedin, Github, Instagram } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    id: 'resume',
    icon: FileText,
    href: '/resume',
    label: 'Resume',
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

  // Animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.8
    },
    open: {
      opacity: 1,
      scale: 1
    }
  };

  const iconVariants = {
    closed: {
      opacity: 0,
      y: 20
    },
    open: {
      opacity: 1,
      y: 0
    }
  };

  const staggerContainer = {
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
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
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-50 bg-background"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="noise" />
            
            {/* Close Button - Upper Left */}
            <motion.button
              onClick={closeMenu}
              className="absolute top-4 left-4 p-2 text-foreground hover:bg-accent rounded-lg transition-colors z-10"
              aria-label="Close menu"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ delay: 0.2 }}
            >
              <X size={24} />
            </motion.button>
            
            {/* Menu Items - Centered */}
            <div className="flex items-center justify-center h-full">
              <motion.div
                className="space-y-4"
                variants={staggerContainer}
                initial="closed"
                animate="open"
                exit="closed"
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {iconMap.map(({ id, icon: Icon, href, label, external }) => (
                  <motion.div
                    key={id}
                    variants={iconVariants}
                  >
                    <Link
                      href={href}
                      className="text-foreground hover:text-foreground transition-colors p-4 block"
                      aria-label={label}
                      onClick={closeMenu}
                      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                    >
                      <Icon className="size-6 transition-transform duration-150 ease-out hover:scale-150 origin-center" />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
