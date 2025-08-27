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
  ChevronUp,
  Sun,
  Moon,
  Settings,
  LogOut
} from 'lucide-react'
import { Project } from '@/types/project'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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
  const [isDarkMode, setIsDarkMode] = useState(true)

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

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const ongoingProjects = projects.filter(p => p.progress < 100)
  const completedProjects = projects.filter(p => p.progress === 100)
  const totalProgress = Math.round(projects.reduce((sum, p) => sum + p.progress, 0) / projects.length)

  // Theme-based colors - Updated to match sophisticated dark theme
  const bgColor = isDarkMode ? 'bg-[#0A0A0A]' : 'bg-[#F0EDE5]'
  const cardColor = isDarkMode ? 'bg-[#1A1A1A]' : 'bg-[#E8E4D8]'
  const textColor = isDarkMode ? 'text-white' : 'text-[#373539]'
  const cardTextColor = isDarkMode ? 'text-[#F0EDE5]' : 'text-[#373539]'
  const headerBg = isDarkMode ? 'bg-[#0A0A0A]/95' : 'bg-[#F0EDE5]/95'

  return (
    <div className={`min-h-screen ${bgColor} transition-colors duration-300 sora-regular safe-area-top safe-area-bottom`}>
      {/* iOS Status Bar Fix */}
      <div className="ios-status-bar"></div>
      
      {/* Header - Simplified like reference image */}
      <header className={`sticky top-0 z-40 ${headerBg} backdrop-blur-md px-4 py-4 transition-colors duration-300 safe-area-top`}>
        <div className="flex items-center justify-between">
          {/* Left side - Just projects title */}
          <div className="flex flex-col">
            <span className={`text-2xl ${textColor} sora-black lowercase`}>projects</span>
          </div>
          
          {/* Right side - Add project button */}
          <button
            onClick={addNewProject}
            className="bg-[#007AFF] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#0056CC] transition-colors flex items-center space-x-2 sora-medium"
          >
            <Plus className="h-4 w-4" />
            <span>add project</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 pb-6 sm:px-6 lg:px-8 safe-area-bottom">
        {/* Search and Controls Section */}
        <div className="mb-6">
          {/* Search Bar */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="search projects"
              className={`w-full pl-10 pr-4 py-3 ${cardColor} rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-[#007AFF] transition-all duration-300 ${cardTextColor} placeholder-${cardTextColor}/60 sora-regular`}
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          
          {/* Controls Row */}
          <div className="flex items-center justify-between">
            {/* Sort Dropdown */}
            <div className="flex items-center space-x-2">
              <select className={`${cardColor} ${cardTextColor} px-3 py-2 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-[#007AFF] transition-all duration-300 sora-regular text-sm`}>
                <option>sort by last active</option>
                <option>sort by name</option>
                <option>sort by progress</option>
                <option>sort by date created</option>
              </select>
            </div>
            
            {/* Layout Toggle Icons */}
            <div className="flex items-center space-x-2">
              <button className={`p-2 rounded-lg transition-all duration-300 ${cardColor} hover:bg-[#2A2A2A]`}>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button className={`p-2 rounded-lg transition-all duration-300 ${cardColor} hover:bg-[#2A2A2A]`}>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Animation Space - 20px height */}
        <div className="h-5 mb-6">
          {/* This space is reserved for future animations */}
        </div>
        
        {/* Horizontal Scrollable Project Cards - Compressed */}
        <div className="mb-8">
          <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
            {projects.map((project) => (
              <div key={project.id} className={`flex-shrink-0 w-80 ${cardColor} rounded-2xl p-4 shadow-lg transition-colors duration-300`}>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className={`text-lg ${cardTextColor} mb-1 sora-black`}>{project.name}</h3>
                    <p className={`${cardTextColor}/80 text-xs leading-relaxed sora-thin`}>{project.description}</p>
                  </div>
                </div>
                
                {/* Completion Rate instead of AI Rating */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs ${cardTextColor}/60 sora-thin`}>Completion Rate</span>
                  <span className="text-xl text-[#007AFF] sora-black">{project.progress}%</span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-700 rounded-full h-1.5 mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${project.progress}%` }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="h-1.5 rounded-full bg-gradient-to-r from-[#383838] via-[#1e1e1e] to-[#040404]"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <span className={`text-xs ${cardTextColor}/60 sora-thin`}>{project.progress}% Complete</span>
                  <span className={`text-xs ${cardTextColor}/60 sora-thin`}>{project.language}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Locked In Meter - Thicker and more visible */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <h3 className={`text-xl ${textColor} sora-black`}>Locked in meter</h3>
            <span className={`text-3xl ${textColor} sora-black`}>{totalProgress}%</span>
          </div>
          
          {/* Thicker Progress Bar */}
          <div className="w-full bg-gray-600 rounded-full h-3">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${totalProgress}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-3 rounded-full bg-gradient-to-r from-[#383838] via-[#1e1e1e] to-[#040404]"
            />
          </div>
        </div>

        {/* Task Sections */}
        <div className="space-y-6">
          {/* Ongoing Tasks */}
          <div className={`${cardColor} rounded-2xl p-6 shadow-lg transition-colors duration-300`}>
            <button
              onClick={() => toggleSection('ongoing')}
              className="w-full flex items-center justify-between mb-4"
            >
              <h3 className={`text-2xl ${cardTextColor} sora-black`}>Ongoing</h3>
              <div className="flex items-center space-x-2">
                <span className="bg-[#007AFF] text-white px-3 py-1 rounded-full text-sm font-medium sora-medium">
                  {ongoingProjects.length}
                </span>
                {ongoingProjects.length > 4 && (
                  expandedSections.ongoing ? <ChevronUp className="h-5 w-5 text-[#F0EDE5]" /> : <ChevronDown className="h-5 w-5 text-[#F0EDE5]" />
                )}
              </div>
            </button>
            
            {expandedSections.ongoing && (
              <div className="space-y-3">
                {ongoingProjects.slice(0, expandedSections.ongoing ? undefined : 4).map((project) => (
                  <div key={project.id} className="flex items-center space-x-3 p-3 rounded-xl hover:bg-[#2A2A2A] transition-colors">
                    <div className="w-5 h-5 rounded-full border-2 border-gray-400 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                    </div>
                    <div className="flex-1">
                      <p className={`font-medium ${cardTextColor} text-sm sora-black`}>{project.name}</p>
                      <p className={`text-xs ${cardTextColor}/70 sora-thin`}>{project.description}</p>
                    </div>
                    <span className={`text-xs ${cardTextColor}/70 sora-thin`}>{project.progress}%</span>
                  </div>
                ))}
                {ongoingProjects.length > 4 && !expandedSections.ongoing && (
                  <button
                    onClick={() => toggleSection('ongoing')}
                    className="w-full text-center py-2 text-[#007AFF] hover:bg-[#2A2A2A] rounded-lg transition-colors sora-regular"
                  >
                    Show {ongoingProjects.length - 4} more projects
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Completed Tasks */}
          <div className={`${cardColor} rounded-2xl p-6 shadow-lg transition-colors duration-300`}>
            <button
              onClick={() => toggleSection('completed')}
              className="w-full flex items-center justify-between mb-4"
            >
              <h3 className={`text-2xl ${cardTextColor} sora-black`}>Completed</h3>
              <div className="flex items-center space-x-2">
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium sora-medium">
                  {completedProjects.length}
                </span>
                {completedProjects.length > 4 && (
                  expandedSections.completed ? <ChevronUp className="h-5 w-5 text-[#F0EDE5]" /> : <ChevronDown className="h-5 w-5 text-[#F0EDE5]" />
                )}
              </div>
            </button>
            
            {expandedSections.completed && (
              <div className="space-y-3">
                {completedProjects.slice(0, expandedSections.completed ? undefined : 4).map((project) => (
                  <div key={project.id} className="flex items-center space-x-3 p-3 rounded-xl hover:bg-[#2A2A2A] transition-colors">
                    <div className="w-5 h-5 rounded-full border-2 border-[#007AFF] bg-[#007AFF] flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className={`font-medium ${cardTextColor} line-through text-sm sora-black`}>{project.name}</p>
                      <p className={`text-xs ${cardTextColor}/70 sora-thin`}>{project.description}</p>
                    </div>
                    <span className={`text-xs ${cardTextColor}/70 sora-thin`}>100%</span>
                  </div>
                ))}
                {completedProjects.length > 4 && !expandedSections.completed && (
                  <button
                    onClick={() => toggleSection('completed')}
                    className="w-full text-center py-2 text-[#007AFF] hover:bg-[#2A2A2A] rounded-lg transition-colors sora-regular"
                  >
                    Show {completedProjects.length - 4} more projects
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
      
      {/* iOS Home Indicator Fix */}
      <div className="ios-home-indicator"></div>
    </div>
  )
}
