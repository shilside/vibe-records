import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})

// Database types (will be generated from Supabase)
export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          username: string
          email: string
          avatar_url: string
          github_username: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          username: string
          email: string
          avatar_url: string
          github_username?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          username?: string
          email?: string
          avatar_url?: string
          github_username?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      projects: {
        Row: {
          id: string
          user_id: string
          name: string
          description: string
          progress: number
          potential_score: number
          status: string
          last_updated: string
          language: string
          stars: number
          forks: number
          github_url: string | null
          homepage: string | null
          topics: string[]
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          description: string
          progress: number
          potential_score: number
          status: string
          last_updated: string
          language: string
          stars: number
          forks: number
          github_url?: string | null
          homepage?: string | null
          topics?: string[]
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          description?: string
          progress?: number
          potential_score?: number
          status?: string
          last_updated?: string
          language?: string
          stars?: number
          forks?: number
          github_url?: string | null
          homepage?: string | null
          topics?: string[]
          created_at?: string
          updated_at?: string
        }
      }
      tasks: {
        Row: {
          id: string
          project_id: string
          text: string
          completed: boolean
          created_at: string
          completed_at: string | null
        }
        Insert: {
          id?: string
          project_id: string
          text: string
          completed?: boolean
          created_at?: string
          completed_at?: string | null
        }
        Update: {
          id?: string
          project_id?: string
          text?: string
          completed?: boolean
          created_at?: string
          completed_at?: string | null
        }
      }
      progress_entries: {
        Row: {
          id: string
          project_id: string
          progress: number
          notes: string | null
          created_at: string
        }
        Insert: {
          id?: string
          project_id: string
          progress: number
          notes?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          project_id?: string
          progress?: number
          notes?: string | null
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
