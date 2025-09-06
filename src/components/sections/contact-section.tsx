"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Clock, MessageCircle, Headphones } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Send us an email anytime',
    value: 'support@ecom.com',
    action: 'mailto:support@ecom.com',
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Mon-Fri from 8am to 5pm',
    value: '+1 (555) 123-4567',
    action: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    description: 'Come say hello at our office',
    value: '123 Blockchain St, Web3 City',
    action: '#',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    description: 'We\'re here to help',
    value: 'Mon-Fri: 8am-5pm PST',
    action: '#',
  },
]

const supportOptions = [
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Get instant help from our support team',
    available: 'Available 24/7',
  },
  {
    icon: Headphones,
    title: 'Phone Support',
    description: 'Speak directly with our experts',
    available: 'Mon-Fri: 8am-5pm PST',
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send us a detailed message',
    available: 'Response within 24 hours',
  },
]

export function ContactSection() {
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
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're here to help! Whether you have questions about our platform, 
            need technical support, or want to discuss partnerships, we'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-100 dark:bg-brand-900/20 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="h-6 w-6 text-brand-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {info.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {info.description}
                </p>
                <a
                  href={info.action}
                  className="text-brand-600 hover:text-brand-700 font-medium text-sm transition-colors"
                >
                  {info.value}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Support Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            How Can We Help?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-100 dark:bg-brand-900/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <option.icon className="h-8 w-8 text-brand-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {option.description}
                  </p>
                  <div className="text-sm text-brand-600 font-medium">
                    {option.available}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                How do I get started?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Simply connect your wallet, browse our products, and start shopping! 
                Our platform is designed to be intuitive and user-friendly.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Is my payment secure?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes! All transactions are secured by blockchain technology, 
                ensuring your payments are safe and transparent.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                What cryptocurrencies do you accept?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We currently accept ETH and are working on adding support for 
                other major cryptocurrencies.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                How do returns work?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We offer a 30-day return policy. Simply contact our support team 
                to initiate a return request.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
