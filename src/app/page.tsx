'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Plus, Settings, User, BarChart3, CheckCircle2, Clock, Star, MoreVertical, TrendingUp, Activity, Zap } from 'lucide-react'
import ProjectCard from '@/components/ProjectCard'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import { Project } from '@/types/project'

// Dummy data for MVP testing
const dummyProjects: Project[] = [
  {
    id: '1',
    name: 'Portfolio Site',
    description: 'Personal portfolio website with modern design',
    progress: 72,
    potentialScore: 7.9,
    status: 'active',
    lastUpdated: '2024-01-15',
    language: 'TypeScript',
    stars: 12,
    forks: 3,
    tasks: [
      { id: '1', text: 'Design homepage layout', completed: true },
      { id: '2', text: 'Build responsive components', completed: true },
      { id: '3', text: 'Add animations', completed: false },
      { id: '4', text: 'Deploy to production', completed: false }
    ]
  },
  {
    id: '2',
    name: 'Chat App',
    description: 'Real-time messaging application',
    progress: 24,
    potentialScore: 6.3,
    status: 'active',
    lastUpdated: '2024-01-10',
    language: 'JavaScript',
    stars: 8,
    forks: 2,
    tasks: [
      { id: '1', text: 'Set up WebSocket', completed: true },
      { id: '2', text: 'Build chat interface', completed: false },
      { id: '3', text: 'Add user authentication', completed: false },
      { id: '4', text: 'Implement file sharing', completed: false }
    ]
  },
  {
    id: '3',
    name: 'Game Dev',
    description: '2D platformer game development',
    progress: 56,
    potentialScore: 8.5,
    status: 'active',
    lastUpdated: '2024-01-12',
    language: 'C#',
    stars: 15,
    forks: 5,
    tasks: [
      { id: '1', text: 'Create player character', completed: true },
      { id: '2', text: 'Design level mechanics', completed: true },
      { id: '3', text: 'Add sound effects', completed: false },
      { id: '4', text: 'Polish gameplay', completed: false }
    ]
  }
]

export default function Dashboard() {
  const [projects, setProjects] = useState<Project[]>(dummyProjects)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const addNewProject = () => {
    // TODO: Implement GitHub repo selection
    console.log('Add new project')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Mobile Header */}
      <Header 
        onMenuClick={() => setSidebarOpen(true)}
        onAddClick={addNewProject}
      />

      {/* Sidebar */}
      <Sidebar 
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Content */}
      <main className="lg:pl-64">
        <div className="px-4 py-8 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl font-inter">
                  Your vibes
                </h1>
                <p className="mt-3 text-base text-gray-600">
                  Track progress across all your projects
                </p>
              </div>
              
              {/* Add New Project Button */}
              <div className="mt-6 sm:mt-0">
                <button
                  onClick={addNewProject}
                  className="gradient-button inline-flex items-center px-6 py-3"
                >
                  <Plus className="h-5 w-5 mr-2" />
                  Add new
                </button>
              </div>
            </div>
          </div>

          {/* Quick Stats Row */}
          <div className="mb-8 grid grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card p-4 text-center"
            >
              <div className="w-10 h-10 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-2">
                <TrendingUp className="h-5 w-5 text-gray-600" />
              </div>
              <p className="text-sm font-medium text-gray-600">Total</p>
              <p className="text-xl font-bold text-gray-900">{projects.length}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-4 text-center"
            >
              <div className="w-10 h-10 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-2">
                <Activity className="h-5 w-5 text-gray-600" />
              </div>
              <p className="text-sm font-medium text-gray-600">Active</p>
              <p className="text-xl font-bold text-gray-900">
                {projects.filter(p => p.status === 'active').length}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card p-4 text-center"
            >
              <div className="w-10 h-10 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-2">
                <Zap className="h-5 w-5 text-gray-600" />
              </div>
              <p className="text-sm font-medium text-gray-600">Avg</p>
              <p className="text-xl font-bold text-gray-900">
                {Math.round(projects.reduce((sum, p) => sum + p.progress, 0) / projects.length)}%
              </p>
            </motion.div>
          </div>

          {/* Projects List */}
          <div className="space-y-6">
            <div className="grid gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <ProjectCard 
                    project={project}
                    viewMode={viewMode}
                  />
                </motion.div>
              ))}
            </div>

            {/* Empty State */}
            {projects.length === 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <div className="w-20 h-20 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-4">
                  <Github className="h-10 w-10 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No projects yet
                </h3>
                <p className="text-gray-600 mb-6">
                  Start building your first vibe project.
                </p>
                <button
                  onClick={addNewProject}
                  className="gradient-button inline-flex items-center px-6 py-3"
                >
                  <Plus className="h-5 w-5 mr-2" />
                  Add Your First Project
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
