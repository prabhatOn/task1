"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"

const jobOpenings = [
  {
    title: "Business Analyst",
    location: "New York, NY",
    type: "Full-time",
  },
  {
    title: "Software Developer",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Project Manager",
    location: "Chicago, IL",
    type: "Full-time",
  },
  {
    title: "Customer Support Specialist",
    location: "Miami, FL",
    type: "Part-time",
  },
]

export default function CareersSection() {
  return (
    <section id="careers" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Career Opportunities</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join our team of talented professionals and build a rewarding career with Bridge Group Solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {jobOpenings.map((job, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <Briefcase className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <p className="text-muted-foreground">
                    {job.location} • {job.type}
                  </p>
                  <a href="#" className="text-blue-500 hover:underline mt-2 inline-block">
                    View Details
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Don't See a Perfect Fit?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in
            mind for future opportunities.
          </p>
          <motion.a
            href="#contact"
            className="inline-block px-6 py-3 bg-blue-500 text-white rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit Your Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

