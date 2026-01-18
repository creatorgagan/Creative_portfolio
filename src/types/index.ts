// Core video content types
export interface VideoItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  youtubeId?: string;
  category: VideoCategory;
  tags: string[];
  createdDate: Date;
  featured: boolean;
  duration?: number;
  viewCount?: number;
  clientId?: string; // Link to client
  projectId?: string; // Link to specific project
}

export enum VideoCategory {
  COMMERCIAL = 'commercial',
  PERSONAL = 'personal',
  DOCUMENTARY = 'documentary',
  MUSIC_VIDEO = 'music-video',
  OTHER = 'other'
}

// Site configuration types
export interface SiteConfig {
  personal: {
    name: string;
    tagline: string;
    bio: string;
    email: string;
    phone?: string;
    location: string;
  };
  social: {
    youtube: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
  youtube?: {
    channelId?: string;
    playlistId?: string;
    apiKey?: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage: string;
  };
}

// YouTube integration types
export interface YouTubePlaylist {
  playlistId: string;
  title: string;
  description: string;
  videos: YouTubeVideo[];
}

export interface YouTubeVideo {
  videoId: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: Date;
  duration: string;
  viewCount: number;
}

// Component prop types
export interface NavigationProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

export interface HeroProps {
  name: string;
  tagline: string;
  description: string;
  backgroundVideo?: string;
  backgroundImage?: string;
}

export interface VideoGalleryProps {
  videos: VideoItem[];
  onVideoSelect: (video: VideoItem) => void;
  selectedCategory?: string;
}

export interface VideoPlayerProps {
  video: VideoItem;
  isOpen: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
}

export interface AboutProps {
  story: string;
  achievements: Achievement[];
  profileImages: string[];
  skills: string[];
}

export interface Achievement {
  title: string;
  description: string;
  year: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

export interface ContactProps {
  onSubmit: (data: ContactFormData) => Promise<void>;
  socialLinks: SocialLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

// Admin panel types
export interface AdminUser {
  id: string;
  username: string;
  email: string;
  role: AdminRole;
  lastLogin?: Date;
  createdAt: Date;
}

export enum AdminRole {
  SUPER_ADMIN = 'super_admin',
  ADMIN = 'admin',
  EDITOR = 'editor'
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface AuthSession {
  token: string;
  user: AdminUser;
  expiresAt: Date;
}

// Content management types
export interface ContentItem {
  id: string;
  type: 'video' | 'image' | 'text';
  title: string;
  content: any;
  status: ContentStatus;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
}

export enum ContentStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published',
  ARCHIVED = 'archived'
}

// Media management types
export interface MediaFile {
  id: string;
  filename: string;
  originalName: string;
  mimeType: string;
  size: number;
  url: string;
  thumbnailUrl?: string;
  alt?: string;
  description?: string;
  tags: string[];
  uploadedAt: Date;
  uploadedBy: string;
}

export interface UploadProgress {
  filename: string;
  progress: number;
  status: 'uploading' | 'processing' | 'complete' | 'error';
  error?: string;
}

// Client inquiry types
export interface ClientInquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  message: string;
  status: InquiryStatus;
  priority: InquiryPriority;
  submittedAt: Date;
  respondedAt?: Date;
  notes: InquiryNote[];
}

// Client management types
export interface Client {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  website?: string;
  address?: string;
  avatar?: string;
  status: ClientStatus;
  createdAt: Date;
  updatedAt: Date;
  totalProjects: number;
  totalVideos: number;
  tags: string[];
  notes: string;
}

export enum ClientStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  POTENTIAL = 'potential',
  COMPLETED = 'completed'
}

export interface Project {
  id: string;
  title: string;
  description: string;
  clientId: string;
  status: ProjectStatus;
  category: VideoCategory;
  startDate: Date;
  endDate?: Date;
  budget?: number;
  deliverables: string[];
  videos: string[]; // Array of video IDs
  images: string[]; // Array of image IDs
  tags: string[];
  notes: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum ProjectStatus {
  PLANNING = 'planning',
  IN_PROGRESS = 'in_progress',
  REVIEW = 'review',
  COMPLETED = 'completed',
  DELIVERED = 'delivered',
  ARCHIVED = 'archived'
}

export enum InquiryStatus {
  NEW = 'new',
  READ = 'read',
  IN_PROGRESS = 'in_progress',
  RESPONDED = 'responded',
  ARCHIVED = 'archived'
}

export enum InquiryPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  URGENT = 'urgent'
}

export interface InquiryNote {
  id: string;
  content: string;
  createdAt: Date;
  createdBy: string;
}

// Analytics types
export interface AnalyticsData {
  totalViews: number;
  totalInquiries: number;
  popularVideos: VideoAnalytics[];
  inquiryTrends: InquiryTrend[];
  conversionRate: number;
  timeRange: {
    start: Date;
    end: Date;
  };
}

export interface VideoAnalytics {
  videoId: string;
  title: string;
  views: number;
  engagement: number;
  thumbnail: string;
}

export interface InquiryTrend {
  date: string;
  count: number;
  conversions: number;
}

// Admin component props
export interface AdminDashboardProps {
  analytics: AnalyticsData;
  recentInquiries: ClientInquiry[];
  recentActivity: ActivityLog[];
}

export interface ActivityLog {
  id: string;
  action: string;
  resource: string;
  user: string;
  timestamp: Date;
  details?: string;
}