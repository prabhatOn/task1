"use client"

import { motion } from "framer-motion"

export default function SpicySection() {
    let bgColor = "bg-foreground"
  const textColor = "text-background"
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
      
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xs font-medium">SPICY</h3>
          </motion.div>

          <div className="md:col-span-3 space-y-8">
            <motion.h2
              className="text-xl md:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Pssst. Looking for something spicy?
            </motion.h2>

            <motion.p
              className="text-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Find the floating adjuma pepper or click the big red button below to unlock our fiery alter ego. Be
              warned, it's hot in there! Don't forget to turn on your sound.
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="${bgColor} px-10 py-3 rounded-full text-xs font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              BRING THE HEAT!
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

