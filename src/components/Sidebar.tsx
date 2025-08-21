'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { 
  X, 
  House, 
  BarChart3, 
  Settings, 
  Folder, 
  CheckCircle2, 
  Star, 
  Clock, 
  Plus, 
  Github, 
  User 
} from 'lucide-react'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 left-0 z-50 w-64 glass-nav lg:hidden"
          >
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="flex h-16 items-center justify-between px-6 border-b border-white/20">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center shadow-lg">
                    <Github className="h-5 w-5 text-white" />
                  </div>
                  <h1 className="text-lg font-bold text-gray-900">vibe-records</h1>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-500 hover:text-gray-700 rounded-xl hover:bg-gray-100/50 transition-all duration-200"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 space-y-1 px-3 py-4">
                <div className="space-y-1">
                  <a href="#" className="group flex items-center px-3 py-3 text-sm font-bold rounded-2xl transition-all duration-200 bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg">
                    <House className="mr-3 h-5 w-5 flex-shrink-0 text-white" />
                    Dashboard
                  </a>
                  <a href="#" className="group flex items-center px-3 py-3 text-sm font-medium rounded-2xl transition-all duration-200 text-gray-700 hover:bg-gray-100/50 hover:text-gray-900">
                    <BarChart3 className="mr-3 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
                    Analytics
                  </a>
                  <a href="#" className="group flex items-center px-3 py-3 text-sm font-medium rounded-2xl transition-all duration-200 text-gray-700 hover:bg-gray-100/50 hover:text-gray-900">
                    <Settings className="mr-3 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
                    Settings
                  </a>
                </div>

                <div className="pt-6">
                  <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Projects</h3>
                  <div className="mt-2 space-y-1">
                    <button className="group flex w-full items-center justify-between px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100/50 hover:text-gray-900 rounded-2xl transition-all duration-200">
                      <div className="flex items-center">
                        <Folder className="mr-3 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
                        All Projects
                      </div>
                      <span className="ml-3 inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">3</span>
                    </button>
                    <button className="group flex w-full items-center justify-between px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100/50 hover:text-gray-900 rounded-2xl transition-all duration-200">
                      <div className="flex items-center">
                        <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
                        Active
                      </div>
                      <span className="ml-3 inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">3</span>
                    </button>
                    <button className="group flex w-full items-center justify-between px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100/50 hover:text-gray-900 rounded-2xl transition-all duration-200">
                      <div className="flex items-center">
                        <Star className="mr-3 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
                        Starred
                      </div>
                      <span className="ml-3 inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">2</span>
                    </button>
                    <button className="group flex w-full items-center justify-between px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100/50 hover:text-gray-900 rounded-2xl transition-all duration-200">
                      <div className="flex items-center">
                        <Clock className="mr-3 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
                        Recent
                      </div>
                      <span className="ml-3 inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">3</span>
                    </button>
                  </div>
                </div>

                <div className="pt-6">
                  <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Quick Actions</h3>
                  <div className="mt-2 space-y-1">
                    <button className="group flex w-full items-center px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100/50 hover:text-gray-900 rounded-2xl transition-all duration-200">
                      <Plus className="mr-3 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
                      Add New Project
                    </button>
                    <button className="group flex w-full items-center px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100/50 hover:text-gray-900 rounded-2xl transition-all duration-200">
                      <Github className="mr-3 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
                      Connect GitHub
                    </button>
                  </div>
                </div>
              </nav>

              {/* User Profile */}
              <div className="border-t border-white/20 p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-gray-300 to-gray-400 rounded-2xl flex items-center justify-center shadow-lg">
                    <User className="h-4 w-4 text-gray-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-gray-900 truncate">Vibe Coder</p>
                    <p className="text-xs text-gray-500 truncate">@vibe-coder</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-grow glass-nav">
          <div className="flex h-16 items-center px-6 border-b border-white/20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center shadow-lg">
                <Github className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-lg font-bold text-gray-900">vibe-records</h1>
            </div>
          </div>
          
          <nav className="flex-1 space-y-1 px-3 py-4">
            <div className="space-y-1">
              <a href="#" className="group flex items-center px-3 py-3 text-sm font-bold rounded-2xl transition-all duration-200 bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg">
                <House className="mr-3 h-5 w-5 flex-shrink-0 text-white" />
                Dashboard
              </a>
              <a href="#" className="group flex items-center px-3 py-3 text-sm font-medium rounded-2xl transition-all duration-200 text-gray-700 hover:bg-gray-100/50 hover:text-gray-900">
                <BarChart3 className="mr-3 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
                Analytics
              </a>
              <a href="#" className="group flex items-center px-3 py-3 text-sm font-medium rounded-2xl transition-all duration-200 text-gray-700 hover:bg-gray-100/50 hover:text-gray-900">
                <Settings className="mr-3 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
                Settings
              </a>
            </div>
            
            <div className="pt-6">
              <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Projects</h3>
              <div className="mt-2 space-y-1">
                <button className="group flex w-full items-center justify-between px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100/50 hover:text-gray-900 rounded-2xl transition-all duration-200">
                  <div className="flex items-center">
                    <Folder className="mr-3 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
                    All Projects
                  </div>
                  <span className="ml-3 inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">3</span>
                </button>
                <button className="group flex w-full items-center justify-between px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100/50 hover:text-gray-900 rounded-2xl transition-all duration-200">
                  <div className="flex items-center">
                    <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
                    Active
                  </div>
                  <span className="ml-3 inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">3</span>
                </button>
                <button className="group flex w-full items-center justify-between px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100/50 hover:text-gray-900 rounded-2xl transition-all duration-200">
                  <div className="flex items-center">
                    <Star className="mr-3 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
                    Starred
                  </div>
                  <span className="ml-3 inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">2</span>
                </button>
                <button className="group flex w-full items-center justify-between px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100/50 hover:text-gray-900 rounded-2xl transition-all duration-200">
                  <div className="flex items-center">
                    <Clock className="mr-3 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
                    Recent
                  </div>
                  <span className="ml-3 inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">3</span>
                </button>
              </div>
            </div>
            
            <div className="pt-6">
              <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Quick Actions</h3>
              <div className="mt-2 space-y-1">
                <button className="group flex w-full items-center px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100/50 hover:text-gray-900 rounded-2xl transition-all duration-200">
                  <Plus className="mr-3 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
                  Add New Project
                </button>
                <button className="group flex w-full items-center px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100/50 hover:text-gray-900 rounded-2xl transition-all duration-200">
                  <Github className="mr-3 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
                  Connect GitHub
                </button>
              </div>
            </div>
          </nav>
          
          <div className="border-t border-white/20 p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-gray-300 to-gray-400 rounded-2xl flex items-center justify-center shadow-lg">
                <User className="h-4 w-4 text-gray-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-gray-900 truncate">Vibe Coder</p>
                <p className="text-xs text-gray-500 truncate">@vibe-coder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
