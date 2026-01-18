import { Client, Project, VideoItem, ClientStatus, ProjectStatus, VideoCategory } from '../types';

export class ClientService {
  private clients: Map<string, Client> = new Map();
  private projects: Map<string, Project> = new Map();
  private videos: Map<string, VideoItem> = new Map();

  /**
   * Get all clients with optional filtering
   */
  getClients(filters?: {
    status?: ClientStatus;
    search?: string;
    tags?: string[];
  }): Client[] {
    let clients = Array.from(this.clients.values());

    if (filters) {
      if (filters.status) {
        clients = clients.filter(client => client.status === filters.status);
      }

      if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        clients = clients.filter(client => 
          client.name.toLowerCase().includes(searchTerm) ||
          client.email.toLowerCase().includes(searchTerm) ||
          client.company?.toLowerCase().includes(searchTerm)
        );
      }

      if (filters.tags && filters.tags.length > 0) {
        clients = clients.filter(client =>
          filters.tags!.some(tag => client.tags.includes(tag))
        );
      }
    }

    return clients.sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());
  }

  /**
   * Get client by ID with all associated data
   */
  getClientWithData(clientId: string): {
    client: Client | null;
    projects: Project[];
    videos: VideoItem[];
    totalVideos: number;
    totalProjects: number;
    recentActivity: any[];
  } {
    const client = this.clients.get(clientId);
    if (!client) {
      return {
        client: null,
        projects: [],
        videos: [],
        totalVideos: 0,
        totalProjects: 0,
        recentActivity: []
      };
    }

    // Get all projects for this client
    const projects = Array.from(this.projects.values())
      .filter(project => project.clientId === clientId)
      .sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());

    // Get all videos for this client
    const videos = Array.from(this.videos.values())
      .filter(video => video.clientId === clientId)
      .sort((a, b) => b.createdDate.getTime() - a.createdDate.getTime());

    // Generate recent activity
    const recentActivity = this.generateRecentActivity(projects, videos);

    return {
      client,
      projects,
      videos,
      totalVideos: videos.length,
      totalProjects: projects.length,
      recentActivity
    };
  }

  /**
   * Get projects by client ID
   */
  getProjectsByClient(clientId: string): Project[] {
    return Array.from(this.projects.values())
      .filter(project => project.clientId === clientId)
      .sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());
  }

  /**
   * Get videos by client ID
   */
  getVideosByClient(clientId: string): VideoItem[] {
    return Array.from(this.videos.values())
      .filter(video => video.clientId === clientId)
      .sort((a, b) => b.createdDate.getTime() - a.createdDate.getTime());
  }

  /**
   * Get videos by project ID
   */
  getVideosByProject(projectId: string): VideoItem[] {
    return Array.from(this.videos.values())
      .filter(video => video.projectId === projectId)
      .sort((a, b) => b.createdDate.getTime() - a.createdDate.getTime());
  }

  /**
   * Create a new client
   */
  createClient(clientData: Omit<Client, 'id' | 'createdAt' | 'updatedAt' | 'totalProjects' | 'totalVideos'>): Client {
    const client: Client = {
      ...clientData,
      id: this.generateId(),
      createdAt: new Date(),
      updatedAt: new Date(),
      totalProjects: 0,
      totalVideos: 0
    };

    this.clients.set(client.id, client);
    return client;
  }

  /**
   * Update client information
   */
  updateClient(clientId: string, updates: Partial<Client>): Client | null {
    const client = this.clients.get(clientId);
    if (!client) return null;

    const updatedClient = {
      ...client,
      ...updates,
      updatedAt: new Date()
    };

    this.clients.set(clientId, updatedClient);
    return updatedClient;
  }

  /**
   * Create a new project for a client
   */
  createProject(projectData: Omit<Project, 'id' | 'createdAt' | 'updatedAt' | 'videos' | 'images'>): Project {
    const project: Project = {
      ...projectData,
      id: this.generateId(),
      videos: [],
      images: [],
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.projects.set(project.id, project);
    this.updateClientCounts(project.clientId);
    return project;
  }

  /**
   * Update project information
   */
  updateProject(projectId: string, updates: Partial<Project>): Project | null {
    const project = this.projects.get(projectId);
    if (!project) return null;

    const updatedProject = {
      ...project,
      ...updates,
      updatedAt: new Date()
    };

    this.projects.set(projectId, updatedProject);
    return updatedProject;
  }

  /**
   * Add video to client/project
   */
  addVideoToClient(videoData: Omit<VideoItem, 'id'>): VideoItem {
    const video: VideoItem = {
      ...videoData,
      id: this.generateId()
    };

    this.videos.set(video.id, video);
    
    if (video.clientId) {
      this.updateClientCounts(video.clientId);
    }

    if (video.projectId) {
      const project = this.projects.get(video.projectId);
      if (project && !project.videos.includes(video.id)) {
        project.videos.push(video.id);
        this.projects.set(project.id, project);
      }
    }

    return video;
  }

  /**
   * Update video information
   */
  updateVideo(videoId: string, updates: Partial<VideoItem>): VideoItem | null {
    const video = this.videos.get(videoId);
    if (!video) return null;

    const updatedVideo = {
      ...video,
      ...updates
    };

    this.videos.set(videoId, updatedVideo);
    return updatedVideo;
  }

  /**
   * Delete video
   */
  deleteVideo(videoId: string): boolean {
    const video = this.videos.get(videoId);
    if (!video) return false;

    // Remove from project if associated
    if (video.projectId) {
      const project = this.projects.get(video.projectId);
      if (project) {
        project.videos = project.videos.filter(id => id !== videoId);
        this.projects.set(project.id, project);
      }
    }

    // Update client counts
    if (video.clientId) {
      this.updateClientCounts(video.clientId);
    }

    this.videos.delete(videoId);
    return true;
  }

  /**
   * Delete project and all associated videos
   */
  deleteProject(projectId: string): boolean {
    const project = this.projects.get(projectId);
    if (!project) return false;

    // Delete all associated videos
    project.videos.forEach(videoId => {
      this.videos.delete(videoId);
    });

    // Update client counts
    this.updateClientCounts(project.clientId);

    this.projects.delete(projectId);
    return true;
  }

  /**
   * Delete client and all associated projects and videos
   */
  deleteClient(clientId: string): boolean {
    const client = this.clients.get(clientId);
    if (!client) return false;

    // Delete all associated projects (which will also delete videos)
    const projects = this.getProjectsByClient(clientId);
    projects.forEach(project => {
      this.deleteProject(project.id);
    });

    // Delete any remaining videos directly associated with client
    const videos = this.getVideosByClient(clientId);
    videos.forEach(video => {
      this.videos.delete(video.id);
    });

    this.clients.delete(clientId);
    return true;
  }

  /**
   * Get client statistics
   */
  getClientStats(clientId: string): {
    totalVideos: number;
    totalProjects: number;
    activeProjects: number;
    completedProjects: number;
    videosByCategory: Record<VideoCategory, number>;
    projectsByStatus: Record<ProjectStatus, number>;
    recentActivity: number;
  } {
    const projects = this.getProjectsByClient(clientId);
    const videos = this.getVideosByClient(clientId);

    const videosByCategory = videos.reduce((acc, video) => {
      acc[video.category] = (acc[video.category] || 0) + 1;
      return acc;
    }, {} as Record<VideoCategory, number>);

    const projectsByStatus = projects.reduce((acc, project) => {
      acc[project.status] = (acc[project.status] || 0) + 1;
      return acc;
    }, {} as Record<ProjectStatus, number>);

    const activeProjects = projects.filter(p => 
      p.status === ProjectStatus.IN_PROGRESS || p.status === ProjectStatus.PLANNING
    ).length;

    const completedProjects = projects.filter(p => 
      p.status === ProjectStatus.COMPLETED || p.status === ProjectStatus.DELIVERED
    ).length;

    // Recent activity in last 30 days
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    
    const recentActivity = [
      ...projects.filter(p => p.updatedAt > thirtyDaysAgo),
      ...videos.filter(v => v.createdDate > thirtyDaysAgo)
    ].length;

    return {
      totalVideos: videos.length,
      totalProjects: projects.length,
      activeProjects,
      completedProjects,
      videosByCategory,
      projectsByStatus,
      recentActivity
    };
  }

  /**
   * Search across all client data
   */
  searchClientData(query: string): {
    clients: Client[];
    projects: Project[];
    videos: VideoItem[];
  } {
    const searchTerm = query.toLowerCase();

    const clients = Array.from(this.clients.values()).filter(client =>
      client.name.toLowerCase().includes(searchTerm) ||
      client.email.toLowerCase().includes(searchTerm) ||
      client.company?.toLowerCase().includes(searchTerm) ||
      client.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );

    const projects = Array.from(this.projects.values()).filter(project =>
      project.title.toLowerCase().includes(searchTerm) ||
      project.description.toLowerCase().includes(searchTerm) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );

    const videos = Array.from(this.videos.values()).filter(video =>
      video.title.toLowerCase().includes(searchTerm) ||
      video.description.toLowerCase().includes(searchTerm) ||
      video.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );

    return { clients, projects, videos };
  }

  /**
   * Get dashboard overview for all clients
   */
  getDashboardOverview(): {
    totalClients: number;
    activeClients: number;
    totalProjects: number;
    activeProjects: number;
    totalVideos: number;
    recentClients: Client[];
    topClients: Array<{ client: Client; stats: any }>;
  } {
    const clients = Array.from(this.clients.values());
    const projects = Array.from(this.projects.values());
    const videos = Array.from(this.videos.values());

    const activeClients = clients.filter(c => c.status === ClientStatus.ACTIVE).length;
    const activeProjects = projects.filter(p => 
      p.status === ProjectStatus.IN_PROGRESS || p.status === ProjectStatus.PLANNING
    ).length;

    const recentClients = clients
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice(0, 5);

    const topClients = clients
      .map(client => ({
        client,
        stats: this.getClientStats(client.id)
      }))
      .sort((a, b) => b.stats.totalVideos - a.stats.totalVideos)
      .slice(0, 5);

    return {
      totalClients: clients.length,
      activeClients,
      totalProjects: projects.length,
      activeProjects,
      totalVideos: videos.length,
      recentClients,
      topClients
    };
  }

  /**
   * Private helper methods
   */
  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  private updateClientCounts(clientId: string): void {
    const client = this.clients.get(clientId);
    if (!client) return;

    const projects = this.getProjectsByClient(clientId);
    const videos = this.getVideosByClient(clientId);

    const updatedClient = {
      ...client,
      totalProjects: projects.length,
      totalVideos: videos.length,
      updatedAt: new Date()
    };

    this.clients.set(clientId, updatedClient);
  }

  private generateRecentActivity(projects: Project[], videos: VideoItem[]): any[] {
    const activities: any[] = [];

    // Add project activities
    projects.slice(0, 5).forEach(project => {
      activities.push({
        type: 'project',
        action: 'updated',
        item: project,
        timestamp: project.updatedAt,
        description: `Project "${project.title}" was updated`
      });
    });

    // Add video activities
    videos.slice(0, 5).forEach(video => {
      activities.push({
        type: 'video',
        action: 'created',
        item: video,
        timestamp: video.createdDate,
        description: `Video "${video.title}" was added`
      });
    });

    return activities
      .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
      .slice(0, 10);
  }
}

