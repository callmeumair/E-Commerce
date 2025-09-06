import { AboutSection } from '@/components/sections/about-section'
import { TeamSection } from '@/components/sections/team-section'
import { ValuesSection } from '@/components/sections/values-section'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about our mission to revolutionize e-commerce through blockchain technology and decentralized commerce.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutSection />
      <ValuesSection />
      <TeamSection />
    </div>
  )
}
