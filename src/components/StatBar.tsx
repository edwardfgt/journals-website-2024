import React from 'react';

const StatBar: React.FC = () => {
    return (
        <div className="stats shadow bg-highlight">
            <div className="stat">
                <div className="stat-title text-text">Emails Sent</div>
                <div className="stat-value text-text">10,200,000+</div>
            </div>

            <div className="stat">
                <div className="stat-title text-text">Publications</div>
                <div className="stat-value text-text">10</div>
            </div>

            <div className="stat">
                <div className="stat-title text-text">Placeholder</div>
                <div className="stat-value text-text">80%</div>
            </div>
        </div>
    );
};

export default StatBar;
