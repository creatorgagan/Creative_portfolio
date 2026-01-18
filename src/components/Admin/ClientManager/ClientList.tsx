import React, { useState } from 'react';
import { Client, ClientStatus } from '../../../types';

interface ClientListProps {
  clients: Client[];
  selectedClient: Client | null;
  onSelectClient: (clientId: string) => void;
  onCreateClient: () => void;
  loading?: boolean;
}

const ClientList: React.FC<ClientListProps> = ({
  clients,
  selectedClient,
  onSelectClient,
  onCreateClient,
  loading = false
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<ClientStatus | 'all'>('all');

  // Filter clients based on search and status
  const filteredClients = clients.filter(client => {
    const matchesSearch = searchQuery === '' || 
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.company?.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || client.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: ClientStatus) => {
    switch (status) {
      case ClientStatus.ACTIVE:
        return 'bg-green-100 text-green-800';
      case ClientStatus.INACTIVE:
        return 'bg-gray-100 text-gray-800';
      case ClientStatus.POTENTIAL:
        return 'bg-blue-100 text-blue-800';
      case ClientStatus.COMPLETED:
        return 'bg-purple-100 text-purple-800';
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

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-16 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Clients</h2>
          <button
            onClick={onCreateClient}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Add Client
          </button>
        </div>

        {/* Search and Filter */}
        <div className="flex space-x-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search clients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as ClientStatus | 'all')}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Status</option>
            <option value={ClientStatus.ACTIVE}>Active</option>
            <option value={ClientStatus.INACTIVE}>Inactive</option>
            <option value={ClientStatus.POTENTIAL}>Potential</option>
            <option value={ClientStatus.COMPLETED}>Completed</option>
          </select>
        </div>
      </div>

      {/* Client List */}
      <div className="divide-y divide-gray-200 max-h-96 overflow-y-auto">
        {filteredClients.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            <svg className="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <p>No clients found</p>
            <p className="text-sm mt-1">Try adjusting your search or filters</p>
          </div>
        ) : (
          filteredClients.map((client) => (
            <div
              key={client.id}
              onClick={() => onSelectClient(client.id)}
              className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
                selectedClient?.id === client.id ? 'bg-blue-50 border-r-4 border-blue-500' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {/* Avatar */}
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    {client.avatar ? (
                      <img src={client.avatar} alt={client.name} className="w-10 h-10 rounded-full object-cover" />
                    ) : (
                      <span className="text-gray-600 font-medium text-sm">
                        {client.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                      </span>
                    )}
                  </div>

                  {/* Client Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2">
                      <h3 className="text-sm font-medium text-gray-900 truncate">
                        {client.name}
                      </h3>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(client.status)}`}>
                        {client.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 truncate">{client.email}</p>
                    {client.company && (
                      <p className="text-xs text-gray-400 truncate">{client.company}</p>
                    )}
                  </div>
                </div>

                {/* Stats */}
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">
                    {client.totalVideos} videos
                  </div>
                  <div className="text-xs text-gray-500">
                    {client.totalProjects} projects
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatDate(client.updatedAt)}
                  </div>
                </div>
              </div>

              {/* Tags */}
              {client.tags.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1">
                  {client.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                  {client.tags.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
                      +{client.tags.length - 3} more
                    </span>
                  )}
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <p className="text-sm text-gray-600">
          Showing {filteredClients.length} of {clients.length} clients
        </p>
      </div>
    </div>
  );
};

export default ClientList;