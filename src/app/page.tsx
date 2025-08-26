'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Plus, 
  User, 
  Bell,
  CheckCircle2, 
  Circle,
  Check,
  ChevronDown,
  ChevronUp
} from 'lucide-react'
import { Project } from '@/types/project'

// Dummy data for MVP testing
const dummyProjects: Project[] = [
  {
    id: '1',
    name: 'Portfolio Site',
    description: 'Personal portfolio website with modern design and animations',
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
    description: 'Real-time messaging application with WebSocket',
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
    description: '2D platformer game with Unity and C#',
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
  },
  {
    id: '4',
    name: 'E-commerce Platform',
    description: 'Full-stack online shopping platform',
    progress: 89,
    potentialScore: 9.2,
    status: 'active',
    lastUpdated: '2024-01-14',
    language: 'React',
    stars: 23,
    forks: 8,
    tasks: [
      { id: '1', text: 'User authentication', completed: true },
      { id: '2', text: 'Product catalog', completed: true },
      { id: '3', text: 'Shopping cart', completed: true },
      { id: '4', text: 'Payment integration', completed: false }
    ]
  }
]

export default function Dashboard() {
  const [projects, setProjects] = useState<Project[]>(dummyProjects)
  const [expandedSections, setExpandedSections] = useState({
    ongoing: true,
    completed: false
  })

  const addNewProject = () => {
    // TODO: Implement GitHub repo selection
    console.log('Add new project')
  }

  const toggleSection = (section: 'ongoing' | 'completed') => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const ongoingProjects = projects.filter(p => p.progress < 100)
  const completedProjects = projects.filter(p => p.progress === 100)
  const totalProgress = Math.round(projects.reduce((sum, p) => sum + p.progress, 0) / projects.length)

  return (
    <div className="min-h-screen bg-[#373539]">
      {/* Header - No bottom border */}
      <header className="sticky top-0 z-40 bg-[#373539]/95 backdrop-blur-md px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Left side - Hello + Username */}
          <div className="flex flex-col">
            <span className="text-lg text-white">Hello</span>
            <span className="text-3xl font-bold text-white">Mufidul</span>
          </div>
          
          {/* Right side - Bell + Account icons (bigger) */}
          <div className="flex items-center space-x-4">
            <button className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors">
              <Bell className="h-6 w-6 text-white" />
            </button>
            <button className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center border border-white/10 hover:bg-white/30 transition-colors">
              <User className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 pb-6 sm:px-6 lg:px-8">
        {/* Your Projects Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white">Your Projects</h2>
            <button
              onClick={addNewProject}
              className="bg-white text-gray-900 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors flex items-center space-x-2"
            >
              <Plus className="h-4 w-4" />
              <span>Add</span>
            </button>
          </div>
          
          {/* Horizontal Scrollable Project Cards */}
          <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
            {projects.map((project) => (
              <div key={project.id} className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                  </div>
                </div>
                
                {/* AI Rating */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">AI Rating</span>
                  <span className="text-2xl font-bold text-[#007AFF]">{project.potentialScore}</span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${project.progress}%` }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="h-2 rounded-full bg-gradient-to-r from-[#383838] via-[#1e1e1e] to-[#040404]"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{project.progress}% Complete</span>
                  <span className="text-xs text-gray-500">{project.language}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Locked In Meter */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold text-white">Locked in meter</h3>
            <span className="text-2xl font-bold text-white">{totalProgress}%</span>
          </div>
          
          {/* Thin Progress Bar */}
          <div className="w-full bg-gray-700 rounded-full h-1">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${totalProgress}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-1 rounded-full bg-gradient-to-r from-[#383838] via-[#1e1e1e] to-[#040404]"
            />
          </div>
        </div>

        {/* Task Sections */}
        <div className="space-y-6">
          {/* Ongoing Tasks */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <button
              onClick={() => toggleSection('ongoing')}
              className="w-full flex items-center justify-between mb-4"
            >
              <h3 className="text-xl font-bold text-gray-900">Ongoing</h3>
              <div className="flex items-center space-x-2">
                <span className="bg-[#007AFF] text-white px-3 py-1 rounded-full text-sm font-medium">
                  {ongoingProjects.length}
                </span>
                {ongoingProjects.length > 4 && (
                  expandedSections.ongoing ? <ChevronUp className="h-5 w-5 text-gray-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </div>
            </button>
            
            {expandedSections.ongoing && (
              <div className="space-y-3">
                {ongoingProjects.slice(0, expandedSections.ongoing ? undefined : 4).map((project) => (
                  <div key={project.id} className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{project.name}</p>
                      <p className="text-sm text-gray-500">{project.description}</p>
                    </div>
                    <span className="text-sm text-gray-500">{project.progress}%</span>
                  </div>
                ))}
                {ongoingProjects.length > 4 && !expandedSections.ongoing && (
                  <button
                    onClick={() => toggleSection('ongoing')}
                    className="w-full text-center py-2 text-[#007AFF] hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    Show {ongoingProjects.length - 4} more projects
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Completed Tasks */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <button
              onClick={() => toggleSection('completed')}
              className="w-full flex items-center justify-between mb-4"
            >
              <h3 className="text-xl font-bold text-gray-900">Completed</h3>
              <div className="flex items-center space-x-2">
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                  {completedProjects.length}
                </span>
                {completedProjects.length > 4 && (
                  expandedSections.completed ? <ChevronUp className="h-5 w-5 text-gray-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </div>
            </button>
            
            {expandedSections.completed && (
              <div className="space-y-3">
                {completedProjects.slice(0, expandedSections.completed ? undefined : 4).map((project) => (
                  <div key={project.id} className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="w-5 h-5 rounded-full border-2 border-[#007AFF] bg-[#007AFF] flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 line-through">{project.name}</p>
                      <p className="text-sm text-gray-500">{project.description}</p>
                    </div>
                    <span className="text-sm text-gray-500">100%</span>
                  </div>
                ))}
                {completedProjects.length > 4 && !expandedSections.completed && (
                  <button
                    onClick={() => toggleSection('completed')}
                    className="w-full text-center py-2 text-[#007AFF] hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    Show {completedProjects.length - 4} more projects
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
