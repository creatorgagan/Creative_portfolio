import { useState, useEffect, useCallback } from 'react';
import { Client, Project, VideoItem } from '../types';
import { clientService } from '../services/clientService';

export interface UseClientManagementState {
  clients: Client[];
  selectedClient: Client | null;
  clientData: {
    projects: Project[];
    videos: VideoItem[];
    stats: any;
    recentActivity: any[];
  } | null;
  loading: boolean;
  error: string | null;
}

export interface UseClientManagementActions {
  loadClients: (filters?: any) => Promise<void>;
  selectClient: (clientId: string) => Promise<void>;
  createClient: (clientData: any) => Promise<Client | null>;
  updateClient: (clientId: string, updates: any) => Promise<Client | null>;
  deleteClient: (clientId: string) => Promise<boolean>;
  createProject: (projectData: any) => Promise<Project | null>;
  updateProject: (projectId: string, updates: any) => Promise<Project | null>;
  deleteProject: (projectId: string) => Promise<boolean>;
  addVideoToClient: (videoData: any) => Promise<VideoItem | null>;
  updateVideo: (videoId: string, updates: any) => Promise<VideoItem | null>;
  deleteVideo: (videoId: string) => Promise<boolean>;
  searchClients: (query: string) => Promise<any>;
  clearSelection: () => void;
  clearError: () => void;
}

export interface UseClientManagementReturn extends UseClientManagementState, UseClientManagementActions {}

/**
 * Hook for managing clients and their associated content
 */
