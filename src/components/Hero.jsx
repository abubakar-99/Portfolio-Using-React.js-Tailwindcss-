import { Star, Users, Shield } from "lucide-react"

export default function Hero() {
  return (
    <section className="pt-20 pb-16 px-4 md:pt-24 lg:pt-32 bg-emerald-50">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          Smart Grocery Shopping, <span className="text-emerald-600">Made Simple</span>
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-8">
          Organize your grocery lists, track prices, and save money with our intelligent shopping assistant. Join over
          50,000 smart shoppers saving time and money every day.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-emerald-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-emerald-700 transition-colors">
            Get Started Free
          </button>
          <button className="bg-white text-gray-800 px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-50 transition-colors">
            Watch Demo
          </button>
        </div>
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-600">
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            <span className="font-medium">4.9/5 rating</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-emerald-600" />
            <span className="font-medium">50K+ users</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-emerald-600" />
            <span className="font-medium">Secure & Private</span>
          </div>
        </div>
      </div>
    </section>
  )
}

