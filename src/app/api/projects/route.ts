import { NextRequest, NextResponse } from 'next/server';
import { projectService } from '@/lib/projects';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get('username');
    const sortBy = searchParams.get('sortBy') as 'name' | 'progress' | 'lastUpdated' | 'stars' || 'lastUpdated';
    const status = searchParams.get('status') as 'ongoing' | 'completed' | 'archived' || 'ongoing';
    const search = searchParams.get('search') || '';

    if (!username) {
      return NextResponse.json(
        { error: 'Username is required' },
        { status: 400 }
      );
    }

    console.log(`Fetching projects for user: ${username}`);

    // Fetch user's projects
    const allProjects = await projectService.getUserProjects(username);
    
    // Filter by status
    const filteredProjects = projectService.filterProjectsByStatus(allProjects, status);
    
    // Search projects
    const searchedProjects = projectService.searchProjects(filteredProjects, search);
    
    // Sort projects
    const sortedProjects = projectService.sortProjects(searchedProjects, sortBy);

    return NextResponse.json({
      projects: sortedProjects,
      total: allProjects.length,
      filtered: sortedProjects.length,
      user: username,
    });

  } catch (error) {
    console.error('API Error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to fetch projects',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { owner, repo } = body;

    if (!owner || !repo) {
      return NextResponse.json(
        { error: 'Owner and repo are required' },
        { status: 400 }
      );
    }

    console.log(`Fetching project details for: ${owner}/${repo}`);

    // Get detailed project information
    const projectDetails = await projectService.getProjectDetails(owner, repo);

    return NextResponse.json({
      project: projectDetails,
    });

  } catch (error) {
    console.error('API Error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to fetch project details',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
