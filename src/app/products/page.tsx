import { ProductListing } from '@/components/products/product-listing'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Browse our complete collection of premium products, all verified and secured on the blockchain.',
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <ProductListing />
    </div>
  )
}
