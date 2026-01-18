import React from 'react';
import { ClientManager } from './components/Admin/ClientManager';

const TestClientManager: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <ClientManager />
    </div>
  );
};

export default TestClientManager;