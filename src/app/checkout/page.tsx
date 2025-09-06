import { CheckoutPage } from '@/components/checkout/checkout-page'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Checkout',
  description: 'Complete your purchase securely with blockchain technology.',
}

export default function Checkout() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <CheckoutPage />
    </div>
  )
}
