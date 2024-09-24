import React from 'react';
import IndustryBlock from './IndustryBlock';

const IndustrySection: React.FC = () => {
    return (
        <div className="flex flex-row items-start justify-center mt-10 w-full space-x-6">
            <IndustryBlock
                name="Finance"
                description="Innovative solutions and cutting-edge technology."
                audienceStats="60K+ readers"
                companyNames={["TechCorp", "InnovateX", "FutureTech"]}
                imageUrl="https://www.geographicguide.com/united-states/nyc/antique/wall-street/images/vintage-images-ny.jpg"
            />
            <IndustryBlock
                name="Programming"
                description="Advancing medical science and patient care."
                audienceStats="500K+ readers"
                companyNames={["HealthPlus", "MediCare", "Wellness Inc."]}
                imageUrl="https://images.pond5.com/1980s-early-computer-geek-checks-footage-090681496_iconl.jpeg"
            />
            <IndustryBlock
                name="Gaming"
                description="Advancing medical science and patient care."
                audienceStats="500K+ readers"
                companyNames={["HealthPlus", "MediCare", "Wellness Inc."]}
                imageUrl="https://preview.redd.it/the-1980s-when-you-went-to-the-games-instead-of-the-games-v0-750wf32iny7b1.png?width=1080&crop=smart&auto=webp&s=b4b5816b7c9d17f26f7f2ab6a9bd80912b8d6ce4"
            />
        </div>
    );
}

export default IndustrySection;