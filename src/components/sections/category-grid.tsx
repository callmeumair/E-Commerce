"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const categories = [
  {
    id: 'electronics',
    name: 'Electronics',
    description: 'Latest gadgets and tech',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&q=80',
    productCount: 150,
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 'fashion',
    name: 'Fashion',
    description: 'Trendy clothing & accessories',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&q=80',
    productCount: 89,
    color: 'from-pink-500 to-pink-600',
  },
  {
    id: 'home-garden',
    name: 'Home & Garden',
    description: 'Beautiful home essentials',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&q=80',
    productCount: 67,
    color: 'from-green-500 to-green-600',
  },
  {
    id: 'sports',
    name: 'Sports',
    description: 'Fitness & outdoor gear',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&q=80',
    productCount: 45,
    color: 'from-orange-500 to-orange-600',
  },
  {
    id: 'books',
    name: 'Books',
    description: 'Knowledge & entertainment',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&q=80',
    productCount: 234,
    color: 'from-purple-500 to-purple-600',
  },
  {
    id: 'beauty',
    name: 'Beauty',
    description: 'Skincare & cosmetics',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&q=80',
    productCount: 78,
    color: 'from-rose-500 to-rose-600',
  },
]

export function CategoryGrid() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our diverse range of categories, each offering carefully curated 
            products for your lifestyle needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/categories/${category.id}`}>
                <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-64">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60 group-hover:opacity-70 transition-opacity duration-300`} />
                    
                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2 group-hover:translate-y-[-4px] transition-transform duration-300">
                        {category.name}
                      </h3>
                      <p className="text-white/90 mb-3 group-hover:translate-y-[-4px] transition-transform duration-300">
                        {category.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                          {category.productCount} products
                        </span>
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Categories Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild>
            <Link href="/categories">
              Browse All Categories
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
