"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Heart, 
  ShoppingCart, 
  Star, 
  Truck, 
  Shield, 
  RotateCcw,
  Minus,
  Plus,
  Share2,
  Check,
  ArrowLeft
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { formatPrice } from '@/lib/utils'

// Mock product data - in real app, this would come from API
const productData = {
  id: '1',
  name: 'Premium Wireless Headphones',
  description: 'High-quality wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers, professionals, and anyone who values exceptional audio quality.',
  price: 0.15,
  currency: 'ETH',
  originalPrice: 0.18,
  images: [
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80',
    'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&q=80',
    'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=80',
    'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=80',
  ],
  rating: 4.8,
  reviewCount: 124,
  category: 'Electronics',
  brand: 'TechPro',
  inStock: true,
  stockQuantity: 15,
  tags: ['wireless', 'noise-cancelling', 'premium'],
  features: [
    'Active Noise Cancellation',
    '30-hour battery life',
    'Quick charge (5 min = 3 hours)',
    'Premium sound quality',
    'Comfortable over-ear design',
    'Bluetooth 5.0 connectivity',
  ],
  specifications: {
    'Driver Size': '40mm',
    'Frequency Response': '20Hz - 20kHz',
    'Impedance': '32 ohms',
    'Battery Life': '30 hours',
    'Charging Time': '2 hours',
    'Weight': '250g',
    'Connectivity': 'Bluetooth 5.0, 3.5mm jack',
  },
  reviews: [
    {
      id: 1,
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&q=80',
      rating: 5,
      date: '2024-01-15',
      comment: 'Amazing sound quality! The noise cancellation works perfectly and the battery life is incredible.',
      verified: true,
    },
    {
      id: 2,
      name: 'Mike Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&q=80',
      rating: 4,
      date: '2024-01-10',
      comment: 'Great headphones, very comfortable for long listening sessions. The build quality is excellent.',
      verified: true,
    },
  ],
}

const relatedProducts = [
  {
    id: '2',
    name: 'Smart Watch Pro',
    price: 0.12,
    currency: 'ETH',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=300&q=80',
    rating: 4.9,
  },
  {
    id: '3',
    name: '4K Drone Camera',
    price: 0.25,
    currency: 'ETH',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=300&q=80',
    rating: 4.7,
  },
  {
    id: '4',
    name: 'Gaming Laptop',
    price: 2.5,
    currency: 'ETH',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=300&q=80',
    rating: 4.9,
  },
]

interface ProductDetailProps {
  productId: string
}

export function ProductDetail({ productId }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedTab, setSelectedTab] = useState('description')
  const [isWishlisted, setIsWishlisted] = useState(false)

  const product = productData // In real app, fetch by productId

  const handleAddToCart = () => {
    // Add to cart logic
    console.log('Added to cart:', { productId, quantity })
  }

  const handleBuyNow = () => {
    // Buy now logic
    console.log('Buy now:', { productId, quantity })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
        <Link href="/" className="hover:text-brand-600">Home</Link>
        <span>/</span>
        <Link href="/products" className="hover:text-brand-600">Products</Link>
        <span>/</span>
        <span className="text-gray-900 dark:text-white">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Product Images */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg">
            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            
            {/* Image Navigation */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 bg-white/80 hover:bg-white backdrop-blur-sm"
              onClick={() => setIsWishlisted(!isWishlisted)}
            >
              <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
            </Button>
          </div>

          {/* Thumbnail Images */}
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square overflow-hidden rounded-lg border-2 transition-all ${
                  selectedImage === index
                    ? 'border-brand-600'
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                }`}
              >
                <Image
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          {/* Header */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-brand-600 font-medium">{product.brand}</span>
              <span className="text-sm text-gray-500">•</span>
              <span className="text-sm text-gray-500">{product.category}</span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold gradient-text">
                {formatPrice(product.price, product.currency)}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-gray-500 line-through">
                  {formatPrice(product.originalPrice, product.currency)}
                </span>
              )}
              {product.originalPrice && (
                <span className="bg-red-100 text-red-600 text-sm font-medium px-2 py-1 rounded">
                  Save {formatPrice(product.originalPrice - product.price, product.currency)}
                </span>
              )}
            </div>
          </div>

          {/* Features */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900 dark:text-white">Key Features:</h3>
            <ul className="space-y-2">
              {product.features.slice(0, 4).map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Quantity */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900 dark:text-white">Quantity:</h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-lg">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="px-4 py-2 font-medium">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.min(product.stockQuantity, quantity + 1))}
                  disabled={quantity >= product.stockQuantity}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {product.stockQuantity} in stock
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-4">
            <div className="flex gap-4">
              <Button
                size="lg"
                className="flex-1"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleBuyNow}
                className="flex-1"
              >
                Buy Now
              </Button>
            </div>

            <Button variant="ghost" className="w-full">
              <Share2 className="h-4 w-4 mr-2" />
              Share Product
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="text-center">
              <Truck className="h-6 w-6 text-brand-600 mx-auto mb-2" />
              <p className="text-xs text-gray-600 dark:text-gray-400">Free Shipping</p>
            </div>
            <div className="text-center">
              <Shield className="h-6 w-6 text-brand-600 mx-auto mb-2" />
              <p className="text-xs text-gray-600 dark:text-gray-400">Secure Payment</p>
            </div>
            <div className="text-center">
              <RotateCcw className="h-6 w-6 text-brand-600 mx-auto mb-2" />
              <p className="text-xs text-gray-600 dark:text-gray-400">30-Day Returns</p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mb-16">
        <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'description', label: 'Description' },
              { id: 'specifications', label: 'Specifications' },
              { id: 'reviews', label: 'Reviews' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  selectedTab === tab.id
                    ? 'border-brand-600 text-brand-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="prose max-w-none">
          {selectedTab === 'description' && (
            <div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {product.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedTab === 'specifications' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium text-gray-900 dark:text-white">{key}</span>
                  <span className="text-gray-600 dark:text-gray-400">{value}</span>
                </div>
              ))}
            </div>
          )}

          {selectedTab === 'reviews' && (
            <div className="space-y-6">
              {product.reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-200 dark:border-gray-700 pb-6">
                  <div className="flex items-start gap-4">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {review.name}
                        </h4>
                        {review.verified && (
                          <span className="bg-green-100 text-green-600 text-xs font-medium px-2 py-1 rounded">
                            Verified Purchase
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">{review.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
          You Might Also Like
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="brand" size="sm">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Quick Add
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold gradient-text">
                    {formatPrice(product.price, 'ETH')}
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">
                      {product.rating}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
