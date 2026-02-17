import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: "fa-brands fa-github", href: "https://github.com/DiaaEldinHassan", label: "GitHub" },
    { icon: "fa-brands fa-linkedin-in", href: "https://www.linkedin.com/in/diaa-eldin-hassan-989702280/", label: "LinkedIn" },
    { icon: "fa-regular fa-envelope", href: "mailto:diaahassan777@gmail.com", label: "Email" }
  ];

  const quickLinks = [
    { name: "About Me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="w-full bg-[#1a1a1a] border-t border-[#8B8B8B]/20 relative overflow-hidden" id="contact">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#C4C4C4] rounded-full filter blur-3xl"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#8B8B8B] rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#C4C4C4]">Diaa Hassan</h3>
            <p className="text-[#909090] text-sm leading-relaxed">
              React.js developer crafting elegant and performant web experiences with modern JavaScript.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-9 h-9 bg-[#C4C4C4]/5 rounded-lg flex items-center justify-center text-[#909090] hover:text-[#C4C4C4] hover:bg-[#C4C4C4]/20 transform hover:scale-110 transition-all duration-300"
                >
                  <i className={`${link.icon} text-base`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#C4C4C4]">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#909090] hover:text-[#C4C4C4] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-[#8B8B8B] rounded-full group-hover:bg-[#C4C4C4] transition-colors"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#C4C4C4]">Contact Info</h4>
            <ul className="space-y-3 text-[#909090]">
              <li className="flex items-center gap-3">
                <i className="fa-regular fa-envelope w-5 text-[#8B8B8B]"></i>
                <a href="mailto:diaahassan777@gmail.com" className="hover:text-[#C4C4C4] transition-colors text-sm break-all">
                  diaahassan777@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-regular fa-clock w-5 text-[#8B8B8B]"></i>
                <span className="text-sm">Available for freelance</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-regular fa-compass w-5 text-[#8B8B8B]"></i>
                <span className="text-sm">Remote / Worldwide</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#C4C4C4]">Let's Work Together</h4>
            <p className="text-[#909090] text-sm">
              Have a project in mind? Let's create something amazing.
            </p>
            <a
              href="mailto:diaahassan777@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C4C4C4] text-[#1a1a1a] text-sm font-semibold rounded-full hover:bg-[#8B8B8B] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#C4C4C4]/20"
            >
              <i className="fa-regular fa-paper-plane"></i>
              <span>Hire Me</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#8B8B8B]/30 to-transparent my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-[#909090]">
          <p>© {currentYear} Diaa Hassan. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Built with <span className="text-red-500">❤️</span> using React & Tailwind
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 z-50 w-10 h-10 bg-[#C4C4C4] text-[#1a1a1a] rounded-full shadow-lg hover:bg-[#8B8B8B] transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <i className="fa-solid fa-arrow-up text-sm"></i>
      </button>
    </footer>
  );
};

export default Footer;