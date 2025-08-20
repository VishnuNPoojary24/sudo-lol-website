'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Download, FileText, Code, Database, Cloud, Brain, Search, Filter } from 'lucide-react'
import { useState } from 'react'

const Notes = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Categories', icon: FileText },
    { id: 'devops', name: 'DevOps', icon: Code },
    { id: 'cloud', name: 'Cloud', icon: Cloud },
    { id: 'ai', name: 'AI & ML', icon: Brain },
    { id: 'database', name: 'Database', icon: Database },
  ]

  const notes = [
    {
      id: 1,
      title: 'Docker Complete Cheat Sheet',
      description: 'Essential Docker commands, best practices, and troubleshooting tips',
      category: 'devops',
      downloads: '25K+',
      rating: 4.9,
      size: '2.3 MB',
      tags: ['Docker', 'Containers', 'DevOps', 'Cheat Sheet'],
      image: '🐳'
    },
    {
      id: 2,
      title: 'Kubernetes Architecture Guide',
      description: 'Comprehensive overview of K8s components, networking, and deployment strategies',
      category: 'devops',
      downloads: '18K+',
      rating: 4.8,
      size: '4.1 MB',
      tags: ['Kubernetes', 'Orchestration', 'Microservices', 'Architecture'],
      image: '☸️'
    },
    {
      id: 3,
      title: 'AWS Services Reference',
      description: 'Quick reference for AWS services, pricing, and best practices',
      category: 'cloud',
      downloads: '22K+',
      rating: 4.7,
      size: '3.2 MB',
      tags: ['AWS', 'Cloud', 'Infrastructure', 'Reference'],
      image: '☁️'
    },
    {
      id: 4,
      title: 'Terraform Best Practices',
      description: 'Infrastructure as Code patterns, modules, and security guidelines',
      category: 'devops',
      downloads: '15K+',
      rating: 4.9,
      size: '2.8 MB',
      tags: ['Terraform', 'IaC', 'DevOps', 'Best Practices'],
      image: '🏗️'
    },
    {
      id: 5,
      title: 'MLOps Pipeline Guide',
      description: 'End-to-end machine learning operations workflow and tools',
      category: 'ai',
      downloads: '12K+',
      rating: 4.8,
      size: '3.5 MB',
      tags: ['MLOps', 'AI', 'Machine Learning', 'Pipelines'],
      image: '🤖'
    },
    {
      id: 6,
      title: 'Git Workflow Strategies',
      description: 'Git branching strategies, commit conventions, and collaboration patterns',
      category: 'devops',
      downloads: '20K+',
      rating: 4.6,
      size: '1.9 MB',
      tags: ['Git', 'Version Control', 'Collaboration', 'Workflow'],
      image: '📝'
    },
    {
      id: 7,
      title: 'Monitoring & Observability',
      description: 'Comprehensive guide to monitoring, logging, and tracing in modern systems',
      category: 'devops',
      downloads: '16K+',
      rating: 4.7,
      size: '3.8 MB',
      tags: ['Monitoring', 'Observability', 'Logging', 'Tracing'],
      image: '📊'
    },
    {
      id: 8,
      title: 'CI/CD Pipeline Templates',
      description: 'Ready-to-use pipeline configurations for Jenkins, GitLab CI, and GitHub Actions',
      category: 'devops',
      downloads: '19K+',
      rating: 4.8,
      size: '2.1 MB',
      tags: ['CI/CD', 'Jenkins', 'GitLab', 'GitHub Actions'],
      image: '⚡'
    }
  ]

  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === 'all' || note.category === selectedCategory
    return matchesSearch && matchesCategory
  })

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
    <section id="notes" ref={ref} className="section-padding bg-white">
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
            Study{' '}
            <span className="gradient-text">Notes</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-dark-600 max-w-3xl mx-auto leading-relaxed"
          >
            Download comprehensive notes, cheat sheets, and reference guides 
            to accelerate your learning journey. All materials are carefully curated 
            and regularly updated.
          </motion.p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search notes, topics, or tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-dark-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white border-primary-600'
                      : 'bg-white text-dark-600 border-dark-200 hover:border-primary-300 hover:text-primary-600'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Notes Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredNotes.map((note) => (
            <motion.div
              key={note.id}
              variants={itemVariants}
              className="card group hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              {/* Note Header */}
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">{note.image}</div>
                <h3 className="text-lg font-bold text-dark-900 mb-2 line-clamp-2">
                  {note.title}
                </h3>
                <p className="text-sm text-dark-600 line-clamp-3">
                  {note.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {note.tags.slice(0, 3).map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-primary-50 text-primary-700 px-2 py-1 rounded text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
                {note.tags.length > 3 && (
                  <span className="bg-dark-100 text-dark-600 px-2 py-1 rounded text-xs">
                    +{note.tags.length - 3}
                  </span>
                )}
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between text-sm text-dark-500 mb-4">
                <span>{note.downloads} downloads</span>
                <span>⭐ {note.rating}</span>
                <span>{note.size}</span>
              </div>

              {/* Download Button */}
              <button className="btn-primary w-full group-hover:scale-105 transition-transform duration-200">
                <Download className="mr-2 w-4 h-4" />
                Download Free
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredNotes.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-dark-700 mb-2">No notes found</h3>
            <p className="text-dark-500">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-16 text-center bg-gradient-to-r from-dark-50 to-primary-50 rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
            Want More Resources?
          </h3>
          <p className="text-xl text-dark-600 mb-8 max-w-2xl mx-auto">
            Get access to our complete library of notes, templates, and study materials 
            when you join our premium courses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-4">
              Join Premium
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              Request Custom Notes
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Notes

