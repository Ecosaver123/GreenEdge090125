import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Homeowner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    content: "GreenEdge helped me reduce my electricity bill by 30%. The investment recommendations have been a game-changer for my savings.",
    rating: 5
  },
  {
    id: 2,
    name: "Rajesh Patel",
    role: "Business Owner",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    content: "The energy-saving tips are practical and effective. I've seen significant improvements in my monthly electricity consumption.",
    rating: 5
  },
  {
    id: 3,
    name: "Anita Desai",
    role: "Apartment Resident",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    content: "What I love most is how they combine energy savings with investment growth. It's like getting double returns on your efforts.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="bg-[#f8f3e7] py-20">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-['League_Spartan'] text-6xl md:text-7xl lg:text-8xl mb-6">
            <span className="text-[#2F8F83] block leading-[1.1]">WHAT OUR</span>
            <span className="text-[#FFC107] block leading-[1.1]">USERS SAY</span>
          </h2>
          <p className="text-xl text-[#56756c] max-w-2xl mx-auto font-['League_Spartan']">
            Real stories from real users who have transformed their energy consumption and savings
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg transform hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-12 h-12 text-[#FFB300] opacity-50" />
              </div>

              {/* Rating */}
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star
                    key={index}
                    className="w-5 h-5 text-[#FFB300] fill-current"
                  />
                ))}
              </div>

              {/* Content */}
              <blockquote className="mb-6">
                <p className="text-[#56756c] text-lg font-['League_Spartan'] leading-relaxed">
                  "{testimonial.content}"
                </p>
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-['League_Spartan'] text-[#2F8F83] font-bold">
                    {testimonial.name}
                  </h4>
                  <p className="font-['League_Spartan'] text-[#56756c]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}