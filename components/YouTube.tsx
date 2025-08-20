'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Play, Youtube, ThumbsUp, MessageCircle, Share2, Clock, Eye, Heart, Bell } from 'lucide-react'
import Link from 'next/link'

const YouTube = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const videos = [
    {
      id: 1,
      title: 'Complete Docker Tutorial for Beginners',
      description: 'Learn Docker from scratch with hands-on examples and real-world projects',
      thumbnail: '🐳',
      duration: '45:23',
      views: '125K',
      likes: '8.2K',
      comments: '1.2K',
      published: '2 days ago',
      category: 'DevOps',
      featured: true
    },
    {
      id: 2,
      title: 'Kubernetes Architecture Deep Dive',
      description: 'Understanding K8s components, networking, and deployment strategies',
      thumbnail: '☸️',
      duration: '38:15',
      views: '89K',
      likes: '6.8K',
      comments: '987',
      published: '1 week ago',
      category: 'DevOps',
      featured: false
    },
    {
      id: 3,
      title: 'AWS Lambda + API Gateway Tutorial',
      description: 'Build serverless APIs with AWS Lambda and API Gateway',
      thumbnail: '☁️',
      duration: '32:47',
      views: '67K',
      likes: '5.4K',
      comments: '756',
      published: '2 weeks ago',
      category: 'Cloud',
      featured: false
    },
    {
      id: 4,
      title: 'MLOps Pipeline with Kubeflow',
      description: 'Deploy and manage ML models in production using Kubeflow',
      thumbnail: '🤖',
      duration: '41:12',
      views: '45K',
      likes: '4.1K',
      comments: '623',
      published: '3 weeks ago',
      category: 'AI & ML',
      featured: false
    },
    {
      id: 5,
      title: 'Terraform Best Practices 2024',
      description: 'Infrastructure as Code patterns and security guidelines',
      thumbnail: '🏗️',
      duration: '35:28',
      views: '78K',
      likes: '6.2K',
      comments: '892',
      published: '1 month ago',
      category: 'DevOps',
      featured: false
    },
    {
      id: 6,
      title: 'GitHub Actions CI/CD Masterclass',
      description: 'Build robust CI/CD pipelines with GitHub Actions',
      thumbnail: '⚡',
      duration: '29:53',
      views: '92K',
      likes: '7.1K',
      comments: '1.1K',
      published: '1 month ago',
      category: 'DevOps',
      featured: false
    }
  ]

  const stats = [
    { label: 'Subscribers', value: '150K+', icon: Youtube },
    { label: 'Videos', value: '500+', icon: Play },
    { label: 'Total Views', value: '25M+', icon: Eye },
    { label: 'Watch Hours', value: '2M+', icon: Clock }
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
    <section id="youtube" ref={ref} className="section-padding bg-gradient-to-br from-red-50 to-white">
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
            Latest from{' '}
            <span className="text-red-600">YouTube</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-dark-600 max-w-3xl mx-auto leading-relaxed"
          >
            Subscribe to our YouTube channel for free DevOps and AI tutorials, 
            tips, and industry insights. New videos every week!
          </motion.p>
        </motion.div>

        {/* Channel Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center bg-white rounded-2xl p-6 shadow-lg border border-red-100"
            >
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-red-600" />
              </div>
              <div className="text-2xl font-bold text-dark-900 mb-1">{stat.value}</div>
              <div className="text-sm text-dark-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Video */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-red-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <div className="bg-gradient-to-br from-red-400 to-red-600 rounded-2xl p-12 text-center text-white">
                  <div className="text-8xl mb-4">🐳</div>
                  <div className="text-2xl font-bold mb-2">Featured Video</div>
                  <div className="text-red-100">Complete Docker Tutorial</div>
                </div>
                <button className="absolute inset-0 flex items-center justify-center group">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-200">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                </button>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                    {videos[0].category}
                  </span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-dark-900 mb-4">
                  {videos[0].title}
                </h3>
                <p className="text-lg text-dark-600 mb-6 leading-relaxed">
                  {videos[0].description}
                </p>
                <div className="flex items-center gap-6 text-sm text-dark-500 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{videos[0].duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    <span>{videos[0].views} views</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4" />
                    <span>{videos[0].likes}</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="https://youtube.com/@sudolol" 
                    target="_blank"
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Youtube className="w-5 h-5" />
                    Watch Now
                  </Link>
                  <button className="border-2 border-red-200 text-red-600 hover:bg-red-50 font-semibold py-3 px-6 rounded-lg transition-all duration-200">
                    <Share2 className="w-4 h-4 inline mr-2" />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Video Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {videos.slice(1).map((video) => (
            <motion.div
              key={video.id}
              variants={itemVariants}
              className="card group hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className="relative mb-4">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-8 text-center">
                  <div className="text-6xl mb-2">{video.thumbnail}</div>
                  <div className="text-sm text-gray-600">{video.category}</div>
                </div>
                <button className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <div className="w-12 h-12 bg-black/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Play className="w-6 h-6 text-white ml-0.5" />
                  </div>
                </button>
                <div className="absolute top-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-bold text-dark-900 mb-2 line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-sm text-dark-600 mb-4 line-clamp-2">
                  {video.description}
                </p>
                
                {/* Stats */}
                <div className="flex items-center justify-between text-xs text-dark-500 mb-4">
                  <span>{video.views} views</span>
                  <span>{video.published}</span>
                </div>

                {/* Engagement */}
                <div className="flex items-center gap-4 text-sm text-dark-500 mb-4">
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="w-4 h-4" />
                    <span>{video.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>{video.comments}</span>
                  </div>
                </div>

                {/* Watch Button */}
                <button className="w-full bg-red-50 hover:bg-red-100 text-red-600 font-medium py-2 px-4 rounded-lg transition-all duration-200 group-hover:scale-105">
                  <Play className="w-4 h-4 inline mr-2" />
                  Watch Video
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Subscribe CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-6xl mb-6">📺</div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Subscribe to sudo LOL
          </h3>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Get notified about new DevOps and AI tutorials, tips, and industry insights. 
            Join our community of 150K+ developers!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="https://youtube.com/@sudolol" 
              target="_blank"
              className="bg-white text-red-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 text-lg flex items-center justify-center gap-2"
            >
              <Youtube className="w-6 h-6" />
              Subscribe Now
            </Link>
            <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200 text-lg">
              <Bell className="w-5 h-5 inline mr-2" />
              Turn on Notifications
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default YouTube

