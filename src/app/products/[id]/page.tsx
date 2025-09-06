import { ProductDetail } from '@/components/products/product-detail'
import { Metadata } from 'next'

interface ProductPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  // In a real app, you would fetch product data here
  const product = {
    name: 'Premium Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation and 30-hour battery life.',
  }

  return {
    title: product.name,
    description: product.description,
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <ProductDetail productId={params.id} />
    </div>
  )
}
