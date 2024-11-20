import React from 'react';

const HeadingBlock: React.FC = () => {
    return (
        <div className="text-center py-8 md:py-16 bg-background">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 md:mb-8 text-text px-4">
                <a href="http://Journals.gg" className="hover:text-highlight transition-colors">
                    Journals.gg
                </a> is a creator first newsletter agency
            </h1>
            <p className="text-xl md:text-2xl mb-6 md:mb-8 text-text px-4">
                We're in the inboxes of Youtubers most engaged fans, sending millions of emails a month.
            </p>
            <p className="text-xl md:text-2xl font-semibold text-text px-4">
                Trusted by Youtubers with over 5.35 million subscribers.
            </p>
        </div>
    );
};

export default HeadingBlock;
