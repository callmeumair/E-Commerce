"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Tech Entrepreneur',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&q=80',
    content: 'The blockchain integration makes shopping so secure and transparent. I can track my orders in real-time and know exactly where my money goes.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Digital Nomad',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&q=80',
    content: 'Amazing platform! The decentralized approach eliminates middlemen, so I get better prices and faster delivery. Highly recommended!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Fashion Designer',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&q=80',
    content: 'The product quality is outstanding, and the smart contracts ensure I always get what I ordered. The future of e-commerce is here!',
    rating: 5,
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Blockchain Developer',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&q=80',
    content: 'As a developer, I appreciate the technical excellence. The platform is fast, secure, and the user experience is top-notch.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    role: 'Marketing Manager',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&q=80',
    content: 'The transparency and security features give me peace of mind when shopping online. The customer service is also exceptional.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Alex Martinez',
    role: 'Small Business Owner',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&q=80',
    content: 'I love how this platform supports small businesses through blockchain technology. Fair fees and instant payments make all the difference.',
    rating: 5,
  },
]

export function TestimonialSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-16 bg-gradient-to-br from-brand-50 to-brand-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about their shopping experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative">
                {/* Quote Icon */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-brand-600 rounded-full flex items-center justify-center">
                  <Quote className="h-4 w-4 text-white" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="relative">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">4.9/5</div>
                <p className="text-gray-600 dark:text-gray-400">Average Rating</p>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">10K+</div>
                <p className="text-gray-600 dark:text-gray-400">Happy Customers</p>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">99%</div>
                <p className="text-gray-600 dark:text-gray-400">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
