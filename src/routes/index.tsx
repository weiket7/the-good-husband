import { createFileRoute } from '@tanstack/react-router'
import { Header } from '#/components/Header'
import { Hero } from '#/components/Hero'
import { LaundromatSection } from '#/components/LaundromatSection'
import { DryCleaningSection } from '#/components/DryCleaningSection'
import { ReviewsSection } from '#/components/ReviewsSection'
import { VendingSection } from '#/components/VendingSection'
import { FranchiseSection } from '#/components/FranchiseSection'
import { Footer } from '#/components/Footer'
import { getGoogleReviews } from '#/server/googleReviews'

export const Route = createFileRoute('/')({
  loader: () => getGoogleReviews(),
  component: Home,
})

function Home() {
  const { reviews, summary, outletSummaries } = Route.useLoaderData()
  return (
    <div className="w-full bg-white">
      <Header />
      <main>
        <Hero />
        <LaundromatSection outletSummaries={outletSummaries} />
        <DryCleaningSection />
        <ReviewsSection reviews={reviews} summary={summary} />
        <VendingSection />
        <FranchiseSection />
      </main>
      <Footer />
    </div>
  )
}
