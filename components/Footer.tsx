'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Youtube, Github, Twitter, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    learning: [
      { name: 'DevOps Fundamentals', href: '#roadmaps' },
      { name: 'Cloud Native Development', href: '#roadmaps' },
      { name: 'AI & MLOps', href: '#roadmaps' },
      { name: 'Security & Compliance', href: '#roadmaps' },
      { name: 'Study Notes', href: '#notes' },
      { name: 'Learning Roadmaps', href: '#roadmaps' }
    ],
    resources: [
      { name: 'Free Tutorials', href: '#youtube' },
      { name: 'Cheat Sheets', href: '#notes' },
      { name: 'Project Templates', href: '#notes' },
      { name: 'Community Forum', href: '#contact' },
      { name: 'Blog & Articles', href: '#youtube' },
      { name: 'Webinars', href: '#courses' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Mission', href: '#about' },
      { name: 'Team', href: '#about' },
      { name: 'Careers', href: '#contact' },
      { name: 'Partnerships', href: '#contact' },
      { name: 'Press Kit', href: '#contact' }
    ],
    support: [
      { name: 'Help Center', href: '#contact' },
      { name: 'Contact Support', href: '#contact' },
      { name: 'Live Chat', href: '#contact' },
      { name: 'FAQ', href: '#contact' },
      { name: 'System Status', href: '#contact' },
      { name: 'Feedback', href: '#contact' }
    ]
  }

  const socialLinks = [
    { icon: Youtube, href: 'https://youtube.com/@sudolol', label: 'YouTube', color: 'hover:bg-red-500' },
    { icon: Github, href: 'https://github.com/sudolol', label: 'GitHub', color: 'hover:bg-gray-800' },
    { icon: Twitter, href: 'https://twitter.com/sudolol', label: 'Twitter', color: 'hover:bg-blue-400' },
    { icon: Linkedin, href: 'https://linkedin.com/in/sudolol', label: 'LinkedIn', color: 'hover:bg-blue-600' },
    { icon: Mail, href: 'mailto:hello@sudolol.com', label: 'Email', color: 'hover:bg-blue-500' }
  ]

  return (
    <footer className="bg-dark-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <span className="text-gray-200 font-bold text-xl font-mono">
                  SL
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  sudo <span className="text-primary-400">LOL</span>
                </h3>
                <p className="text-sm text-gray-400 font-mono">DevOps & AI Education</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering developers worldwide with comprehensive DevOps and AI education. 
              From beginner to expert, we've got your learning journey covered.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-dark-800 hover:bg-primary-600 ${social.color} text-gray-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-200`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Learning Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Learning</h4>
            <ul className="space-y-3">
              {footerLinks.learning.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-dark-800">
        <div className="container-custom py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Stay Updated with Latest DevOps & AI Trends
            </h3>
            <p className="text-gray-400 mb-6">
              Get weekly insights, tutorials, and industry updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
              />
              <button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-dark-800">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© 2024 sudo LOL. All rights reserved.</span>
              <span>•</span>
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for developers</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 transform hover:scale-110 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  )
}

export default Footer

