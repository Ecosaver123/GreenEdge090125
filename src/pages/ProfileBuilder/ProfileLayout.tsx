import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function ProfileLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-50 to-white py-12">
      <div className="max-w-[1600px] mx-auto px-8">
        <Link to="/" className="flex items-center text-emerald-600 mb-8 hover:text-emerald-700">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </Link>
        
        <div className="bg-white rounded-xl shadow-sm p-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
}