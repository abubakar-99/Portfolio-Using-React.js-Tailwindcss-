import React, { useState } from "react";
import {
  ListChecks,
  Plus,
  TrendingUp,
  Wallet,
  Store,
  Share2,
  Bell,
  Search,
  Tag,
  Mic,
  Building2,
  Tags,
  Check,
  LineChart,
} from "lucide-react";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      number: 1,
      title: "Create Lists",
      icon: <ListChecks className="w-5 h-5" />,
      description: "Create custom shopping lists for different stores or occasions",
      features: [
        { icon: <Store className="w-5 h-5" />, title: "Organize by store" },
        { icon: <Share2 className="w-5 h-5" />, title: "Share with family" },
        { icon: <Bell className="w-5 h-5" />, title: "Set reminders" },
      ],
    },
    {
      number: 2,
      title: "Add Items",
      icon: <Plus className="w-5 h-5" />,
      description: "Quickly add items with our smart autocomplete feature",
      features: [
        { icon: <Search className="w-5 h-5" />, title: "Smart search" },
        { icon: <Tag className="w-5 h-5" />, title: "Auto-categorize" },
        { icon: <Mic className="w-5 h-5" />, title: "Voice input" },
      ],
    },
    {
      number: 3,
      title: "Track Prices",
      icon: <TrendingUp className="w-5 h-5" />,
      description: "Monitor price changes and find the best deals",
      features: [
        { icon: <Bell className="w-5 h-5" />, title: "Price alerts" },
        { icon: <Building2 className="w-5 h-5" />, title: "Compare stores" },
        { icon: <Tags className="w-5 h-5" />, title: "Deal finder" },
      ],
    },
    {
      number: 4,
      title: "Save Money",
      icon: <Wallet className="w-5 h-5" />,
      description: "Save up to 30% on your grocery bills",
      features: [
        { icon: <Check className="w-5 h-5" />, title: "Track savings" },
        { icon: <LineChart className="w-5 h-5" />, title: "Spending insights" },
        { icon: <Bell className="w-5 h-5" />, title: "Budget alerts" },
      ],
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50 bg-fixed bg-cover" style={{ backgroundSize: 'cover' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How GrocerySave Works</h2>
        <p className="text-gray-600 text-center mb-12">Get started in minutes and save hours every week</p>
        <div className="flex flex-row justify-evenly gap-10">
          {/* Steps Navigation */}
          <div className="space-y-4 flex-shrink-0 w-1/3">
            {steps.map((step) => (
              <button
                key={step.number}
                className={`w-full text-left flex items-center gap-4 p-6 rounded-lg transition-all shadow-sm ${
                  activeStep === step.number
                    ? "bg-emerald-50 border-l-4 border-emerald-600"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => setActiveStep(step.number)}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    activeStep === step.number
                      ? "bg-emerald-100 text-emerald-600"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {step.icon}
                </div>
                <div>
                  <div className="text-sm text-gray-500">Step {step.number}</div>
                  <div className="font-semibold">{step.title}</div>
                </div>
                {activeStep === step.number && <div className="ml-auto text-emerald-600">&rarr;</div>}
              </button>
            ))}
          </div>

          {/* Step Details */}
          <div className="bg-white rounded-xl shadow-sm p-12 w-2/3">
            {steps.map((step) => (
              <div key={step.number} className={activeStep === step.number ? "block" : "hidden"}>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600 mb-8">{step.description}</p>

                <div className="grid grid-cols-3 gap-8">
                  {step.features.map((feature, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mx-auto mb-2">
                        {feature.icon}
                      </div>
                      <div className="text-sm font-medium text-gray-700">{feature.title}</div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between mt-16"> {/* Added margin-top to move buttons lower */}
                  <button
                    onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
                    className={`text-gray-500 hover:text-gray-700 ${step.number === 1 ? "invisible" : ""}`}
                  >
                    Previous Step
                  </button>
                  <button
                    onClick={() => setActiveStep((prev) => Math.min(4, prev + 1))}
                    className={`bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 ${
                      step.number === 4 ? "invisible" : ""
                    }`}
                  >
                    Next Step
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
