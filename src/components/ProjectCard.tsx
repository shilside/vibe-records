'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChevronDown, 
  ChevronUp, 
  Star, 
  GitFork, 
  Clock, 
  CheckCircle2, 
  Circle,
  ExternalLink,
  Settings,
  MoreVertical
} from 'lucide-react'
import { Project } from '@/types/project'

interface ProjectCardProps {
  project: Project
  viewMode: 'grid' | 'list'
}

export default function ProjectCard({ project, viewMode }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const getProgressBarColor = (progress: number) => {
    if (progress >= 70) return 'bg-green-500'
    if (progress >= 50) return 'bg-blue-500'
    return 'bg-gray-400'
  }

  const completedTasks = project.tasks.filter(task => task.completed).length
  const totalTasks = project.tasks.length

  return (
    <motion.div
      layout
      className="glass-card p-6 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:scale-[1.01]"
    >
      {/* Card Content */}
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          {/* Project Name */}
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            {project.name}
          </h3>
          
          {/* Progress Section */}
          <div className="space-y-4 mb-6">
            {/* Progress Bar */}
            <div className="progress-bar h-3">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${project.progress}%` }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className={`progress-fill ${getProgressBarColor(project.progress)}`}
              />
            </div>
            
            {/* Progress Info */}
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-gray-900">
                {project.progress}%
              </span>
              <span className="text-sm text-gray-600">
                {totalTasks - completedTasks} tasks remaining
              </span>
            </div>
          </div>
        </div>

        {/* Dropdown Menu Icon */}
        <button className="ml-4 p-2 text-gray-400 hover:text-gray-600 rounded-xl hover:bg-gray-100/50 transition-all duration-200">
          <MoreVertical className="h-4 w-4" />
        </button>
      </div>

      {/* Project Stats */}
      <div className="flex items-center justify-between pt-6 border-t border-gray-100">
        <div className="flex items-center space-x-6 text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <Star className="h-4 w-4" />
            <span>{project.stars}</span>
          </div>
          <div className="flex items-center space-x-2">
            <GitFork className="h-4 w-4" />
            <span>{project.forks}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4" />
            <span className="hidden sm:inline">
              {new Date(project.lastUpdated).toLocaleDateString()}
            </span>
            <span className="sm:hidden">
              {new Date(project.lastUpdated).toLocaleDateString('en', { month: 'short', day: 'numeric' })}
            </span>
          </div>
        </div>

        {/* Language Badge */}
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
          {project.language}
        </span>
      </div>

      {/* Expandable Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="border-t border-gray-100 mt-6 pt-6"
          >
            <div className="space-y-6">
              {/* Tasks Section */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-semibold text-gray-900">
                    Tasks ({completedTasks}/{totalTasks})
                  </h4>
                  <span className="text-xs text-gray-500">
                    {Math.round((completedTasks / totalTasks) * 100)}% complete
                  </span>
                </div>
                
                <div className="space-y-3">
                  {project.tasks.map((task) => (
                    <div key={task.id} className="flex items-center space-x-3">
                      {task.completed ? (
                        <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                      ) : (
                        <Circle className="h-4 w-4 text-gray-400 flex-shrink-0" />
                      )}
                      <span className={`text-sm ${
                        task.completed 
                          ? 'text-gray-500 line-through' 
                          : 'text-gray-700'
                      }`}>
                        {task.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <div className="flex items-center space-x-3">
                  <button className="glass-button px-4 py-2 text-sm font-medium text-gray-700">
                    <Settings className="h-4 w-4 mr-2" />
                    Edit Progress
                  </button>
                  <button className="glass-button px-4 py-2 text-sm font-medium text-gray-700">
                    <CheckCircle2 className="h-4 w-4 mr-2" />
                    Update Tasks
                  </button>
                </div>
                
                <div className="flex items-center space-x-3">
                  <button className="gradient-button px-4 py-2 text-sm">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View on GitHub
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
