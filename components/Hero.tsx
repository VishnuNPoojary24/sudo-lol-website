'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Star, Users, BookOpen, Zap } from 'lucide-react'
import Link from 'next/link'

const Hero = () => {
  const stats = [
    { icon: Users, value: '50K+', label: 'Students' },
    { icon: BookOpen, value: '200+', label: 'Tutorials' },
    { icon: Star, value: '4.9', label: 'Rating' },
    { icon: Zap, value: '24/7', label: 'Support' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-indigo-100 pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-20"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-40 right-20 w-16 h-16 bg-accent-200 rounded-full opacity-20"
        />
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-40 left-20 w-12 h-12 bg-primary-300 rounded-full opacity-20"
        />
      </div>

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto mb-16"
        >
          {/* Main Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-dark-900 mb-6 leading-tight"
          >
            Master{' '}
            <span className="gradient-text">DevOps</span>
            {' '}&{' '}
            <span className="gradient-text">AI</span>
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Like a Pro</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-dark-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Join thousands of developers learning the latest DevOps practices, 
            cloud technologies, and AI tools. From beginner to expert, 
            we've got your learning journey covered.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link href="#courses" className="btn-primary text-lg px-8 py-4 group">
              Start Learning Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link href="#youtube" className="btn-secondary text-lg px-8 py-4 group">
              <Play className="mr-2 w-5 h-5" />
              Watch on YouTube
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, type: 'spring', stiffness: 200 }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-3 bg-white rounded-2xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-2xl font-bold text-dark-900 mb-1">{stat.value}</div>
                <div className="text-sm text-dark-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 pt-8 border-t border-dark-200"
          >
            <p className="text-dark-500 mb-4">Trusted by developers from</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold text-dark-400">Google</div>
              <div className="text-2xl font-bold text-dark-400">Microsoft</div>
              <div className="text-2xl font-bold text-dark-400">Amazon</div>
              <div className="text-2xl font-bold text-dark-400">Netflix</div>
              <div className="text-2xl font-bold text-dark-400">Uber</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-dark-300 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-3 bg-dark-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero

