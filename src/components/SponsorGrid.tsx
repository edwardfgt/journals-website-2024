import React from 'react';

const SponsorGrid: React.FC = () => {
    return (
        <div className="w-full px-4 mt-10">
            <div className="flex flex-wrap justify-center items-center gap-8">
                <img src="/Images/hubspot.png" alt="Sponsor 1" className="h-16 w-auto" />
                <img src="/Images/fool.png" alt="Sponsor 2" className="h-16 w-45" />
                <img src="/Images/polymarket.png" alt="Sponsor 3" className="h-16 w-auto" />
                <img src="/Images/huel.png" alt="Sponsor 4" className="h-16 w-auto" />
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 mt-10">
                <img src="/Images/verizon.png" alt="Sponsor 1" className="h-16 w-auto" />
                <img src="/Images/masterworks.png" alt="Sponsor 2" className="h-16 w-45" />
                <img src="/Images/money.png" alt="Sponsor 3" className="h-16 w-auto" />
                <img src="/Images/pinata.png" alt="Sponsor 4" className="h-16 w-auto" />
            </div>
        </div>
    );
}

export default SponsorGrid;