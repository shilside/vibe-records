// GitHub API Response Types

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  clone_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  size: number;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  default_branch: string;
  topics: string[];
  visibility: 'public' | 'private';
  fork: boolean;
  archived: boolean;
  disabled: boolean;
}

export interface GitHubUser {
  id: number;
  login: string;
  name: string | null;
  email: string | null;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export interface GitHubCommit {
  sha: string;
  commit: {
    message: string;
    author: {
      name: string;
      email: string;
      date: string;
    };
  };
  author: {
    login: string;
    avatar_url: string;
  };
}

export interface GitHubBranch {
  name: string;
  commit: {
    sha: string;
    url: string;
  };
  protected: boolean;
}

// Project Progress Calculation Types
export interface ProjectProgress {
  repo: GitHubRepo;
  completion_percentage: number;
  last_activity: string;
  language_distribution: Record<string, number>;
  commit_frequency: number;
  issue_count: number;
  pr_count: number;
  estimated_mvp_readiness: 'low' | 'medium' | 'high';
}

// UI Display Types
export interface ProjectCard {
  id: string;
  name: string;
  description: string;
  language: string;
  progress: number;
  stars: number;
  forks: number;
  lastUpdated: string;
  isSelected: boolean;
  potentialScore?: number;
  status: 'ongoing' | 'completed' | 'archived';
}
