import { HeroSection } from '@/components/sections/hero-section'
import { FeaturedProducts } from '@/components/sections/featured-products'
import { CategoryGrid } from '@/components/sections/category-grid'
import { TestimonialSection } from '@/components/sections/testimonial-section'
import { CTASection } from '@/components/sections/cta-section'
import { StatsSection } from '@/components/sections/stats-section'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <FeaturedProducts />
      <CategoryGrid />
      <TestimonialSection />
      <CTASection />
    </div>
  )
}
