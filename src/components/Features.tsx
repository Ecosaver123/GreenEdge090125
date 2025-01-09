import React from 'react';
import { LineChart, Shield, Cloud, Zap } from 'lucide-react';

export function Features() {
  return (
    <section id="features" className="py-20 bg-[#f8f3e7]">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Features, Benefits, Impact and Contact
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Discover how our platform helps you save energy and reduce your carbon footprint
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          <FeatureItem
            icon={<LineChart className="h-8 w-8 text-emerald-600" />}
            title="Smart Analytics"
            description="Track and analyze your environmental impact with detailed insights and recommendations."
          />
          <FeatureItem
            icon={<Shield className="h-8 w-8 text-emerald-600" />}
            title="Secure Platform"
            description="Your data is protected with enterprise-grade security while helping the environment."
          />
          <FeatureItem
            icon={<Cloud className="h-8 w-8 text-emerald-600" />}
            title="Cloud Integration"
            description="Access your eco-savings data anywhere, anytime with seamless cloud integration."
          />
          <FeatureItem
            icon={<Zap className="h-8 w-8 text-emerald-600" />}
            title="Real-time Monitoring"
            description="Get instant updates and alerts about your energy consumption and savings."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex gap-6">
      <div className="bg-sage-50 p-3 h-fit rounded-lg">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}