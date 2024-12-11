import React, { useState } from 'react';

const BrokerSettings = () => {
    const [apiKey, setApiKey] = useState('');
    const [apiSecret, setApiSecret] = useState('');

    const handleSave = async () => {
        const response = await fetch('https://your-backend-url/api/broker-settings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify({ apiKey, apiSecret }),
        });
        const result = await response.json();
        if (result.success) {
            alert('Broker settings saved!');
        } else {
            alert('Failed to save broker settings.');
        }
    };

    return (
        <div>
            <h2>Broker API Settings</h2>
            <input
                type="text"
                placeholder="API Key"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="API Secret"
                value={apiSecret}
                onChange={(e) => setApiSecret(e.target.value)}
                required
            />
            <button onClick={handleSave}>Save Settings</button>
        </div>
    );
};

export default BrokerSettings;
