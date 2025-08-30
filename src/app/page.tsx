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
import CustomCurvedLoop from '../components/CustomCurvedLoop'

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
      
      {/* Header - Only V logo, notification, and account */}
      <header className={`sticky top-0 z-40 ${headerBg} backdrop-blur-md px-4 py-4 transition-colors duration-300 safe-area-top`}>
        <div className="flex items-center justify-between">
          {/* Left side - V Logo only */}
          <div className="flex items-center">
            {/* V Logo */}
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-[#007AFF] to-[#0056CC] rounded-xl shadow-lg">
              <span className="text-white font-bold text-xl" style={{ fontFamily: 'Orbitron, monospace' }}>V</span>
            </div>
          </div>
          
          {/* Right side - Notification + Account */}
          <div className="flex items-center space-x-3">
            {/* Notification Bell */}
            <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors shadow-lg">
              <Bell className="h-5 w-5 text-white" />
            </button>
            
            {/* Account Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors shadow-lg">
                  <User className="h-5 w-5 text-white" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-[#1A1A1A] border-none shadow-xl">
                <DropdownMenuLabel className="text-[#F0EDE5] sora-medium">My Account</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-gray-600" />
                <DropdownMenuItem className="text-[#F0EDE5] hover:bg-[#2A2A2A] cursor-pointer sora-regular">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="text-[#F0EDE5] hover:bg-[#2A2A2A] cursor-pointer sora-regular">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-gray-600" />
                <DropdownMenuItem 
                  className="text-[#F0EDE5] hover:bg-[#2A2A2A] cursor-pointer sora-regular"
                  onClick={toggleTheme}
                >
                  {isDarkMode ? (
                    <>
                      <Sun className="mr-2 h-4 w-4" />
                      Light Mode
                    </>
                  ) : (
                    <>
                      <Moon className="mr-2 h-4 w-4" />
                      Dark Mode
                    </>
                  )}
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-gray-600" />
                <DropdownMenuItem className="text-red-400 hover:bg-[#2A2A2A] cursor-pointer sora-regular">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-3 pb-6 sm:px-5 lg:px-6 safe-area-bottom" style={{ paddingLeft: '1.2rem', paddingRight: '1.2rem' }}>
        {/* Animation Space - Space for animation between nav and projects title */}
        <div className="mb-6" style={{ height: '15rem' }}>
          {/* Multi-line CurvedLoop Animation */}
          <div className="flex flex-col w-full h-full overflow-hidden motivational-spacing">
            {/* Line 1 */}
            <div className="w-full flex-shrink-0" style={{ height: '2.5rem' }}>
              <CustomCurvedLoop 
                marqueeText="Good morning Joshua 🔒 ● Locked in ● Stay locked in ● You are HIM ● Keep going ● Take a break if you have to ● Locked in means no distractions ● Locked in means road to 1 million ● Locked in means road to 1 billion ● You are the king of this sh*t ● You are about to build the biggest project ever ● Locked in ● Keep coding ● Keep vibecoding ● Keep stacking progress ● Stay locked in 🔒 ● You are HIM ● You are chosen ● You are the builder ● Locked in ● Good morning Joshua ● Stay focused ● Road to greatness ● Road to 1 million ● Road to 1 billion ● Locked in 🔒 ● Nothing can stop you ● You are the man ● You got this ● Locked in ● Keep going ● Keep pushing ● Stay locked in ● Remember you are HIM ● Remember you are the king of this sh*t ● Locked in forever ● Build ● Build ● Build ● Locked in ● Keep rising ● Keep shining ● Good morning Joshua 🔒 ● Road to 1 million ● Road to 1 billion ● Locked in ● Stay locked in"
                speed={2.5}
                curveAmount={0}
                interactive={false}
                className="lexend-semibold"
              />
            </div>
            
            {/* Line 2 */}
            <div className="w-full flex-shrink-0" style={{ height: '2.5rem' }}>
              <CustomCurvedLoop 
                marqueeText="You are the builder ● Locked in ● Good morning Joshua ● Stay focused ● Road to greatness ● Road to 1 million ● Road to 1 billion ● Locked in 🔒 ● Nothing can stop you ● You are the man ● You got this ● Locked in ● Keep going ● Keep pushing ● Stay locked in ● Remember you are HIM ● Remember you are the king of this sh*t ● Locked in forever ● Build ● Build ● Build ● Locked in ● Keep rising ● Keep shining ● Good morning Joshua 🔒 ● Road to 1 million ● Road to 1 billion ● Locked in ● Stay locked in ● You are HIM ● Keep going ● Take a break if you have to ● Locked in means no distractions ● Locked in means road to 1 million ● Locked in means road to 1 billion ● You are the king of this sh*t ● You are about to build the biggest project ever ● Locked in ● Keep coding ● Keep vibecoding ● Keep stacking progress ● Stay locked in 🔒 ● You are HIM ● You are chosen"
                speed={2.8}
                curveAmount={0}
                interactive={false}
                className="lexend-semibold"
              />
            </div>
            
            {/* Line 3 */}
            <div className="w-full flex-shrink-0" style={{ height: '2.5rem' }}>
              <CustomCurvedLoop 
                marqueeText="Locked in means road to 1 million ● Locked in means road to 1 billion ● You are the king of this sh*t ● You are about to build the biggest project ever ● Locked in ● Keep coding ● Keep vibecoding ● Keep stacking progress ● Stay locked in 🔒 ● You are HIM ● You are chosen ● You are the builder ● Locked in ● Good morning Joshua ● Stay focused ● Road to greatness ● Road to 1 million ● Road to 1 billion ● Locked in 🔒 ● Nothing can stop you ● You are the man ● You got this ● Locked in ● Keep going ● Keep pushing ● Stay locked in ● Remember you are HIM ● Remember you are the king of this sh*t ● Locked in forever ● Build ● Build ● Build ● Locked in ● Keep rising ● Keep shining ● Good morning Joshua 🔒 ● Road to 1 million ● Road to 1 billion ● Locked in ● Stay locked in ● You are HIM ● Keep going ● Take a break if you have to ● Locked in means no distractions"
                speed={3.1}
                curveAmount={0}
                interactive={false}
                className="lexend-semibold"
              />
            </div>
            
            {/* Line 4 */}
            <div className="w-full flex-shrink-0" style={{ height: '2.5rem' }}>
              <CustomCurvedLoop 
                marqueeText="Keep coding ● Keep vibecoding ● Keep stacking progress ● Stay locked in 🔒 ● You are HIM ● You are chosen ● You are the builder ● Locked in ● Good morning Joshua ● Stay focused ● Road to greatness ● Road to 1 million ● Road to 1 billion ● Locked in 🔒 ● Nothing can stop you ● You are the man ● You got this ● Locked in ● Keep going ● Keep pushing ● Stay locked in ● Remember you are HIM ● Remember you are the king of this sh*t ● Locked in forever ● Build ● Build ● Build ● Locked in ● Keep rising ● Keep shining ● Good morning Joshua 🔒 ● Road to 1 million ● Road to 1 billion ● Locked in ● Stay locked in ● You are HIM ● Keep going ● Take a break if you have to ● Locked in means no distractions ● Locked in means road to 1 million ● Locked in means road to 1 billion ● You are the king of this sh*t ● You are about to build the biggest project ever ● Locked in"
                speed={2.7}
                curveAmount={0}
                interactive={false}
                className="lexend-semibold"
              />
            </div>
            
            {/* Line 5 */}
            <div className="w-full flex-shrink-0" style={{ height: '2.5rem' }}>
              <CustomCurvedLoop 
                marqueeText="Remember you are HIM ● Remember you are the king of this sh*t ● Locked in forever ● Build ● Build ● Build ● Locked in ● Keep rising ● Keep shining ● Good morning Joshua 🔒 ● Road to 1 million ● Road to 1 billion ● Locked in ● Stay locked in ● You are HIM ● Keep going ● Take a break if you have to ● Locked in means no distractions ● Locked in means road to 1 million ● Locked in means road to 1 billion ● You are the king of this sh*t ● You are about to build the biggest project ever ● Locked in ● Keep coding ● Keep vibecoding ● Keep stacking progress ● Stay locked in 🔒 ● You are HIM ● You are chosen ● You are the builder ● Locked in ● Good morning Joshua ● Stay focused ● Road to greatness ● Road to 1 million ● Road to 1 billion ● Locked in 🔒 ● Nothing can stop you ● You are the man ● You got this ● Locked in ● Keep going ● Keep pushing ● Stay locked in"
                speed={2.9}
                curveAmount={0}
                interactive={false}
                className="lexend-semibold"
              />
            </div>
          </div>
        </div>
        
        {/* Projects Title - Close to search bar */}
        <div className="mb-4">
          <h1 className={`text-3xl ${textColor} sora-black lowercase`}>projects</h1>
        </div>
        
        {/* Search and Controls Section */}
        <div className="mb-6">
          {/* Search Bar */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="search projects"
              className={`w-full pl-10 pr-4 py-3 ${cardColor} rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-[#007AFF] transition-all duration-300 ${cardTextColor} placeholder-${cardTextColor}/60 sora-regular shadow-lg`}
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
              <select className={`${cardColor} ${cardTextColor} px-3 py-2 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-[#007AFF] transition-all duration-300 sora-regular text-sm shadow-lg`}>
                <option>sort by last active</option>
                <option>sort by name</option>
                <option>sort by progress</option>
                <option>sort by date created</option>
              </select>
            </div>
            
            {/* Layout Toggle Icons */}
            <div className="flex items-center space-x-2">
              <button className={`p-2 rounded-lg transition-all duration-300 ${cardColor} hover:bg-[#2A2A2A] shadow-lg`}>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button className={`p-2 rounded-lg transition-all duration-300 ${cardColor} hover:bg-[#2A2A2A] shadow-lg`}>
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
        
        {/* Add Project Button - Fixed colors */}
        <div className="mb-6 flex justify-end">
          <button
            onClick={addNewProject}
            className={`${cardColor} ${cardTextColor} px-4 py-2 rounded-lg font-medium hover:bg-[#2A2A2A] transition-all duration-300 flex items-center space-x-2 sora-medium shadow-lg border border-white/10`}
          >
            <Plus className="h-4 w-4" />
            <span>add project</span>
          </button>
        </div>
        
        {/* Ongoing Section - Only section we're keeping */}
        <div className="space-y-6">
          {/* Ongoing Tasks */}
          <div className={`${cardColor} rounded-2xl p-6 shadow-xl transition-colors duration-300 border border-white/5`}>
            <button
              onClick={() => toggleSection('ongoing')}
              className="w-full flex items-center justify-between mb-4"
            >
              <h3 className={`text-2xl ${cardTextColor} sora-black lowercase`}>ongoing</h3>
              <div className="flex items-center space-x-2">
                <span className="bg-[#007AFF] text-white px-3 py-1 rounded-full text-sm font-medium sora-medium shadow-lg">
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
          <div className={`${cardColor} rounded-2xl p-6 shadow-xl transition-colors duration-300 border border-white/5`}>
            <button
              onClick={() => toggleSection('completed')}
              className="w-full flex items-center justify-between mb-4"
            >
              <h3 className={`text-2xl ${cardTextColor} sora-black lowercase`}>completed</h3>
              <div className="flex items-center space-x-2">
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium sora-medium shadow-lg">
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
                    onClick={() => toggleSection('ongoing')}
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
