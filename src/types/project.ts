export interface Task {
  id: string
  text: string
  completed: boolean
  createdAt?: string
  completedAt?: string
}

export interface Project {
  id: string
  name: string
  description: string
  progress: number // 0-100
  potentialScore: number // 0-100
  status: 'active' | 'paused' | 'completed' | 'archived'
  lastUpdated: string
  language: string
  stars: number
  forks: number
  tasks: Task[]
  githubUrl?: string
  homepage?: string
  topics?: string[]
  createdAt?: string
  updatedAt?: string
}

export interface User {
  id: string
  username: string
  email: string
  avatarUrl: string
  githubUsername?: string
  createdAt: string
  updatedAt: string
}

export interface GitHubRepo {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  topics: string[]
  updated_at: string
  created_at: string
  private: boolean
  fork: boolean
}

export interface ProgressEntry {
  id: string
  projectId: string
  progress: number
  notes?: string
  createdAt: string
}

export interface AIInsight {
  id: string
  projectId: string
  type: 'progress_estimation' | 'potential_score' | 'recommendation'
  content: string
  confidence: number
  createdAt: string
}
