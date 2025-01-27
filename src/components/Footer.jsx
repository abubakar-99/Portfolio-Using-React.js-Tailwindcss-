import React from "react"

export default function Footer() {
  return (
    <section className="bg-emerald-600 py-20 px-4 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Start saving on groceries today</h2>
        <p className="mb-8 text-emerald-50 text-lg">
          Join thousands of smart shoppers who are already saving time and money with GrocerySave. No credit card
          required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-emerald-600 px-6 py-3 rounded-md hover:bg-emerald-50 text-lg font-semibold">
            Sign Up Now - It's Free
          </button>
          <button className="border-2 border-white text-white px-6 py-3 rounded-md hover:bg-emerald-700 text-lg font-semibold">
            Schedule a Demo
          </button>
        </div>
      </div>
    </section>
  )
}

