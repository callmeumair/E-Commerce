"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { ArrowRight, Target, Users, Zap, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'

const milestones = [
  {
    year: '2020',
    title: 'Founded',
    description: 'Started with a vision to revolutionize e-commerce',
  },
  {
    year: '2021',
    title: 'First Product',
    description: 'Launched our blockchain-powered marketplace',
  },
  {
    year: '2022',
    title: '10K Users',
    description: 'Reached our first major milestone',
  },
  {
    year: '2023',
    title: 'Global Expansion',
    description: 'Expanded to 50+ countries worldwide',
  },
  {
    year: '2024',
    title: 'Future',
    description: 'Continuing to innovate and grow',
  },
]

const stats = [
  {
    icon: Users,
    number: '50K+',
    label: 'Active Users',
  },
  {
    icon: Target,
    number: '100K+',
    label: 'Products Sold',
  },
  {
    icon: Zap,
    number: '99.9%',
    label: 'Uptime',
  },
  {
    icon: Shield,
    number: '100%',
    label: 'Secure',
  },
]

export function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="gradient-text">Ecom</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            We're building the future of decentralized commerce, where transparency, 
            security, and efficiency meet to create the ultimate shopping experience.
          </p>
        </motion.div>

        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Founded in 2020, Ecom emerged from a simple yet powerful idea: 
                what if we could eliminate the middlemen, reduce fees, and create 
                a more transparent shopping experience for everyone?
              </p>
              <p>
                Our team of blockchain experts, e-commerce veterans, and user 
                experience designers came together to build a platform that 
                leverages the power of decentralized technology to benefit 
                both buyers and sellers.
              </p>
              <p>
                Today, we're proud to serve thousands of customers worldwide, 
                processing millions of dollars in transactions while maintaining 
                the highest standards of security and transparency.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&q=80"
              alt="Our team working together"
              width={600}
              height={400}
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold gradient-text mb-2">5+ Years</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">of Innovation</div>
            </div>
          </motion.div>
        </div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-brand-50 to-brand-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 md:p-12 mb-16"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8">
              To democratize e-commerce by creating a decentralized platform where 
              buyers and sellers can transact directly, securely, and transparently, 
              without the need for intermediaries.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-600 rounded-2xl mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Our Journey
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-brand-200 dark:bg-brand-800"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                      <div className="text-2xl font-bold gradient-text mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-brand-600 rounded-full border-4 border-white dark:border-gray-900"></div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
