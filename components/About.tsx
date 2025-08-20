'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Cloud, Brain, Users, Target, Award } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const features = [
    {
      icon: Code,
      title: 'Hands-on Learning',
      description: 'Real-world projects and practical examples that you can immediately apply in your work.',
    },
    {
      icon: Cloud,
      title: 'Cloud-Native Focus',
      description: 'Master AWS, Azure, GCP, Docker, Kubernetes, and modern DevOps practices.',
    },
    {
      icon: Brain,
      title: 'AI & ML Integration',
      description: 'Learn how to integrate AI tools into your DevOps workflows and build intelligent systems.',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Join a community of like-minded developers sharing knowledge and best practices.',
    },
    {
      icon: Target,
      title: 'Career Focused',
      description: 'Skills that directly translate to better job opportunities and career growth.',
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Content trusted by developers at top tech companies worldwide.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="about" ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-dark-900 mb-6"
          >
            Why Choose{' '}
            <span className="gradient-text">sudo LOL</span>?
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-dark-600 max-w-3xl mx-auto leading-relaxed"
          >
            We're not just another tech tutorial channel. We're your partners in mastering 
            the technologies that are shaping the future of software development.
          </motion.p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-3xl p-8 md:p-12 mb-16"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-dark-900 mb-6">
              Our Mission
            </h3>
            <p className="text-lg md:text-xl text-dark-700 leading-relaxed mb-6">
              To democratize DevOps and AI education by providing high-quality, 
              practical content that empowers developers at every level to build, 
              deploy, and maintain world-class applications.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-dark-600">
              <span className="bg-white px-4 py-2 rounded-full shadow-sm">
                🚀 Practical Learning
              </span>
              <span className="bg-white px-4 py-2 rounded-full shadow-sm">
                🌟 Industry Best Practices
              </span>
              <span className="bg-white px-4 py-2 rounded-full shadow-sm">
                💡 Real-World Projects
              </span>
              <span className="bg-white px-4 py-2 rounded-full shadow-sm">
                🔄 Continuous Updates
              </span>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="card group hover:border-primary-200 hover:shadow-xl"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-dark-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-dark-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 bg-dark-900 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">
              5+
            </div>
            <div className="text-lg text-dark-300">Years of Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-accent-400 mb-2">
              1000+
            </div>
            <div className="text-lg text-dark-300">Hours of Content</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">
              95%
            </div>
            <div className="text-lg text-dark-300">Student Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

