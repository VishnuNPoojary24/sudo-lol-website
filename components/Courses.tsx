'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check, Star, Clock, Users, Award, Play, BookOpen, Zap, Shield, Headphones } from 'lucide-react'
import { useState } from 'react'

const Courses = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const [selectedPlan, setSelectedPlan] = useState('monthly')

  const courses = [
    {
      id: 1,
      title: 'DevOps Masterclass',
      subtitle: 'Complete DevOps Engineering Course',
      description: 'Master Docker, Kubernetes, CI/CD, and cloud infrastructure from zero to hero',
      price: { monthly: 49, yearly: 39 },
      originalPrice: { monthly: 99, yearly: 79 },
      duration: '40+ hours',
      students: '8.5K+',
      rating: 4.9,
      level: 'Beginner to Expert',
      features: [
        '40+ hours of HD video content',
        'Real-world projects & assignments',
        'Lifetime access to updates',
        'Certificate of completion',
        'Community support & Q&A',
        'Downloadable resources',
        'Mobile & tablet access',
        '30-day money-back guarantee'
      ],
      highlights: [
        'Docker & Containerization',
        'Kubernetes Orchestration',
        'CI/CD Pipeline Design',
        'Infrastructure as Code',
        'Cloud Platform Integration',
        'Monitoring & Observability',
        'Security Best Practices',
        'Performance Optimization'
      ],
      badge: 'Bestseller',
      badgeColor: 'from-yellow-400 to-orange-500'
    },
    {
      id: 2,
      title: 'AI & MLOps Pro',
      subtitle: 'Machine Learning Operations Course',
      description: 'Learn to deploy, monitor, and maintain AI models in production environments',
      price: { monthly: 59, yearly: 49 },
      originalPrice: { monthly: 119, yearly: 99 },
      duration: '35+ hours',
      students: '5.2K+',
      rating: 4.8,
      level: 'Intermediate to Advanced',
      features: [
        '35+ hours of HD video content',
        'Hands-on ML model deployment',
        'Production-ready MLOps pipelines',
        'Industry case studies',
        'Expert instructor support',
        'Lifetime access to updates',
        'Certificate of completion',
        '30-day money-back guarantee'
      ],
      highlights: [
        'ML Model Deployment',
        'Model Monitoring & Drift',
        'A/B Testing Strategies',
        'Feature Store Implementation',
        'MLOps Best Practices',
        'Performance Optimization',
        'Security & Compliance',
        'Cost Management'
      ],
      badge: 'New',
      badgeColor: 'from-green-400 to-blue-500'
    },
    {
      id: 3,
      title: 'Cloud Architecture Expert',
      subtitle: 'Multi-Cloud Solutions Course',
      description: 'Design and implement scalable cloud architectures across AWS, Azure, and GCP',
      price: { monthly: 69, yearly: 59 },
      originalPrice: { monthly: 139, yearly: 119 },
      duration: '45+ hours',
      students: '6.8K+',
      rating: 4.9,
      level: 'Advanced',
      features: [
        '45+ hours of HD video content',
        'Multi-cloud architecture design',
        'Real-world case studies',
        'Cost optimization strategies',
        'Security & compliance focus',
        'Lifetime access to updates',
        'Certificate of completion',
        '30-day money-back guarantee'
      ],
      highlights: [
        'Multi-Cloud Strategy',
        'Architecture Patterns',
        'Cost Optimization',
        'Security & Compliance',
        'Performance Tuning',
        'Disaster Recovery',
        'Migration Strategies',
        'Serverless Architecture'
      ],
      badge: 'Popular',
      badgeColor: 'from-purple-400 to-pink-500'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="courses" ref={ref} className="section-padding bg-gradient-to-br from-dark-50 to-white">
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
            Premium{' '}
            <span className="gradient-text">Courses</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-dark-600 max-w-3xl mx-auto leading-relaxed"
          >
            Take your skills to the next level with our comprehensive, 
            project-based courses. Learn from industry experts and get 
            hands-on experience with real-world scenarios.
          </motion.p>
        </motion.div>

        {/* Pricing Toggle */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex justify-center mb-12"
        >
          <div className="bg-white p-1 rounded-2xl shadow-lg border border-dark-200">
            <div className="flex">
              <button
                onClick={() => setSelectedPlan('monthly')}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  selectedPlan === 'monthly'
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'text-dark-600 hover:text-primary-600'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setSelectedPlan('yearly')}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  selectedPlan === 'yearly'
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'text-dark-600 hover:text-primary-600'
                }`}
              >
                Yearly
                <span className="ml-2 bg-accent-500 text-white text-xs px-2 py-1 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              variants={itemVariants}
              className={`card group hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border-0 bg-white relative ${
                index === 1 ? 'ring-2 ring-primary-500 ring-offset-4' : ''
              }`}
            >
              {/* Badge */}
              <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r ${course.badgeColor} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}>
                {course.badge}
              </div>

              {/* Header */}
              <div className="text-center mb-6 pt-4">
                <h3 className="text-2xl font-bold text-dark-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-lg text-primary-600 font-medium mb-3">
                  {course.subtitle}
                </p>
                <p className="text-dark-600 leading-relaxed">
                  {course.description}
                </p>
              </div>

              {/* Pricing */}
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-4xl font-bold text-dark-900">
                    ${course.price[selectedPlan as keyof typeof course.price]}
                  </span>
                  <span className="text-lg text-dark-500">/month</span>
                </div>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-dark-400 line-through">
                    ${course.originalPrice[selectedPlan as keyof typeof course.originalPrice]}
                  </span>
                  <span className="text-sm text-green-600 font-medium">
                    {Math.round(((course.originalPrice[selectedPlan as keyof typeof course.originalPrice] - course.price[selectedPlan as keyof typeof course.price]) / course.originalPrice[selectedPlan as keyof typeof course.originalPrice]) * 100)}% off
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-center gap-6 mb-6 text-sm text-dark-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{course.students}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-accent-500 fill-current" />
                  <span>{course.rating}</span>
                </div>
              </div>

              {/* Level */}
              <div className="text-center mb-6">
                <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                  {course.level}
                </span>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-dark-900 mb-3">What's Included:</h4>
                <div className="space-y-2">
                  {course.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-dark-600">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-6">
                <h4 className="font-semibold text-dark-900 mb-3">Key Topics:</h4>
                <div className="grid grid-cols-1 gap-2">
                  {course.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-dark-600">
                      <Zap className="w-4 h-4 text-accent-500 flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <button className="btn-primary w-full group-hover:scale-105 transition-transform duration-200">
                Enroll Now
                <Play className="ml-2 w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Comparison */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-dark-100 mb-16"
        >
          <h3 className="text-3xl font-bold text-dark-900 text-center mb-8">
            All Courses Include
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="font-semibold text-dark-900 mb-2">Lifetime Access</h4>
              <p className="text-sm text-dark-600">Access all course updates and new content forever</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-accent-600" />
              </div>
              <h4 className="font-semibold text-dark-900 mb-2">Project-Based</h4>
              <p className="text-sm text-dark-600">Build real-world projects for your portfolio</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-dark-900 mb-2">Money-Back Guarantee</h4>
              <p className="text-sm text-dark-600">30-day guarantee if you're not satisfied</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-dark-900 mb-2">Community Support</h4>
              <p className="text-sm text-dark-600">Join our community of learners and experts</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-8 md:p-12 text-white"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Accelerate Your Career?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who have transformed their careers 
            with our premium courses. Start your journey today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 text-lg">
              View All Courses
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200 text-lg">
              Schedule a Call
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Courses

