import React from 'react';

const SponsorGrid: React.FC = () => {
    return (
        <div className="w-full px-4 mt-10">
            <div className="flex flex-wrap justify-center items-center gap-8">
                <img src="/path/to/sponsor1.png" alt="Sponsor 1" className="h-16 w-auto" />
                <img src="/path/to/sponsor2.png" alt="Sponsor 2" className="h-16 w-auto" />
                <img src="/path/to/sponsor3.png" alt="Sponsor 3" className="h-16 w-auto" />
                <img src="/path/to/sponsor4.png" alt="Sponsor 4" className="h-16 w-auto" />
                <img src="/path/to/sponsor5.png" alt="Sponsor 5" className="h-16 w-auto" />
            </div>
        </div>
    );
}

export default SponsorGrid;