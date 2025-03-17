"use client"

import { motion } from "framer-motion"
import RolesSection from "./roles-section"

export default function TalentSection() {
  return (
    <section id="talk-to-us" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Left column - Heading */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xs font-medium">04 — TALK TO US</h3>
          </motion.div>

          {/* Right column - Content */}
          <div className="md:col-span-3 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs mb-4 block">TALENT</span>
              <h2 className="text-xl md:text-2xl mb-6">Thirtysixstudio is seeking talented collaborators.</h2>
              <p className="text-sm mb-6">
                If you are a multi-talented individual with exceptional communication skills, eager to elevate your
                digital craft together with us, we want to hear from you.
              </p>
              <p className="text-sm">
                We specifically welcome progressive people who value high-quality work and workplace well-being equally.
                At Thirtysixstudio, we believe that one can only exist in the presence of the other.
              </p>
            </motion.div>

            <motion.a
              href="#contact"
              className="inline-block px-6 py-3 border border-gray-900 hover:bg-gray-900 hover:text-white transition-colors text-xs"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              DROP US A LINE
            </motion.a>

            <RolesSection />
          </div>
        </div>
      </div>
    </section>
  )
}

