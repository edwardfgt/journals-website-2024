import React from 'react';
import IndustryBlock from './IndustryBlock';

const IndustrySection: React.FC = () => {
    return (
        <div className="flex flex-row items-start justify-center mt-10 w-full space-x-6">
            <IndustryBlock
                name="Finance"
                description={
                    <div className="p-0">
                        <p className="text-lg mb-4">
                            Our finance newsletters serve a diverse and engaged audience, including:
                        </p>

                        <ul className="space-y-2 mb-6">
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                <span>Retail investors looking for timely market insights.</span>
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                <span>Day traders tracking the latest market trends.</span>
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                <span>Individuals exploring alternative investment opportunities.</span>
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                <span>Employees at leading financial institutions.</span>
                            </li>
                        </ul>

                        <p className="text-lg">
                            Our US based Finance audiences are deeply interested in the financial sector, these readers are particularly interested in equity crowd funding, emerging investment platforms, and credit card offers and more.
                        </p>
                    </div>
                }
                imageUrl="https://www.geographicguide.com/united-states/nyc/antique/wall-street/images/vintage-images-ny.jpg"
            />
            <IndustryBlock
                name="Programming"
                description={
                    <div className="p-0">
                        <p className="text-lg mb-4">
                            Reach passionate developers who shape the future of tech:
                        </p>

                        <ul className="space-y-2 mb-6">
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                                <span>Frontend specialists and React developers.</span>
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                                <span>AI-curious software engineers.</span>
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                                <span>Full-stack devs.</span>
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                                <span>Early tech adopters and innovators</span>
                            </li>
                        </ul>

                        <p className="text-lg">
                            Our programming newsletters connect brands with engaged developers across the world who are hungry for the latest tools, frameworks, and industry best practices.
                        </p>
                    </div>
                }
                imageUrl="https://images.pond5.com/1980s-early-computer-geek-checks-footage-090681496_iconl.jpeg"
            />
            <IndustryBlock
                name="Gaming"
                description={
                    <div className="p-0">
                        <p className="text-lg mb-4">
                            We have a passionate and engaged gaming audience across multiple newsletters:
                        </p>

                        <ul className="space-y-2 mb-6">
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                <span>Dedicated fans of AAA and indie games.</span>
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                <span>Active PC and console gamers.</span>
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                <span>Tech-savvy early adopters.</span>
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                <span>Regular purchasers of gaming gear and supplements.</span>
                            </li>
                        </ul>

                        <p className="text-lg">
                            Our gaming newsletters help brands connect with young, authentic gaming audiences across the UK and US, delivering consistently high engagement rates.
                        </p>
                    </div>
                }
                imageUrl="https://preview.redd.it/the-1980s-when-you-went-to-the-games-instead-of-the-games-v0-750wf32iny7b1.png?width=1080&crop=smart&auto=webp&s=b4b5816b7c9d17f26f7f2ab6a9bd80912b8d6ce4"
            />
        </div>
    );
}

export default IndustrySection;