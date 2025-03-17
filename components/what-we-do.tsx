"use client"

import { motion } from "framer-motion"

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Left column - Heading */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-xs font-medium">01 — WHAT WE DO</h3>
          </motion.div>

          {/* Right column - Content */}
          <div className="md:col-span-3 space-y-8">
            <motion.h2
              className="text-xl md:text-2xl font-medium leading-tight mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              We aim to elevate digital production in the advertising space, bringing your ideas to life.
            </motion.h2>

            <motion.p
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              As a contemporary studio, we use cutting-edge design practices and the latest technologies to deliver
              current digital work.
            </motion.p>

            <motion.p
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Our commitment to innovation and simplicity, paired with our agile approach, ensures your journey with us
              is smooth and enjoyable from start to finish.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}

