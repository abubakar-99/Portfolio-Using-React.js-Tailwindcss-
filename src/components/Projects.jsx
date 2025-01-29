import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink } from "lucide-react"

const Projects = () => {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      title: "Bus Rental Dubai",
      type: "website",
      description:
        "A comprehensive bus rental service website for Dubai, offering various transportation solutions and tour packages.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dubai%20Rental%20Service-gvShJHsJAZK8VyMtBS2FEe5tOEvjX5.png",
      link: "https://www.busrentdubai.ae/",
      technologies: ["Web Dev"],
    },
    {
      title: "One Homes",
      type: "website",
      description: "Luxury real estate platform showcasing premium properties and developments.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/one%20homes-9RnIY3NiyfOk8Gl7M5RNADUD5ptdud.png",
      link: "https://onehomes.com/",
      technologies: ["Web Dev"],
    },
    {
      title: "Travel & Tours",
      type: "website",
      description: "Travel booking platform offering vacation packages, destinations, and tour services.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/travel%20and%20tours%20-v79QkDhQyyJEUetVWg1a9kOViFatxH.png",
      link: "https://travelandtours.pk/",
      technologies: ["Web Dev"],
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.type === filter)

  return (
    <section id="projects" className="py-20 bg-emerald-50/50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12"
        >
          Projects<span className="text-emerald-600">.</span>
        </motion.h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative group h-48">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-emerald-600 bg-opacity-90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="text-white w-8 h-8 transform hover:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900 dark:text-emerald-100 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 border-2 border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-600 hover:text-white transition-colors duration-300"
                  >
                    Visit Website
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects

