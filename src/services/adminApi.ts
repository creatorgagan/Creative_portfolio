/**
 * Admin API Integration Service
 * Requirements: 22.1 - Implement admin-specific API endpoints and integration
 * 
 * This service provides:
 * - Content CRUD operations
 * - Media file management
 * - Inquiry management
 * - Analytics and reporting
 * - Admin user management
 */

import { 
  ContentItem, 
  MediaFile, 
  ClientInquiry, 
  AnalyticsData,
  AdminUser,
  ContentStatus
} from '@/types';

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

class AdminApiService {
  private baseUrl = '/api/admin';

  /**
   * CONTENT MANAGEMENT
   */

  async getContent(filters?: { status?: ContentStatus }): Promise<ContentItem[]> {
    const params = new URLSearchParams();
    if (filters?.status) params.append('status', filters.status);

    const response = await fetch(`${this.baseUrl}/content?${params}`, {
      headers: this.getAuthHeaders(),
    });
    return this.handleResponse<ContentItem[]>(response);
  }

  async createContent(content: Omit<ContentItem, 'id' | 'createdAt' | 'updatedAt'>): Promise<ContentItem> {
    const response = await fetch(`${this.baseUrl}/content`, {
      method: 'POST',
      headers: this.getAuthHeaders(),
      body: JSON.stringify(content),
    });
    return this.handleResponse<ContentItem>(response);
  }

  async updateContent(id: string, updates: Partial<ContentItem>): Promise<ContentItem> {
    const response = await fetch(`${this.baseUrl}/content/${id}`, {
      method: 'PUT',
      headers: this.getAuthHeaders(),
      body: JSON.stringify(updates),
    });
    return this.handleResponse<ContentItem>(response);
  }

  async deleteContent(id: string): Promise<{ success: boolean }> {
    const response = await fetch(`${this.baseUrl}/content/${id}`, {
      method: 'DELETE',
      headers: this.getAuthHeaders(),
    });
    return this.handleResponse<{ success: boolean }>(response);
  }

  /**
   * MEDIA MANAGEMENT
   */

  async uploadMedia(file: File, metadata?: { alt?: string; description?: string; tags?: string[] }): Promise<MediaFile> {
    const formData = new FormData();
    formData.append('file', file);
    if (metadata) {
      formData.append('metadata', JSON.stringify(metadata));
    }

    const response = await fetch(`${this.baseUrl}/media/upload`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${this.getToken()}` },
      body: formData,
    });
    return this.handleResponse<MediaFile>(response);
  }

  async getMedia(filters?: { tags?: string[] }): Promise<MediaFile[]> {
    const params = new URLSearchParams();
    if (filters?.tags) {
      filters.tags.forEach(tag => params.append('tags', tag));
    }

    const response = await fetch(`${this.baseUrl}/media?${params}`, {
      headers: this.getAuthHeaders(),
    });
    return this.handleResponse<MediaFile[]>(response);
  }

  async updateMediaMetadata(id: string, metadata: Partial<MediaFile>): Promise<MediaFile> {
    const response = await fetch(`${this.baseUrl}/media/${id}`, {
      method: 'PUT',
      headers: this.getAuthHeaders(),
      body: JSON.stringify(metadata),
    });
    return this.handleResponse<MediaFile>(response);
  }

  async deleteMedia(id: string): Promise<{ success: boolean }> {
    const response = await fetch(`${this.baseUrl}/media/${id}`, {
      method: 'DELETE',
      headers: this.getAuthHeaders(),
    });
    return this.handleResponse<{ success: boolean }>(response);
  }

  /**
   * INQUIRY MANAGEMENT
   */

  async getInquiries(filters?: { 
    status?: string; 
    priority?: string; 
    search?: string;
  }): Promise<ClientInquiry[]> {
    const params = new URLSearchParams();
    if (filters?.status) params.append('status', filters.status);
    if (filters?.priority) params.append('priority', filters.priority);
    if (filters?.search) params.append('search', filters.search);

    const response = await fetch(`${this.baseUrl}/inquiries?${params}`, {
      headers: this.getAuthHeaders(),
    });
    return this.handleResponse<ClientInquiry[]>(response);
  }

  async updateInquiry(id: string, updates: Partial<ClientInquiry>): Promise<ClientInquiry> {
    const response = await fetch(`${this.baseUrl}/inquiries/${id}`, {
      method: 'PUT',
      headers: this.getAuthHeaders(),
      body: JSON.stringify(updates),
    });
    return this.handleResponse<ClientInquiry>(response);
  }

  async addInquiryNote(inquiryId: string, note: { content: string; createdBy: string }): Promise<ClientInquiry> {
    const response = await fetch(`${this.baseUrl}/inquiries/${inquiryId}/notes`, {
      method: 'POST',
      headers: this.getAuthHeaders(),
      body: JSON.stringify(note),
    });
    return this.handleResponse<ClientInquiry>(response);
  }

  async exportInquiries(format: 'csv' | 'json' = 'csv'): Promise<Blob> {
    const response = await fetch(`${this.baseUrl}/inquiries/export?format=${format}`, {
      headers: this.getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error('Failed to export inquiries');
    }

    return await response.blob();
  }

  /**
   * ANALYTICS
   */

  async getAnalytics(timeRange?: { start: Date; end: Date }): Promise<AnalyticsData> {
    const params = new URLSearchParams();
    if (timeRange) {
      params.append('start', timeRange.start.toISOString());
      params.append('end', timeRange.end.toISOString());
    }

    const response = await fetch(`${this.baseUrl}/analytics?${params}`, {
      headers: this.getAuthHeaders(),
    });
    return this.handleResponse<AnalyticsData>(response);
  }

  /**
   * ADMIN USERS (for super admin)
   */

  async getAdminUsers(): Promise<AdminUser[]> {
    const response = await fetch(`${this.baseUrl}/users`, {
      headers: this.getAuthHeaders(),
    });
    return this.handleResponse<AdminUser[]>(response);
  }

  async updateAdminUser(id: string, updates: Partial<AdminUser>): Promise<AdminUser> {
    const response = await fetch(`${this.baseUrl}/users/${id}`, {
      method: 'PUT',
      headers: this.getAuthHeaders(),
      body: JSON.stringify(updates),
    });
    return this.handleResponse<AdminUser>(response);
  }

  /**
   * BACKUPS
   */

  async createBackup(type: 'manual' | 'automated' = 'manual'): Promise<{ backupId: string; timestamp: Date }> {
    const response = await fetch(`${this.baseUrl}/backups`, {
      method: 'POST',
      headers: this.getAuthHeaders(),
      body: JSON.stringify({ type }),
    });
    return this.handleResponse<{ backupId: string; timestamp: Date }>(response);
  }

  async restoreBackup(backupId: string): Promise<{ success: boolean; message: string }> {
    const response = await fetch(`${this.baseUrl}/backups/${backupId}/restore`, {
      method: 'POST',
      headers: this.getAuthHeaders(),
    });
    return this.handleResponse<{ success: boolean; message: string }>(response);
  }

  async listBackups(): Promise<any[]> {
    const response = await fetch(`${this.baseUrl}/backups`, {
      headers: this.getAuthHeaders(),
    });
    return this.handleResponse<any[]>(response);
  }

  /**
   * HELPER METHODS
   */

  private getToken(): string {
    const session = localStorage.getItem('admin_session');
    if (!session) throw new Error('No session found');
    const { token } = JSON.parse(session);
    return token;
  }

  private getAuthHeaders(): HeadersInit {
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.getToken()}`,
    };
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'Unknown error' }));
      throw new Error(error.message || `API error: ${response.status}`);
    }

    const data = await response.json();
    return data.data || data;
  }
}

export const adminApiService = new AdminApiService();
export default adminApiService;
