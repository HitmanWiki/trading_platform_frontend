import React, { useState } from 'react';
import Subscription from './Subscription';
import BrokerSettings from './BrokerSettings';
import TradeSettings from './TradeSettings';
import LiveDashboard from './LiveDashboard';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('subscription');

  const renderTab = () => {
    switch (activeTab) {
      case 'subscription':
        return <Subscription />;
      case 'broker':
        return <BrokerSettings />;
      case 'settings':
        return <TradeSettings />;
      case 'dashboard':
        return <LiveDashboard />;
      default:
        return <Subscription />;
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => setActiveTab('subscription')}>Subscription</button>
        <button onClick={() => setActiveTab('broker')}>Broker Settings</button>
        <button onClick={() => setActiveTab('settings')}>Trade Settings</button>
        <button onClick={() => setActiveTab('dashboard')}>Live Dashboard</button>
      </nav>
      <div>{renderTab()}</div>
    </div>
  );
};

export default Dashboard;
