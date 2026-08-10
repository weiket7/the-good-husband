import { createFileRoute } from '@tanstack/react-router'
import { Header } from '#/components/Header'
import { Hero } from '#/components/Hero'
import { LaundromatSection } from '#/components/LaundromatSection'
import { ReviewsSection } from '#/components/ReviewsSection'
import { VendingSection } from '#/components/VendingSection'
import { FranchiseSection } from '#/components/FranchiseSection'
import { Footer } from '#/components/Footer'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="w-full bg-white">
      <Header />
      <main>
        <Hero />
        <LaundromatSection />
        <ReviewsSection />
        <VendingSection />
        <FranchiseSection />
      </main>
      <Footer />
    </div>
  )
}
