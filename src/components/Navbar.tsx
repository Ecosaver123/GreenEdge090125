import React from 'react';
import { CreditCard, LayoutDashboard } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="bg-[#2F8F83] py-4 px-6 shadow-sm">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex items-center">
            <div className="flex items-center">
              <span className="text-4xl font-bold text-white">GREEN</span>
              <span className="text-4xl font-bold text-[#FFB300]">EDGE</span>
            </div>
          </div>
        </Link>
        
        <div className="hidden md:flex flex-1 justify-center space-x-8">
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#benefits">Benefits</NavLink>
          <NavLink href="#impact">Impact</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
        
        <div className="flex items-center space-x-4">
          <button 
            className="flex items-center gap-2 px-4 py-3 bg-[#FFC107] text-[#000000] rounded-lg hover:bg-[#FFB300] transition-colors font-bold"
            onClick={() => navigate('/dashboard')}
          >
            <LayoutDashboard className="h-4 w-4" />
            Dashboard
          </button>
          <button 
            className="flex items-center gap-2 px-4 py-3 bg-[#FFC107] text-[#000000] rounded-lg hover:bg-[#FFB300] transition-colors font-bold"
            onClick={() => window.open('https://paytm.com/electricity-bill-payment', '_blank')}
          >
            <CreditCard className="h-4 w-4" />
            Pay Bill
          </button>
          <button 
            onClick={() => navigate('/profile')}
            className="px-8 py-3 bg-[#FFC107] text-[#000000] rounded-lg hover:bg-[#FFB300] transition-colors font-bold"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-gray-300 hover:text-[#FFC107] transition-colors">
      {children}
    </a>
  );
}