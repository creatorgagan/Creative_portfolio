import React, { useState } from 'react';
import { Client, Project, VideoItem, ProjectStatus } from '../../../types';

interface ClientDetailsProps {
  client: Client;
  projects: Project[];
  videos: VideoItem[];
  stats: any;
  recentActivity: any[];
  onEditClient: () => void;
  onCreateProject: () => void;
  onEditProject: (project: Project) => void;
  onAddVideo: (project?: Project) => void;
  onEditVideo: (video: VideoItem) => void;
  onViewVideo: (video: VideoItem) => void;
}

const ClientDetails: React.FC<ClientDetailsProps> = ({
  client,
  projects,
  videos,
  stats,
  recentActivity,
  onEditClient,
  onCreateProject,
  onEditProject,
  onAddVideo,
  onEditVideo,
  onViewVideo
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'projects' | 'videos' | 'activity'>('overview');

  const getProjectStatusColor = (status: ProjectStatus) => {
    switch (status) {
      case ProjectStatus.PLANNING:
        return 'bg-yellow-100 text-yellow-800';
      case ProjectStatus.IN_PROGRESS:
        return 'bg-blue-100 text-blue-800';
      case ProjectStatus.REVIEW:
        return 'bg-purple-100 text-purple-800';
      case ProjectStatus.COMPLETED:
        return 'bg-green-100 text-green-800';
      case ProjectStatus.DELIVERED:
        return 'bg-green-100 text-green-800';
      case ProjectStatus.ARCHIVED:
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  return (
    <div className="bg-white rounded-lg shadow">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Avatar */}
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
              {client.avatar ? (
                <img src={client.avatar} alt={client.name} className="w-16 h-16 rounded-full object-cover" />
              ) : (
                <span className="text-gray-600 font-medium text-lg">
                  {client.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                </span>
              )}
            </div>

            {/* Client Info */}
            <div>
              <h1 className="text-xl font-bold text-gray-900">{client.name}</h1>
              <p className="text-gray-600">{client.email}</p>
              {client.company && <p className="text-sm text-gray-500">{client.company}</p>}
            </div>
          </div>

          {/* Actions */}
          <div className="flex space-x-2">
            <button
              onClick={onEditClient}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
            >
              Edit Client
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-4 mt-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">{stats.totalProjects}</div>
            <div className="text-sm text-blue-600">Total Projects</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-green-600">{stats.totalVideos}</div>
            <div className="text-sm text-green-600">Total Videos</div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-yellow-600">{stats.activeProjects}</div>
            <div className="text-sm text-yellow-600">Active Projects</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">{stats.recentActivity}</div>
            <div className="text-sm text-purple-600">Recent Activity</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8 px-6">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'projects', label: `Projects (${projects.length})` },
            { id: 'videos', label: `Videos (${videos.length})` },
            { id: 'activity', label: 'Activity' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <p className="mt-1 text-sm text-gray-900">{client.phone || 'Not provided'}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Website</label>
                  <p className="mt-1 text-sm text-gray-900">
                    {client.website ? (
                      <a href={client.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        {client.website}
                      </a>
                    ) : (
                      'Not provided'
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Notes */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Notes</h3>
              <p className="text-sm text-gray-700">{client.notes || 'No notes added yet.'}</p>
            </div>

            {/* Tags */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {client.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
                {client.tags.length === 0 && (
                  <p className="text-sm text-gray-500">No tags added yet.</p>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium text-gray-900">Projects</h3>
              <button
                onClick={onCreateProject}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
              >
                New Project
              </button>
            </div>

            <div className="space-y-4">
              {projects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => onEditProject(project)}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <h4 className="text-lg font-medium text-gray-900">{project.title}</h4>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getProjectStatusColor(project.status)}`}>
                          {project.status.replace('_', ' ')}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                        <span>Started: {formatDate(project.startDate)}</span>
                        {project.endDate && <span>Ended: {formatDate(project.endDate)}</span>}
                        <span>{project.videos.length} videos</span>
                      </div>
                    </div>
                    {project.budget && (
                      <div className="text-right">
                        <div className="text-lg font-medium text-gray-900">
                          {formatCurrency(project.budget)}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {projects.length === 0 && (
                <div className="text-center py-8">
                  <svg className="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <p className="text-gray-500">No projects yet</p>
                  <button
                    onClick={onCreateProject}
                    className="mt-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Create the first project
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'videos' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium text-gray-900">Videos</h3>
              <button
                onClick={() => onAddVideo()}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
              >
                Add Video
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow group"
                >
                  <div className="aspect-video bg-gray-200 relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity flex space-x-2">
                        <button
                          onClick={() => onViewVideo(video)}
                          className="bg-white text-gray-900 px-3 py-1 rounded text-sm font-medium hover:bg-gray-100"
                        >
                          View
                        </button>
                        <button
                          onClick={() => onEditVideo(video)}
                          className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium hover:bg-blue-700"
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium text-gray-900 truncate">{video.title}</h4>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">{video.description}</p>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {video.category.replace('_', ' ')}
                      </span>
                      <span className="text-xs text-gray-500">
                        {formatDate(video.createdDate)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {videos.length === 0 && (
              <div className="text-center py-8">
                <svg className="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-500">No videos yet</p>
                <button
                  onClick={() => onAddVideo()}
                  className="mt-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Add the first video
                </button>
              </div>
            )}
          </div>
        )}

        {activeTab === 'activity' && (
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-6">Recent Activity</h3>
            
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      {activity.type === 'project' ? (
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{activity.description}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {formatDate(activity.timestamp)}
                    </p>
                  </div>
                </div>
              ))}

              {recentActivity.length === 0 && (
                <div className="text-center py-8">
                  <svg className="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-500">No recent activity</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientDetails;