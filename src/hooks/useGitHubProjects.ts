import { useState, useEffect } from 'react';
import { ProjectCard } from '@/types/github';

interface UseGitHubProjectsReturn {
  projects: ProjectCard[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useGitHubProjects(username: string): UseGitHubProjectsReturn {
  const [projects, setProjects] = useState<ProjectCard[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = async () => {
    if (!username) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`/api/projects?username=${encodeURIComponent(username)}`);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch projects');
      }
      
      const data = await response.json();
      setProjects(data.projects || []);
    } catch (err) {
      console.error('Error fetching projects:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch projects');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [username]);

  return {
    projects,
    loading,
    error,
    refetch: fetchProjects,
  };
}
