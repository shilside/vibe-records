'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Github, 
  Plus, 
  Settings, 
  User, 
  BarChart3, 
  CheckCircle2, 
  Clock, 
  Star, 
  MoreVertical, 
  TrendingUp, 
  Activity, 
  Zap,
  Target,
  Lightbulb,
  Rocket
} from 'lucide-react'
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

  const addNewProject = () => {
    // TODO: Implement GitHub repo selection
    console.log('Add new project')
  }

  const totalProgress = Math.round(projects.reduce((sum, p) => sum + p.progress, 0) / projects.length)
  const activeProjects = projects.filter(p => p.status === 'active').length
  const totalPotential = Math.round(projects.reduce((sum, p) => sum + p.potentialScore, 0) / projects.length * 10)

  return (
    <div className="min-h-screen bg-black">
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
                <h1 className="text-4xl font-bold text-white sm:text-5xl font-inter">
                  Your vibes
                </h1>
                <p className="mt-3 text-base text-[#adadad]">
                  Track progress across all your projects
                </p>
              </div>
              
              {/* Add New Project Button */}
              <div className="mt-6 sm:mt-0">
                <button
                  onClick={addNewProject}
                  className="accent-button inline-flex items-center px-6 py-3"
                >
                  <Plus className="h-5 w-5 mr-2" />
                  Add new
                </button>
              </div>
            </div>
          </div>

          {/* AI Insights Metrics */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">AI Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="metric-card-accent"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-white">{totalProgress}%</p>
                    <p className="text-sm text-white/80 mt-1">Overall Progress</p>
                  </div>
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="metric-card"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-white">{totalPotential}</p>
                    <p className="text-sm text-[#9b9a9b] mt-1">Potential Score</p>
                  </div>
                  <div className="w-12 h-12 bg-[#2a2a2a] rounded-full flex items-center justify-center">
                    <Lightbulb className="h-6 w-6 text-[#adadad]" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="metric-card-light"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-[#d7d7d7]">{activeProjects}</p>
                    <p className="text-sm text-[#8e8e8e] mt-1">Active Projects</p>
                  </div>
                  <div className="w-12 h-12 bg-[#1e1e1e] rounded-full flex items-center justify-center">
                    <Rocket className="h-6 w-6 text-[#adadad]" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Your Projects</h2>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <ProjectCard 
                    project={project}
                    viewMode="list"
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
                <div className="w-20 h-20 bg-[#1e1e1e] rounded-[22px] flex items-center justify-center mx-auto mb-4 border border-[#181818]">
                  <Github className="h-10 w-10 text-[#adadad]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  No projects yet
                </h3>
                <p className="text-[#adadad] mb-6">
                  Start building your first vibe project.
                </p>
                <button
                  onClick={addNewProject}
                  className="accent-button inline-flex items-center px-6 py-3"
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
