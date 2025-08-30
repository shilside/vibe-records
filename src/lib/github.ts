import { GitHubRepo, GitHubUser, GitHubCommit, ProjectProgress, ProjectCard } from '@/types/github';

export class GitHubAPI {
  private token: string;
  private baseURL = 'https://api.github.com';

  constructor(token: string) {
    this.token = token;
  }

  private async fetchGitHubAPI<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      headers: {
        'Authorization': `token ${this.token}`,
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'vibe-records-app',
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  // Get user information
  async getUser(username: string): Promise<GitHubUser> {
    return this.fetchGitHubAPI<GitHubUser>(`/users/${username}`);
  }

  // Get user's repositories
  async getUserRepos(username: string, options: {
    type?: 'all' | 'owner' | 'public' | 'private' | 'member';
    sort?: 'created' | 'updated' | 'pushed' | 'full_name';
    direction?: 'asc' | 'desc';
    per_page?: number;
    page?: number;
  } = {}): Promise<GitHubRepo[]> {
    const params = new URLSearchParams();
    
    if (options.type) params.append('type', options.type);
    if (options.sort) params.append('sort', options.sort);
    if (options.direction) params.append('direction', options.direction);
    if (options.per_page) params.append('per_page', options.per_page.toString());
    if (options.page) params.append('page', options.page.toString());

    const queryString = params.toString();
    const endpoint = `/users/${username}/repos${queryString ? `?${queryString}` : ''}`;
    
    return this.fetchGitHubAPI<GitHubRepo[]>(endpoint);
  }

  // Get repository details
  async getRepo(owner: string, repo: string): Promise<GitHubRepo> {
    return this.fetchGitHubAPI<GitHubRepo>(`/repos/${owner}/${repo}`);
  }

  // Get repository commits
  async getRepoCommits(owner: string, repo: string, options: {
    sha?: string;
    path?: string;
    author?: string;
    since?: string;
    until?: string;
    per_page?: number;
    page?: number;
  } = {}): Promise<GitHubCommit[]> {
    const params = new URLSearchParams();
    
    if (options.sha) params.append('sha', options.sha);
    if (options.path) params.append('path', options.path);
    if (options.author) params.append('author', options.author);
    if (options.since) params.append('since', options.since);
    if (options.until) params.append('until', options.until);
    if (options.per_page) params.append('per_page', options.per_page.toString());
    if (options.page) params.append('page', options.page.toString());

    const queryString = params.toString();
    const endpoint = `/repos/${owner}/${repo}/commits${queryString ? `?${queryString}` : ''}`;
    
    return this.fetchGitHubAPI<GitHubCommit[]>(endpoint);
  }

  // Calculate project progress
  async calculateProjectProgress(repo: GitHubRepo): Promise<ProjectProgress> {
    try {
      // Get recent commits (last 30 days)
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      
      const commits = await this.getRepoCommits(
        repo.full_name.split('/')[0], 
        repo.full_name.split('/')[1], 
        { 
          since: thirtyDaysAgo.toISOString(),
          per_page: 100 
        }
      );

      // Calculate basic metrics
      const commitFrequency = commits.length;
      const lastActivity = commits[0]?.commit.author.date || repo.updated_at;
      
      // Simple progress calculation based on various factors
      let completionPercentage = 0;
      
      // Base score from repository activity
      if (commitFrequency > 20) completionPercentage += 30;
      else if (commitFrequency > 10) completionPercentage += 20;
      else if (commitFrequency > 5) completionPercentage += 10;
      
      // Score from repository size and structure
      if (repo.size > 1000) completionPercentage += 20; // Large codebase
      if (repo.description && repo.description.length > 20) completionPercentage += 10; // Good description
      if (repo.topics && repo.topics.length > 0) completionPercentage += 10; // Has topics
      if (repo.stargazers_count > 0) completionPercentage += 10; // Has stars
      if (repo.forks_count > 0) completionPercentage += 10; // Has forks
      if (repo.open_issues_count === 0) completionPercentage += 10; // No open issues
      
      // Cap at 100%
      completionPercentage = Math.min(completionPercentage, 100);
      
      // Determine MVP readiness
      let estimatedMvpReadiness: 'low' | 'medium' | 'high' = 'low';
      if (completionPercentage >= 70) estimatedMvpReadiness = 'high';
      else if (completionPercentage >= 40) estimatedMvpReadiness = 'medium';

      return {
        repo,
        completion_percentage: completionPercentage,
        last_activity: lastActivity,
        language_distribution: { [repo.language || 'Unknown']: 100 },
        commit_frequency: commitFrequency,
        issue_count: repo.open_issues_count,
        pr_count: 0, // Would need additional API call
        estimated_mvp_readiness: estimatedMvpReadiness,
      };
    } catch (error) {
      console.error(`Error calculating progress for ${repo.name}:`, error);
      
      // Return basic progress if calculation fails
      return {
        repo,
        completion_percentage: 25, // Default low progress
        last_activity: repo.updated_at,
        language_distribution: { [repo.language || 'Unknown']: 100 },
        commit_frequency: 0,
        issue_count: repo.open_issues_count,
        pr_count: 0,
        estimated_mvp_readiness: 'low',
      };
    }
  }

  // Convert GitHub repo to ProjectCard format
  convertToProjectCard(repo: GitHubRepo, progress?: ProjectProgress): ProjectCard {
    return {
      id: repo.id.toString(),
      name: repo.name,
      description: repo.description || 'No description available',
      language: repo.language || 'Unknown',
      progress: progress?.completion_percentage || 0,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      lastUpdated: repo.updated_at,
      isSelected: false,
      status: repo.archived ? 'archived' : 'ongoing',
    };
  }
}

// Utility function to create GitHub API instance
export function createGitHubAPI(): GitHubAPI {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    throw new Error('GITHUB_TOKEN environment variable is required');
  }
  return new GitHubAPI(token);
}
