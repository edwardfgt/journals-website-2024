import React from 'react';

const StatBar: React.FC = () => {
    return (
        <div className="stats shadow bg-highlight flex-wrap">

            <div className="stat min-w-[200px]">
                <div className="stat-title text-text">Publications</div>
                <div className="stat-value text-text text-2xl sm:text-4xl">24</div>
            </div>

            <div className="stat min-w-[200px]">
                <div className="stat-title text-text">Monthly Reach</div>
                <div className="stat-value text-text text-2xl sm:text-4xl">16,130,033+</div>
            </div>
        </div>
    );
};

export default StatBar;
