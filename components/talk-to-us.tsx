"use client"

import { motion } from "framer-motion"
import ContactForm from "./contact-form"

export default function TalkToUs() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h3 className="text-sm font-medium mb-6">04 — TALK TO US</h3>
          </motion.div>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm mb-4 block">CONTACT</span>
              <h2 className="text-4xl md:text-5xl mb-8">Let's start a conversation.</h2>
              <p className="text-lg mb-8">
                We're excited to hear about your project and how we can help. Get in touch and let's discuss the
                possibilities.
              </p>
            </motion.div>

            <div className="max-w-md">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

