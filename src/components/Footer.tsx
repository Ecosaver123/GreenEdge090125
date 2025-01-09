import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#f8f3e7] text-[#2F8F83]">
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <span className="text-4xl font-bold text-[#2F8F83]">GREEN</span>
              <span className="text-4xl font-bold text-[#FFB300]">EDGE</span>
            </div>
            <p className="text-[#56756c] mb-6 font-['League_Spartan']">
              Empowering households to save energy and grow wealth through smart energy management.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Facebook className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Instagram className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 font-['League_Spartan'] text-[#2F8F83]">Quick Links</h3>
            <ul className="space-y-4 font-['League_Spartan']">
              <li>
                <Link to="/about" className="text-[#56756c] hover:text-[#FFB300] transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/features" className="text-[#56756c] hover:text-[#FFB300] transition-colors">Features</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-[#56756c] hover:text-[#FFB300] transition-colors">Pricing</Link>
              </li>
              <li>
                <Link to="/blog" className="text-[#56756c] hover:text-[#FFB300] transition-colors">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 font-['League_Spartan'] text-[#2F8F83]">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#FFB300]" />
                <span className="font-['League_Spartan'] text-[#56756c]">support@greenedge.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#FFB300]" />
                <span className="font-['League_Spartan'] text-[#56756c]">+91 (800) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#FFB300]" />
                <span className="font-['League_Spartan'] text-[#56756c]">Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6 font-['League_Spartan'] text-[#2F8F83]">Newsletter</h3>
            <p className="text-[#56756c] mb-4 font-['League_Spartan']">
              Subscribe to our newsletter for tips and updates.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-lg bg-white text-[#2F8F83] placeholder-gray-400 border border-[#2F8F83] focus:outline-none focus:ring-2 focus:ring-[#FFB300] font-['League_Spartan']"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-[#FFB300] text-[#2F8F83] rounded-lg font-bold hover:bg-[#ffc107] transition-colors font-['League_Spartan']"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#2F8F83]/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#56756c] font-['League_Spartan']">
              © 2024 GreenEdge. All rights reserved.
            </p>
            <div className="flex space-x-6 font-['League_Spartan']">
              <Link to="/privacy" className="text-[#56756c] hover:text-[#FFB300] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-[#56756c] hover:text-[#FFB300] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      className="w-10 h-10 rounded-full bg-[#2F8F83] flex items-center justify-center text-white hover:bg-[#FFB300] transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}