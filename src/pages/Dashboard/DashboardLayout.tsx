import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <Link to="/" className="flex items-center text-emerald-600 hover:text-emerald-700 mb-4">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-800">Energy Usage and Savings Dashboard</h1>
        </div>
        {children}
      </div>
    </div>
  );
}