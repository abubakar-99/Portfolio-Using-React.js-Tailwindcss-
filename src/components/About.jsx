import { motion } from "framer-motion"

const About = () => {
  const skills = [
    "HTML & CSS",
    "JavaScript",
    "React",
    "Bootstrap",
    "WordPress",
    "PHP",
    "MySQL",
    "Flutter",
    "Laravel",
    "SDLC",
    "Jira",
    "Git & GitHub",
    "Figma",
    "Node.js",
    "Express.js",
    "MongoDB",
    "RESTful APIs",
    "GraphQL",
    "TypeScript",
    "Next.js",
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          About Me<span className="text-emerald-600">.</span>
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              As a passionate software engineer specializing in full-stack web development, I bring ideas to life
              through efficient and user-friendly solutions. With a strong foundation in both front-end and back-end
              technologies, I create scalable and maintainable applications that deliver exceptional user experiences.
            </p>
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              My expertise extends beyond just coding. I'm well-versed in the entire software development lifecycle,
              from conceptualization and planning to deployment and maintenance. I thrive in collaborative environments
              and am always eager to learn and adapt to new technologies and methodologies.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4">Technical Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-emerald-100 dark:bg-emerald-800 text-emerald-800 dark:text-emerald-100 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

