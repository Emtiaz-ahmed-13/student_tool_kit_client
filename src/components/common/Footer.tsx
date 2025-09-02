import React from "react";

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Subjects", href: "#subjects" },
    { label: "Pricing", href: "#pricing" },
    { label: "Changelog", href: "#" },
  ],
  subjects: [
    { label: "Physics", href: "#physics" },
    { label: "Mathematics", href: "#mathematics" },
    { label: "Computer Science", href: "#computer-science" },
    { label: "Chess", href: "#chess" },
  ],
  support: [
    { label: "Documentation", href: "#" },
    { label: "Help Center", href: "#" },
    { label: "Contact Us", href: "#contact" },
    { label: "Status", href: "#" },
  ],
  company: [
    { label: "About", href: "#about" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
};

const socialLinks = [
  { label: "Twitter", href: "#", icon: "🐦" },
  { label: "GitHub", href: "#", icon: "⚡" },
  { label: "LinkedIn", href: "#", icon: "💼" },
  { label: "Discord", href: "#", icon: "💬" },
];

export const Footer: React.FC = () => {
  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 animate-fade-in">
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-2xl animate-rotate-in">🎓</div>
                <span className="text-xl font-bold">Student Toolkit</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-sm">
                Your comprehensive learning companion for Physics, Mathematics,
                Computer Science, and Chess. Empowering students to excel in
                their academic journey.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-2xl hover:scale-110 transition-transform duration-200 hover-lift"
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Product Links */}
            <div className="animate-fade-in-up">
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
                Product
              </h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors duration-200 hover-lift"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subjects Links */}
            <div className="animate-fade-in-up delay-100">
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
                Subjects
              </h3>
              <ul className="space-y-3">
                {footerLinks.subjects.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors duration-200 hover-lift"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div className="animate-fade-in-up delay-200">
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
                Support
              </h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors duration-200 hover-lift"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div className="animate-fade-in-up delay-300">
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors duration-200 hover-lift"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 py-8 animate-fade-in">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Stay updated</h3>
              <p className="text-gray-400">
                Get the latest features and study tips delivered to your inbox.
              </p>
            </div>
            <div className="flex space-x-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 hover-lift whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6 animate-fade-in">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Student Toolkit. All rights reserved. Built with ❤️ by
              EMTIAZ
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a
                href="#"
                className="hover:text-white transition-colors hover-lift"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors hover-lift"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors hover-lift"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
