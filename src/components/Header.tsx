'use client'

import { Menu, Plus, User } from 'lucide-react'

interface HeaderProps {
  onMenuClick: () => void
  onAddClick: () => void
}

export default function Header({ onMenuClick, onAddClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 glass-nav border-b border-[#2a2a2a] lg:hidden">
      <div className="flex items-center justify-between px-4 py-4">
        <div className="flex items-center space-x-3">
          <button
            onClick={onMenuClick}
            className="p-2 text-white hover:text-gray-200 rounded-xl hover:bg-white/10 transition-all duration-200"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#007AFF] rounded-[22px] flex items-center justify-center shadow-lg">
              <User className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-lg font-bold text-white">vibe-records</h1>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <button
            onClick={onAddClick}
            className="accent-button inline-flex items-center px-4 py-2"
          >
            <Plus className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline text-sm">Add</span>
          </button>
          <button className="p-2 text-white hover:text-gray-200 rounded-xl hover:bg-white/10 transition-all duration-200">
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
