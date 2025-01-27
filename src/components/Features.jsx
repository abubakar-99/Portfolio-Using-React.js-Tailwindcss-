import { CheckCircle, Clock, Smartphone } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: CheckCircle,
      title: 'Smart Lists',
      description:
        'Create and manage multiple shopping lists with smart categorization and priority settings.',
    },
    {
      icon: Clock,
      title: 'Price History',
      description:
        'Track price changes over time and get notified when your favorite items go on sale.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Ready',
      description:
        'Access your lists anywhere with our mobile-friendly design and offline support.',
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4" style={{ backgroundColor: '#ECFDF5' }}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Everything you need to shop smarter
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          Simple yet powerful features to make grocery shopping a breeze
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
