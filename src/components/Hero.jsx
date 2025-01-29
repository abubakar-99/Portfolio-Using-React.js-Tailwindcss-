import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { GitlabIcon as GitHub, Linkedin, ChevronDown } from "lucide-react"

const Hero = () => {
  const [text, setText] = useState("")
  const fullText = "Software Engineer"
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index])
        setIndex(index + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [index])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-500 text-transparent bg-clip-text">
            Abu Bakar
          </h1>
          <h2 className="text-3xl md:text-4xl mb-6 font-semibold text-gray-800 dark:text-white">
            {text}
            <span className="inline-block w-1 h-8 bg-emerald-600 ml-1 animate-blink"></span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-2xl"
          >
            Specializing in web development, I create efficient and user-friendly solutions. With expertise in modern
            web technologies, I bring ideas to life through clean, scalable code.
          </motion.p>
          <motion.div
            className="flex gap-6 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <a
              href="https://github.com/abubakar-99"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full hover:bg-emerald-100 border-2 border-emerald-600 text-emerald-600 hover:text-emerald-700 hover:border-emerald-700 transition-all duration-300"
            >
              <GitHub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/abu-bakar-661263346"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full hover:bg-emerald-100 border-2 border-emerald-600 text-emerald-600 hover:text-emerald-700 hover:border-emerald-700 transition-all duration-300"
            >
              <Linkedin size={24} />
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex-1 mt-12 md:mt-0 max-w-sm md:max-w-md"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full blur-lg opacity-75 animate-pulse"></div>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000410974.jpg-NFfi3JmvtwbC2koswK2UMoMCHKX3QL.jpeg"
              alt="Abu Bakar"
              className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full shadow-2xl relative z-10 border-4 border-white dark:border-gray-800"
            />
          </div>
        </motion.div>
      </div>
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
      >
        <ChevronDown size={36} className="text-emerald-600" />
      </motion.a>
    </section>
  )
}

export default Hero

