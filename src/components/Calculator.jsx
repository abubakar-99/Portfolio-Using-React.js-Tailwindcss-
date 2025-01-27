import React from "react"

export default function Calculator() {
  return (
    <section className="py-20 px-4 bg-emerald-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Calculate Your Savings</h2>
        <p className="text-gray-600 text-center mb-12">See how much you could save with GrocerySave</p>
        <div className="bg-white p-8 rounded-xl shadow-sm transform scale-95">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Monthly Grocery Spend</h3>
              <div className="text-4xl font-bold text-emerald-600">$600</div>
              <p className="text-gray-600">Average household spend</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Potential Savings</h3>
              <div className="text-4xl font-bold text-emerald-600">$180</div>
              <p className="text-gray-600">30% average savings</p>
            </div>
          </div>
          <button className="w-full bg-emerald-600 text-white py-3 rounded-md hover:bg-emerald-700 text-lg font-medium">
            Start Saving Today
          </button>
        </div>
      </div>
    </section>
  )
}
