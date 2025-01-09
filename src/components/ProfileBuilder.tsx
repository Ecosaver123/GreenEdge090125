import React, { useState } from 'react';
import { ArrowLeft, User, Home, Car, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ProfileBuilder() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    householdSize: '',
    transportationType: '',
    energyUsage: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-50 to-white py-8">
      <div className="max-w-2xl mx-auto px-6">
        <Link to="/" className="flex items-center text-emerald-600 mb-8 hover:text-emerald-700">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </Link>
        
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Build Your Eco Profile</h1>
            <p className="text-gray-600">Step {step} of 4</p>
            <div className="w-full bg-gray-200 h-2 rounded-full mt-4">
              <div 
                className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>

          {step === 1 && (
            <StepContent
              icon={<User className="h-6 w-6" />}
              title="Personal Information"
              description="Let's start with your basic information"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </StepContent>
          )}

          {step === 2 && (
            <StepContent
              icon={<Home className="h-6 w-6" />}
              title="Household Details"
              description="Tell us about your living situation"
            >
              <select
                name="householdSize"
                value={formData.householdSize}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="">Select household size</option>
                <option value="1">1 person</option>
                <option value="2">2 people</option>
                <option value="3">3 people</option>
                <option value="4+">4+ people</option>
              </select>
            </StepContent>
          )}

          {step === 3 && (
            <StepContent
              icon={<Car className="h-6 w-6" />}
              title="Transportation"
              description="How do you usually get around?"
            >
              <select
                name="transportationType"
                value={formData.transportationType}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="">Select primary transportation</option>
                <option value="car">Car</option>
                <option value="publicTransport">Public Transport</option>
                <option value="bicycle">Bicycle</option>
                <option value="walking">Walking</option>
              </select>
            </StepContent>
          )}

          {step === 4 && (
            <StepContent
              icon={<Lightbulb className="h-6 w-6" />}
              title="Energy Usage"
              description="What's your average monthly energy consumption?"
            >
              <input
                type="text"
                name="energyUsage"
                placeholder="Average monthly kWh"
                value={formData.energyUsage}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </StepContent>
          )}

          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button
                onClick={prevStep}
                className="px-6 py-2 border-2 border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors"
              >
                Previous
              </button>
            )}
            <div className="ml-auto">
              {step < 4 ? (
                <button
                  onClick={nextStep}
                  className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={() => console.log('Submit:', formData)}
                  className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  Complete Profile
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StepContent({ 
  icon, 
  title, 
  description, 
  children 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
          {icon}
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      {children}
    </div>
  );
}