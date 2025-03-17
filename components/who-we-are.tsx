"use client"

import { motion } from "framer-motion"
import AnimatedText from "./animated-text"

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-20">
          {/* Left column - Heading */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xs font-medium">02 — WHO WE ARE</h3>
          </motion.div>

          {/* Right column - Content */}
          <div className="md:col-span-3 space-y-8">
            <motion.h2
              className="text-xl md:text-2xl font-medium leading-tight mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our vision is to refine digital production while creating social impact and opportunity.
            </motion.h2>

            <motion.p
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Our studio represents today&apos;s modern world: progressive, inclusive, and socially engaged.
            </motion.p>

            <motion.p
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Thirtysixstudio was founded by Gita Jagessar, a queer person of color and seasoned production director
              from Amsterdam. With over 13 years of experience in digital advertising, Gita has worked with renowned
              global brands such as Netflix, Converse, Travis Scott, Ben & Jerry&apos;s, Adidas, Cash App, and many
              more.
            </motion.p>

            <motion.a
              href="#learn-more"
              className="inline-block text-xs font-medium underline"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              LEARN MORE
            </motion.a>
          </div>
        </div>

        <div className="mt-32 space-y-40">
          <AnimatedText
            text="Agile"
            description="We live and breathe efficiency and are not limited by geography. Local to Amsterdam with hubs in London, Paris, Johannesburg, New York, and beyond, we curate the right team for each project and get moving swiftly."
          />

          <AnimatedText
            text="Innovative"
            description="We use carefully crafted digital processes and new technology to ensure our initiatives run smoothly, allowing our lean and international team to focus on what matters and maximize momentum and opportunity."
          />

          <AnimatedText
            text="Disruptive"
            description="We are progressive and community-focused and don't believe in maintaining the status quo or sticking to outdated ways. Our people reflect today's realities and stay connected to culture."
          />
        </div>
      </div>
    </section>
  )
}

