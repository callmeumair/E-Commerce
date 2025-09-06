import { ContactSection } from '@/components/sections/contact-section'
import { ContactForm } from '@/components/forms/contact-form'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with our team. We\'re here to help with any questions or support you need.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactSection />
      <ContactForm />
    </div>
  )
}
