"use client"

import { motion } from "framer-motion"

export default function HowWeGiveBack() {
  return (
    <section id="how-we-give-back" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
         
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xs font-normal">03 — HOW WE GIVE BACK</h3>
          </motion.div>

          
          <div className="md:col-span-3 space-y-12">
            <motion.h2
              className="text-xl md:text-2xl leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              At Thirtysixstudio, we recognize that our industry can perpetuate harm. We believe we have to try and
              reverse some of these imbalances. That's why we're launching SS36, our local social sustainability hub.
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Through SS36, we reinvest some of our revenue and expertise into the communities that shape the culture
              and trends our field so heavily relies on. Our main focus is on bridging gaps for those affected by
              systemic obstacles related to race, sexuality, wealth and gender identity.
            </motion.p>

            <div className="space-y-6 text-sm">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Our SS36 work includes community-centric projects for local marginalized groups, as well as career
                initiatives for marginalized industry talent.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                As a client, the most impactful way you can assist us in reaching our social sustainability goals is by
                collaborating with our team on a project. We warmly welcome partner- and sponsorships from like-minded
                individuals and organizations.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

