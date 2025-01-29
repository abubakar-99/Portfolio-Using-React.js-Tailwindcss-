import { motion } from "framer-motion"
import { Laptop, Code, Smartphone } from "lucide-react"

const Services = () => {
  const services = [
    {
      icon: <Laptop className="w-12 h-12 text-emerald-600" />,
      title: "Web Design",
      description:
        "Beautiful and elegant designs with interfaces that are intuitive, efficient and pleasant to use for the user.",
    },
    {
      icon: <Code className="w-12 h-12 text-emerald-600" />,
      title: "Development",
      description:
        "Custom web development tailored to your specifications, designed to provide a flawless user experience.",
    },
    {
      icon: <Smartphone className="w-12 h-12 text-emerald-600" />,
      title: "Mobile App",
      description: "Design and transform website projects into mobile apps to provide a seamless user experience.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12"
        >
          Services<span className="text-emerald-600">.</span>
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 rounded-lg border border-emerald-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-gray-800"
            >
              <div className="mb-4 transform hover:scale-110 transition-transform duration-200">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services

