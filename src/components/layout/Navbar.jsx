import React, { useState, useEffect } from "react";
import sign from "../../assets/signing.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "About Me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact", highlight: true },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
      isScrolled ? 'bg-[#1a1a1a]/95 backdrop-blur-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#head" className="flex-shrink-0">
            <img 
              src={sign} 
              alt="Diaa Hassan" 
              className="h-10 sm:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity" 
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-3 lg:px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 whitespace-nowrap ${
                  item.highlight 
                    ? 'bg-[#C4C4C4] text-[#1a1a1a] hover:bg-[#8B8B8B]' 
                    : 'text-[#909090] hover:text-[#C4C4C4] hover:bg-[#C4C4C4]/10'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#909090] hover:text-[#C4C4C4] hover:bg-[#C4C4C4]/10 transition-colors"
            aria-label="Toggle menu"
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-[#1a1a1a]/95 backdrop-blur-sm border border-[#8B8B8B]/20 rounded-lg px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-all ${
                  item.highlight
                    ? 'bg-[#C4C4C4] text-[#1a1a1a] hover:bg-[#8B8B8B]'
                    : 'text-[#909090] hover:text-[#C4C4C4] hover:bg-[#C4C4C4]/10'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;