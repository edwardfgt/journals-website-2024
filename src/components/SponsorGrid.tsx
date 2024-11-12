import React from 'react';
import foolLogo from '/public/sponsors/fool.png';
import hubspotLogo from '/public/sponsors/hubspot.png';
import polymarketLogo from '/public/sponsors/polymarket.png';
import huelLogo from '/public/sponsors/huel.png';
import verizonLogo from '/public/sponsors/verizon.png';
import masterworksLogo from '/public/sponsors/masterworks.png';
import moneyLogo from '/public/sponsors/money.png';
import pinataLogo from '/public/sponsors/pinata.png';

const SponsorGrid: React.FC = () => {
    return (
        <div className="w-full px-4 mt-10">
            <div className="flex flex-wrap justify-center items-center gap-8">
                <img src={hubspotLogo} alt="Sponsor 1" className="h-16 w-auto" />
                <img src={foolLogo} alt="Sponsor 2" className="h-16 w-45" />
                <img src={polymarketLogo} alt="Sponsor 3" className="h-16 w-auto" />
                <img src={huelLogo} alt="Sponsor 4" className="h-16 w-auto" />
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 mt-10">
                <img src={verizonLogo} alt="Sponsor 1" className="h-16 w-auto" />
                <img src={masterworksLogo} alt="Sponsor 2" className="h-16 w-45" />
                <img src={moneyLogo} alt="Sponsor 3" className="h-16 w-auto" />
                <img src={pinataLogo} alt="Sponsor 4" className="h-16 w-auto" />
            </div>
        </div>
    );
}

export default SponsorGrid;