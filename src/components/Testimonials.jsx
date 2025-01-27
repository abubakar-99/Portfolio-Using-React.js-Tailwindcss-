import React from "react"

export default function Testimonials() {
  const testimonials = [
    {
      initial: "S",
      name: "Sarah Johnson",
      role: "Busy Mom",
      quote: "GrocerySave has completely transformed how I shop for my family. I save both time and money every week!",
    },
    {
      initial: "M",
      name: "Mike Chen",
      role: "Budget Conscious",
      quote: "The price tracking feature is amazing. I've saved over $200 in the past month alone.",
    },
    {
      initial: "E",
      name: "Emily Davis",
      role: "Health Enthusiast",
      quote: "I love how I can organize my shopping lists by category. Makes healthy shopping so much easier!",
    },
  ]

  return (
    <section className="py-20 px-4 bg-[#ECFDF5]"> {/* Set the background color here */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Loved by Shoppers</h2>
        <p className="text-gray-600 text-center mb-12">See what our users have to say about GrocerySave</p>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-emerald-50 p-6 rounded-xl shadow-sm"> {/* Set the emerald 50 background here */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-semibold">
                  {testimonial.initial}
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
