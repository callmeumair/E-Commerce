import { CartPage } from '@/components/cart/cart-page'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shopping Cart',
  description: 'Review your items and proceed to checkout.',
}

export default function Cart() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <CartPage />
    </div>
  )
}
