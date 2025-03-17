import Hero from "@/components/hero"
import WhatWeDo from "@/components/what-we-do"
import WhoWeAre from "@/components/who-we-are"
import HowWeGiveBack from "@/components/how-we-give-back"
import Services from "@/components/services/services-section"
import SpicySection from "@/components/spicy-section"
import ClientsSection from "@/components/clients-section"
import TalentSection from "@/components/talent-section"
import Footer from "@/components/footer"
import RedDot from "@/components/red-dot"

export default function Home() {
  return (
    <main className="min-h-screen">
      <RedDot />
      <Hero />
      <WhatWeDo />
      <WhoWeAre />
      <HowWeGiveBack />
      <Services />
      <SpicySection />
      <ClientsSection />
      <TalentSection />
      <Footer />
    </main>
  )
}