// Default instance
export const clientService = new ClientService();

// Add sample data for testing
const initializeSampleData = () => {
  // Sample clients
  const client1 = clientService.createClient({
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    phone: '+1 (555) 123-4567',
    company: 'Johnson Photography',
    website: 'https://johnsonphoto.com',
    address: '123 Main St, New York, NY 10001',
    status: ClientStatus.ACTIVE,
    tags: ['wedding', 'portrait', 'commercial'],
    notes: 'Preferred photographer for wedding events. Very professional and reliable.'
  });

  const client2 = clientService.createClient({
    name: 'Michael Chen',
    email: 'michael@techstartup.com',
    phone: '+1 (555) 987-6543',
    company: 'TechStartup Inc.',
    website: 'https://techstartup.com',
    status: ClientStatus.ACTIVE,
    tags: ['corporate', 'tech', 'promotional'],
    notes: 'Tech company looking for promotional videos and corporate content.'
  });

  clientService.createClient({
    name: 'Emma Rodriguez',
    email: 'emma.rodriguez@gmail.com',
    phone: '+1 (555) 456-7890',
    status: ClientStatus.POTENTIAL,
    tags: ['personal', 'family'],
    notes: 'Interested in family portrait session and personal branding videos.'
  });

  // Sample projects
  const project1 = clientService.createProject({
    title: 'Wedding Highlight Reel',
    description: 'Create a cinematic wedding highlight reel showcasing the ceremony and reception.',
    clientId: client1.id,
    category: VideoCategory.PERSONAL,
    status: ProjectStatus.COMPLETED,
    startDate: new Date('2024-06-15'),
    endDate: new Date('2024-07-30'),
    budget: 2500,
    deliverables: [
      '5-minute highlight reel',
      'Raw footage backup',
      'Social media cuts (30s, 60s)',
      'Photo slideshow'
    ],
    tags: ['wedding', 'cinematic', 'highlight-reel'],
    notes: 'Client wants romantic, cinematic style with soft music overlay.'
  });

  const project2 = clientService.createProject({
    title: 'Product Launch Campaign',
    description: 'Multi-video campaign for new software product launch including demo and testimonials.',
    clientId: client2.id,
    category: VideoCategory.COMMERCIAL,
    status: ProjectStatus.IN_PROGRESS,
    startDate: new Date('2024-11-01'),
    budget: 5000,
    deliverables: [
      'Product demo video (3-5 minutes)',
      'Customer testimonial compilation',
      'Social media teasers',
      'Website hero video'
    ],
    tags: ['product-launch', 'demo', 'testimonials', 'tech'],
    notes: 'Focus on user experience and technical capabilities. Modern, clean aesthetic.'
  });

  clientService.createProject({
    title: 'Corporate Training Series',
    description: 'Educational video series for employee onboarding and training.',
    clientId: client2.id,
    category: VideoCategory.COMMERCIAL,
    status: ProjectStatus.PLANNING,
    startDate: new Date('2025-01-15'),
    budget: 8000,
    deliverables: [
      '10 training modules (5-10 minutes each)',
      'Interactive quizzes integration',
      'Closed captions',
      'Multi-language subtitles'
    ],
    tags: ['training', 'educational', 'corporate', 'series'],
    notes: 'Need to coordinate with HR team for content approval and scheduling.'
  });

  // Sample videos
  clientService.addVideoToClient({
    title: 'Sarah & David Wedding Highlights',
    description: 'A beautiful cinematic wedding highlight reel capturing the magical moments of Sarah and David\'s special day.',
    thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=450&fit=crop',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    youtubeId: 'dQw4w9WgXcQ',
    category: VideoCategory.PERSONAL,
    tags: ['wedding', 'cinematic', 'romantic', 'highlight-reel'],
    createdDate: new Date('2024-07-25'),
    featured: true,
    duration: 300,
    viewCount: 1250,
    clientId: client1.id,
    projectId: project1.id
  });

  clientService.addVideoToClient({
    title: 'TechStartup Product Demo',
    description: 'Comprehensive product demonstration showcasing key features and user interface of our latest software solution.',
    thumbnail: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=450&fit=crop',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    youtubeId: 'dQw4w9WgXcQ',
    category: VideoCategory.COMMERCIAL,
    tags: ['product-demo', 'software', 'tech', 'tutorial'],
    createdDate: new Date('2024-11-15'),
    featured: true,
    duration: 240,
    viewCount: 890,
    clientId: client2.id,
    projectId: project2.id
  });

  clientService.addVideoToClient({
    title: 'Customer Success Stories',
    description: 'Compilation of customer testimonials highlighting the impact and success achieved using our platform.',
    thumbnail: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=450&fit=crop',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    youtubeId: 'dQw4w9WgXcQ',
    category: VideoCategory.COMMERCIAL,
    tags: ['testimonials', 'success-stories', 'customers', 'case-studies'],
    createdDate: new Date('2024-11-20'),
    featured: false,
    duration: 180,
    viewCount: 456,
    clientId: client2.id,
    projectId: project2.id
  });

  clientService.addVideoToClient({
    title: 'Behind the Scenes - Wedding Setup',
    description: 'Exclusive behind-the-scenes footage showing the preparation and setup for Sarah and David\'s wedding ceremony.',
    thumbnail: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=450&fit=crop',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    youtubeId: 'dQw4w9WgXcQ',
    category: VideoCategory.PERSONAL,
    tags: ['behind-the-scenes', 'wedding', 'preparation', 'documentary'],
    createdDate: new Date('2024-07-20'),
    featured: false,
    duration: 420,
    viewCount: 234,
    clientId: client1.id,
    projectId: project1.id
  });

  console.log('Sample data initialized:', {
    clients: clientService.getClients().length,
    projects: clientService.getClients().reduce((acc, client) => acc + clientService.getProjectsByClient(client.id).length, 0),
    videos: clientService.getClients().reduce((acc, client) => acc + clientService.getVideosByClient(client.id).length, 0)
  });
};

// Initialize sample data
initializeSampleData();