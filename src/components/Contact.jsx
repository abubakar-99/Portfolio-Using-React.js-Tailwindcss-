import { useState } from "react"
import { motion } from "framer-motion"
import { GitlabIcon as GitHub, Linkedin, Send, Loader, Mail, Phone } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://formspree.io/f/bakarr.tech@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Contact Me<span className="text-emerald-600">.</span>
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            <p className="mb-8 text-gray-600 dark:text-gray-300">
              I'm always open to new opportunities and collaborations. Whether you have a question or just want to say
              hi, I'll try my best to get back to you!
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="text-emerald-600" size={24} />
                <span className="text-gray-700 dark:text-gray-300">bakarr.tech@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-emerald-600" size={24} />
                <span className="text-gray-700 dark:text-gray-300">+92 317 5010223</span>
              </div>
            </div>
            <div className="mt-8 flex space-x-4">
              <a
                href="https://github.com/abubakar-99"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
              >
                <GitHub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/abu-bakar-661263346"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white dark:bg-gray-700 dark:border-gray-600"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white dark:bg-gray-700 dark:border-gray-600"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white dark:bg-gray-700 dark:border-gray-600"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
              <textarea
                placeholder="Your Message"
                rows="6"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white dark:bg-gray-700 dark:border-gray-600"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <Loader className="animate-spin" size={20} />
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
              {submitStatus === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-600 text-center"
                >
                  Message sent successfully!
                </motion.p>
              )}
              {submitStatus === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-600 text-center"
                >
                  Error sending message. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

