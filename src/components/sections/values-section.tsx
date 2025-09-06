"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Eye, Zap, Heart, Users, Globe } from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: 'Security First',
    description: 'We prioritize the security of our users\' data and transactions through advanced blockchain technology.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'Every transaction is recorded on the blockchain, ensuring complete transparency and accountability.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We continuously push the boundaries of what\'s possible in decentralized commerce.',
  },
  {
    icon: Heart,
    title: 'User-Centric',
    description: 'Our users are at the heart of everything we do, driving our decisions and product development.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'We believe in the power of community and work to build strong relationships with our users.',
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'We\'re committed to making e-commerce more accessible and fair for people worldwide.',
  },
]

export function ValuesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Values
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            These core values guide everything we do and shape our vision for the future of e-commerce.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-100 dark:bg-brand-900/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-brand-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