export const useClientManagement = (): UseClientManagementReturn => {
  const [state, setState] = useState<UseClientManagementState>({
    clients: [],
    selectedClient: null,
    clientData: null,
    loading: false,
    error: null
  });

  const loadClients = useCallback(async (filters?: any) => {
    setState(prev => ({ ...prev, loading: true, error: null }));

    try {
      const clients = clientService.getClients(filters);
      setState(prev => ({
        ...prev,
        clients,
        loading: false
      }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to load clients'
      }));
    }
  }, []);

  const selectClient = useCallback(async (clientId: string) => {
    setState(prev => ({ ...prev, loading: true, error: null }));

    try {
      const clientWithData = clientService.getClientWithData(clientId);
      
      if (!clientWithData.client) {
        throw new Error('Client not found');
      }

      const stats = clientService.getClientStats(clientId);

      setState(prev => ({
        ...prev,
        selectedClient: clientWithData.client,
        clientData: {
          projects: clientWithData.projects,
          videos: clientWithData.videos,
          stats,
          recentActivity: clientWithData.recentActivity
        },
        loading: false
      }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to load client data'
      }));
    }
  }, []);

  const createClient = useCallback(async (clientData: any): Promise<Client | null> => {
    setState(prev => ({ ...prev, loading: true, error: null }));

    try {
      const newClient = clientService.createClient(clientData);
      
      // Reload clients list
      await loadClients();
      
      setState(prev => ({ ...prev, loading: false }));
      return newClient;
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to create client'
      }));
      return null;
    }
  }, [loadClients]);

  const updateClient = useCallback(async (clientId: string, updates: any): Promise<Client | null> => {
    setState(prev => ({ ...prev, loading: true, error: null }));

    try {
      const updatedClient = clientService.updateClient(clientId, updates);
      
      if (!updatedClient) {
        throw new Error('Client not found');
      }

      // Update local state
      setState(prev => ({
        ...prev,
        clients: prev.clients.map(client => 
          client.id === clientId ? updatedClient : client
        ),
        selectedClient: prev.selectedClient?.id === clientId ? updatedClient : prev.selectedClient,
        loading: false
      }));

      return updatedClient;
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to update client'
      }));
      return null;
    }
  }, []);

  const createProject = useCallback(async (projectData: any): Promise<Project | null> => {
    setState(prev => ({ ...prev, loading: true, error: null }));

    try {
      const newProject = clientService.createProject(projectData);
      
      // If this project is for the currently selected client, refresh their data
      if (state.selectedClient && newProject.clientId === state.selectedClient.id) {
        await selectClient(state.selectedClient.id);
      }
      
      setState(prev => ({ ...prev, loading: false }));
      return newProject;
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to create project'
      }));
      return null;
    }
  }, [state.selectedClient, selectClient]);

  const updateProject = useCallback(async (projectId: string, updates: any): Promise<Project | null> => {
    setState(prev => ({ ...prev, loading: true, error: null }));

    try {
      const updatedProject = clientService.updateProject(projectId, updates);
      
      if (!updatedProject) {
        throw new Error('Project not found');
      }

      // If this project belongs to the currently selected client, refresh their data
      if (state.selectedClient && updatedProject.clientId === state.selectedClient.id) {
        await selectClient(state.selectedClient.id);
      }
      
      setState(prev => ({ ...prev, loading: false }));
      return updatedProject;
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to update project'
      }));
      return null;
    }
  }, [state.selectedClient, selectClient]);

  const deleteClient = useCallback(async (clientId: string): Promise<boolean> => {
    setState(prev => ({ ...prev, loading: true, error: null }));

    try {
      const success = clientService.deleteClient(clientId);
      
      if (!success) {
        throw new Error('Client not found');
      }

      // Reload clients list and clear selection if deleted client was selected
      await loadClients();
      
      if (state.selectedClient?.id === clientId) {
        setState(prev => ({
          ...prev,
          selectedClient: null,
          clientData: null
        }));
      }
      
      setState(prev => ({ ...prev, loading: false }));
      return true;
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to delete client'
      }));
      return false;
    }
  }, [loadClients, state.selectedClient]);

  const deleteProject = useCallback(async (projectId: string): Promise<boolean> => {
    setState(prev => ({ ...prev, loading: true, error: null }));

    try {
      const success = clientService.deleteProject(projectId);
      
      if (!success) {
        throw new Error('Project not found');
      }

      // If this project belongs to the currently selected client, refresh their data
      if (state.selectedClient) {
        await selectClient(state.selectedClient.id);
      }
      
      setState(prev => ({ ...prev, loading: false }));
      return true;
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to delete project'
      }));
      return false;
    }
  }, [state.selectedClient, selectClient]);

  const addVideoToClient = useCallback(async (videoData: any): Promise<VideoItem | null> => {
    setState(prev => ({ ...prev, loading: true, error: null }));

    try {
      const newVideo = clientService.addVideoToClient(videoData);
      
      // If this video belongs to the currently selected client, refresh their data
      if (state.selectedClient && newVideo.clientId === state.selectedClient.id) {
        await selectClient(state.selectedClient.id);
      }
      
      setState(prev => ({ ...prev, loading: false }));
      return newVideo;
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to add video to client'
      }));
      return null;
    }
  }, [state.selectedClient, selectClient]);

  const updateVideo = useCallback(async (videoId: string, updates: any): Promise<VideoItem | null> => {
    setState(prev => ({ ...prev, loading: true, error: null }));

    try {
      const updatedVideo = clientService.updateVideo(videoId, updates);
      
      if (!updatedVideo) {
        throw new Error('Video not found');
      }

      // If this video belongs to the currently selected client, refresh their data
      if (state.selectedClient && updatedVideo.clientId === state.selectedClient.id) {
        await selectClient(state.selectedClient.id);
      }
      
      setState(prev => ({ ...prev, loading: false }));
      return updatedVideo;
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to update video'
      }));
      return null;
    }
  }, [state.selectedClient, selectClient]);

  const deleteVideo = useCallback(async (videoId: string): Promise<boolean> => {
    setState(prev => ({ ...prev, loading: true, error: null }));

    try {
      const success = clientService.deleteVideo(videoId);
      
      if (!success) {
        throw new Error('Video not found');
      }

      // If this video belongs to the currently selected client, refresh their data
      if (state.selectedClient) {
        await selectClient(state.selectedClient.id);
      }
      
      setState(prev => ({ ...prev, loading: false }));
      return true;
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to delete video'
      }));
      return false;
    }
  }, [state.selectedClient, selectClient]);

  const searchClients = useCallback(async (query: string) => {
    setState(prev => ({ ...prev, loading: true, error: null }));

    try {
      const results = clientService.searchClientData(query);
      setState(prev => ({ ...prev, loading: false }));
      return results;
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Search failed'
      }));
      return { clients: [], projects: [], videos: [] };
    }
  }, []);

  const clearSelection = useCallback(() => {
    setState(prev => ({
      ...prev,
      selectedClient: null,
      clientData: null
    }));
  }, []);

  const clearError = useCallback(() => {
    setState(prev => ({ ...prev, error: null }));
  }, []);

  // Load clients on mount
  useEffect(() => {
    loadClients();
  }, [loadClients]);

  return {
    ...state,
    loadClients,
    selectClient,
    createClient,
    updateClient,
    deleteClient,
    createProject,
    updateProject,
    deleteProject,
    addVideoToClient,
    updateVideo,
    deleteVideo,
    searchClients,
    clearSelection,
    clearError
  };
};

/**
 * Hook for dashboard overview data
 */
export const useClientDashboard = () => {
  const [dashboardData, setDashboardData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadDashboard = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const overview = clientService.getDashboardOverview();
      setDashboardData(overview);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load dashboard');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadDashboard();
  }, [loadDashboard]);

  return {
    dashboardData,
    loading,
    error,
    refresh: loadDashboard
  };
};