'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { BookOpen, Clock, Users, Star, TrendingUp, Shield, Cloud, Brain } from 'lucide-react'

const Roadmaps = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const roadmaps = [
    {
      title: 'DevOps Fundamentals',
      description: 'Master the basics of DevOps practices, CI/CD pipelines, and automation tools.',
      duration: '8 weeks',
      students: '2.5k+',
      rating: 4.9,
      level: 'Beginner',
      topics: ['Git & Version Control', 'Docker Basics', 'CI/CD Pipelines', 'Infrastructure as Code'],
      tools: ['Git', 'Docker', 'Jenkins', 'Terraform'],
      icon: TrendingUp,
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Cloud Native Development',
      description: 'Learn to build and deploy applications using modern cloud-native technologies.',
      duration: '10 weeks',
      students: '1.8k+',
      rating: 4.8,
      level: 'Intermediate',
      topics: ['Kubernetes', 'Microservices', 'Cloud Platforms', 'Serverless'],
      tools: ['Kubernetes', 'AWS', 'Azure', 'GCP'],
      icon: Cloud,
      color: 'from-green-500 to-blue-600'
    },
    {
      title: 'AI & MLOps Operations',
      description: 'Operationalize AI/ML models with DevOps practices and automation.',
      duration: '12 weeks',
      students: '1.2k+',
      rating: 4.9,
      level: 'Advanced',
      topics: ['ML Pipeline Automation', 'Model Monitoring', 'A/B Testing', 'MLOps Tools'],
      tools: ['MLflow', 'Kubeflow', 'TensorFlow', 'PyTorch'],
      icon: Brain,
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Security & Compliance',
      description: 'Implement security best practices and compliance frameworks in DevOps.',
      duration: '6 weeks',
      students: '900+',
      rating: 4.7,
      level: 'Intermediate',
      topics: ['Security Scanning', 'Compliance Frameworks', 'Secrets Management', 'Audit Logging'],
      tools: ['SonarQube', 'Vault', 'Falco', 'OPA'],
      icon: Shield,
      color: 'from-red-500 to-orange-600'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="roadmaps" className="section-padding bg-gradient-to-br from-dark-50 to-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-dark-900 mb-6"
          >
            Learning Roadmaps
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-dark-600 max-w-3xl mx-auto"
          >
            Structured learning paths designed to take you from beginner to expert in your chosen domain
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {roadmaps.map((roadmap, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-dark-100 hover:border-primary-300">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${roadmap.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <roadmap.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-dark-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {roadmap.title}
                </h3>
                
                <p className="text-dark-600 mb-4 leading-relaxed">
                  {roadmap.description}
                </p>

                <div className="flex items-center justify-between mb-4 text-sm text-dark-500">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{roadmap.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{roadmap.students}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium text-dark-700">{roadmap.rating}</span>
                  </div>
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
                    {roadmap.level}
                  </span>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-dark-800 text-sm">Key Topics:</h4>
                  <ul className="space-y-1">
                    {roadmap.topics.slice(0, 3).map((topic, idx) => (
                      <li key={idx} className="text-xs text-dark-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 pt-4 border-t border-dark-100">
                  <h4 className="font-semibold text-dark-800 text-sm mb-2">Tools You'll Learn:</h4>
                  <div className="flex flex-wrap gap-2">
                    {roadmap.tools.slice(0, 3).map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-dark-100 text-dark-700 text-xs rounded-md"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Choose your learning path and join thousands of developers who have already transformed their careers with our structured roadmaps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary bg-white text-primary-600 hover:bg-gray-50">
                Explore All Roadmaps
              </button>
              <button className="btn-accent">
                Get Personalized Plan
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Roadmaps
