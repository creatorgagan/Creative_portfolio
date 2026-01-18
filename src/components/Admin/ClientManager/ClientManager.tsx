import React, { useState } from 'react';
import { useClientManagement } from '../../../hooks/useClientManagement';
import { ClientList, ClientDetails } from './index';
import { CreateClientModal, EditClientModal } from './ClientCRUD';
import { CreateProjectModal, EditProjectModal } from './ProjectCRUD';
import { AddVideoModal, EditVideoModal } from './VideoCRUD';
import { Project, VideoItem } from '../../../types';

const ClientManager: React.FC = () => {
  const {
    clients,
    selectedClient,
    clientData,
    loading,
    error,
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
    clearError
  } = useClientManagement();

  // Modal states
  const [showCreateClientModal, setShowCreateClientModal] = useState(false);
  const [showEditClientModal, setShowEditClientModal] = useState(false);
  const [showCreateProjectModal, setShowCreateProjectModal] = useState(false);
  const [showEditProjectModal, setShowEditProjectModal] = useState(false);
  const [showAddVideoModal, setShowAddVideoModal] = useState(false);
  const [showEditVideoModal, setShowEditVideoModal] = useState(false);

  // Selected items for editing
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [selectedProjectForVideo, setSelectedProjectForVideo] = useState<Project | null>(null);

  const handleSelectClient = async (clientId: string) => {
    await selectClient(clientId);
  };

  const handleCreateClient = () => {
    setShowCreateClientModal(true);
  };

  const handleEditClient = () => {
    if (selectedClient) {
      setShowEditClientModal(true);
    }
  };

  const handleCreateProject = () => {
    setShowCreateProjectModal(true);
  };

  const handleEditProject = (project: Project) => {
    setSelectedProject(project);
    setShowEditProjectModal(true);
  };

  const handleAddVideo = (project?: Project) => {
    setSelectedProjectForVideo(project || null);
    setShowAddVideoModal(true);
  };

  const handleEditVideo = (video: VideoItem) => {
    setSelectedVideo(video);
    setShowEditVideoModal(true);
  };

  const handleViewVideo = (video: VideoItem) => {
    // TODO: Implement video viewing modal or redirect
    console.log('View video:', video);
  };

  // Modal handlers
  const handleCreateClientSubmit = async (clientData: any) => {
    await createClient(clientData);
  };

  const handleEditClientSubmit = async (clientId: string, updates: any) => {
    await updateClient(clientId, updates);
  };

  const handleDeleteClient = async (clientId: string) => {
    await deleteClient(clientId);
  };

  const handleCreateProjectSubmit = async (projectData: any) => {
    await createProject(projectData);
  };

  const handleEditProjectSubmit = async (projectId: string, updates: any) => {
    await updateProject(projectId, updates);
  };

  const handleDeleteProject = async (projectId: string) => {
    await deleteProject(projectId);
  };

  const handleAddVideoSubmit = async (videoData: any) => {
    await addVideoToClient(videoData);
  };

  const handleEditVideoSubmit = async (videoId: string, updates: any) => {
    await updateVideo(videoId, updates);
  };

  const handleDeleteVideo = async (videoId: string) => {
    await deleteVideo(videoId);
  };

  if (error) {
    return (
      <div className="p-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3 flex-1">
              <h3 className="text-sm font-medium text-red-800">Error</h3>
              <p className="mt-1 text-sm text-red-700">{error}</p>
              <div className="mt-4">
                <button
                  onClick={clearError}
                  className="bg-red-100 hover:bg-red-200 text-red-800 px-3 py-1 rounded text-sm font-medium"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Client Management</h1>
        <p className="text-gray-600 mt-1">
          Manage your clients, projects, and associated content in one place
        </p>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Client List - Left Sidebar */}
        <div className="col-span-4">
          <ClientList
            clients={clients}
            selectedClient={selectedClient}
            onSelectClient={handleSelectClient}
            onCreateClient={handleCreateClient}
            loading={loading}
          />
        </div>

        {/* Client Details - Main Content */}
        <div className="col-span-8">
          {selectedClient && clientData ? (
            <ClientDetails
              client={selectedClient}
              projects={clientData.projects}
              videos={clientData.videos}
              stats={clientData.stats}
              recentActivity={clientData.recentActivity}
              onEditClient={handleEditClient}
              onCreateProject={handleCreateProject}
              onEditProject={handleEditProject}
              onAddVideo={handleAddVideo}
              onEditVideo={handleEditVideo}
              onViewVideo={handleViewVideo}
            />
          ) : (
            <div className="bg-white rounded-lg shadow p-12 text-center">
              <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Select a Client</h3>
              <p className="text-gray-600 mb-6">
                Choose a client from the list to view their projects, videos, and details
              </p>
              <button
                onClick={handleCreateClient}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
              >
                Create New Client
              </button>
            </div>
          )}
        </div>
      </div>

      {/* CRUD Modals */}
      <CreateClientModal
        isOpen={showCreateClientModal}
        onClose={() => setShowCreateClientModal(false)}
        onSubmit={handleCreateClientSubmit}
        loading={loading}
      />

      <EditClientModal
        isOpen={showEditClientModal}
        client={selectedClient}
        onClose={() => setShowEditClientModal(false)}
        onSubmit={handleEditClientSubmit}
        onDelete={handleDeleteClient}
        loading={loading}
      />

      <CreateProjectModal
        isOpen={showCreateProjectModal}
        clientId={selectedClient?.id || ''}
        clientName={selectedClient?.name || ''}
        onClose={() => setShowCreateProjectModal(false)}
        onSubmit={handleCreateProjectSubmit}
        loading={loading}
      />

      <EditProjectModal
        isOpen={showEditProjectModal}
        project={selectedProject}
        onClose={() => {
          setShowEditProjectModal(false);
          setSelectedProject(null);
        }}
        onSubmit={handleEditProjectSubmit}
        onDelete={handleDeleteProject}
        loading={loading}
      />

      <AddVideoModal
        isOpen={showAddVideoModal}
        clientId={selectedClient?.id || ''}
        clientName={selectedClient?.name || ''}
        projectId={selectedProjectForVideo?.id}
        projectName={selectedProjectForVideo?.title}
        onClose={() => {
          setShowAddVideoModal(false);
          setSelectedProjectForVideo(null);
        }}
        onSubmit={handleAddVideoSubmit}
        loading={loading}
      />

      <EditVideoModal
        isOpen={showEditVideoModal}
        video={selectedVideo}
        onClose={() => {
          setShowEditVideoModal(false);
          setSelectedVideo(null);
        }}
        onSubmit={handleEditVideoSubmit}
        onDelete={handleDeleteVideo}
        loading={loading}
      />
    </div>
  );
};

export default ClientManager;