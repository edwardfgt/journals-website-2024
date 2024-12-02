import React, { useState, useEffect } from 'react';
import IndustryBlock from './IndustryBlock';

const IndustrySection: React.FC = () => {
    const [maxHeight, setMaxHeight] = useState<number>(0);

    useEffect(() => {
        // Find all description containers and set them to the height of the tallest one
        const descriptions = document.querySelectorAll('.industry-description');
        const heights = Array.from(descriptions).map(el => el.scrollHeight);
        setMaxHeight(Math.max(...heights));
    }, []);

    return (
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center mt-10 w-full px-4 md:px-0 md:space-x-6 space-y-6 md:space-y-0">
            <IndustryBlock
                name="Finance"
                description={
                    <div className="industry-description p-0" style={{ height: maxHeight || 'auto' }}>
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
                imageUrl="https://media.discordapp.net/attachments/991098481089331224/1313172210361565255/IMG_6276.jpg?ex=674f2a6c&is=674dd8ec&hm=566d16de600dac8a683de0458ef8bd97e83d9b78c9d2982b7ddc0d31457516f3&=&format=webp&width=1370&height=914"
            />
            <IndustryBlock
                name="Programming"
                description={
                    <div className="industry-description p-0" style={{ height: maxHeight || 'auto' }}>
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
                    <div className="industry-description p-0" style={{ height: maxHeight || 'auto' }}>
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