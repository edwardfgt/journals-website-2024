import React from 'react';

const SponsorGrid: React.FC = () => {
    return (
        <div className="w-full px-4 mt-10">
            <div className="flex flex-wrap justify-center items-center gap-8">
                <img src="/sponsors/hubspot.png" alt="Sponsor 1" className="h-16 w-auto" />
                <img src="/sponsors/fool.png" alt="Sponsor 2" className="h-16 w-45" />
                <img src="/sponsors/polymarket.png" alt="Sponsor 3" className="h-16 w-auto" />
                <img src="/sponsors/huel.png" alt="Sponsor 4" className="h-16 w-auto" />
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 mt-10">
                <img src="/sponsors/verizon.png" alt="Sponsor 1" className="h-16 w-auto" />
                <img src="/sponsors/masterworks.png" alt="Sponsor 2" className="h-16 w-45" />
                <img src="/sponsors/money.png" alt="Sponsor 3" className="h-16 w-auto" />
                <img src="/sponsors/pinata.png" alt="Sponsor 4" className="h-16 w-auto" />
            </div>
        </div>
    );
}

export default SponsorGrid;