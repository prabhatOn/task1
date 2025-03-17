"use client"

import { motion } from "framer-motion"
import ContactForm from "./contact-form"

export default function ClientsSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Left column - Heading */}
          <motion.div className="md:col-span-1" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <span className="text-xs font-medium">CLIENTS</span>
          </motion.div>

          {/* Right column - Content */}
          <div className="md:col-span-3 space-y-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl md:text-2xl"
            >
              Ready to get your project off the ground?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm"
            >
              We&apos;re currently accepting new clients and are excited to hear from you. Get in touch by sending an
              email to hello@thirtysixstudio.com or fill out the form below to start your journey with us.
            </motion.p>

            <div className="max-w-md">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

