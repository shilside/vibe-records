import { GitHubAPI, createGitHubAPI } from './github';
import { ProjectCard, ProjectProgress } from '@/types/github';

export class ProjectService {
  private githubAPI: GitHubAPI;

  constructor() {
    this.githubAPI = createGitHubAPI();
  }

  // Fetch user's repositories and convert to project cards
  async getUserProjects(username: string): Promise<ProjectCard[]> {
    try {
      console.log(`Fetching repositories for user: ${username}`);
      
      // Get user's repositories (public repos, sorted by updated date)
      const repos = await this.githubAPI.getUserRepos(username, {
        type: 'public',
        sort: 'updated',
        direction: 'desc',
        per_page: 50, // Limit to 50 most recent repos
      });

      console.log(`Found ${repos.length} repositories`);

      // Filter out forks and archived repos for now
      const activeRepos = repos.filter(repo => 
        !repo.fork && 
        !repo.archived && 
        repo.visibility === 'public'
      );

      console.log(`${activeRepos.length} active repositories after filtering`);

      // Convert to project cards with progress calculation
      const projectCards: ProjectCard[] = [];
      
      for (const repo of activeRepos.slice(0, 20)) { // Limit to 20 for performance
        try {
          const progress = await this.githubAPI.calculateProjectProgress(repo);
          const projectCard = this.githubAPI.convertToProjectCard(repo, progress);
          projectCards.push(projectCard);
        } catch (error) {
          console.error(`Error processing repo ${repo.name}:`, error);
          // Add repo without progress calculation
          const projectCard = this.githubAPI.convertToProjectCard(repo);
          projectCards.push(projectCard);
        }
      }

      return projectCards;
    } catch (error) {
      console.error('Error fetching user projects:', error);
      throw new Error(`Failed to fetch projects: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  // Get project details with full progress analysis
  async getProjectDetails(owner: string, repo: string): Promise<ProjectProgress> {
    try {
      const repoData = await this.githubAPI.getRepo(owner, repo);
      return await this.githubAPI.calculateProjectProgress(repoData);
    } catch (error) {
      console.error(`Error fetching project details for ${owner}/${repo}:`, error);
      throw new Error(`Failed to fetch project details: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  // Filter projects by status
  filterProjectsByStatus(projects: ProjectCard[], status: 'ongoing' | 'completed' | 'archived'): ProjectCard[] {
    return projects.filter(project => project.status === status);
  }

  // Sort projects by various criteria
  sortProjects(projects: ProjectCard[], sortBy: 'name' | 'progress' | 'lastUpdated' | 'stars'): ProjectCard[] {
    return [...projects].sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'progress':
          return b.progress - a.progress;
        case 'lastUpdated':
          return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
        case 'stars':
          return b.stars - a.stars;
        default:
          return 0;
      }
    });
  }

  // Search projects
  searchProjects(projects: ProjectCard[], query: string): ProjectCard[] {
    if (!query.trim()) return projects;
    
    const lowercaseQuery = query.toLowerCase();
    return projects.filter(project => 
      project.name.toLowerCase().includes(lowercaseQuery) ||
      project.description.toLowerCase().includes(lowercaseQuery) ||
      project.language.toLowerCase().includes(lowercaseQuery)
    );
  }
}

// Create singleton instance
export const projectService = new ProjectService();
