import React from 'react';

const HeadingBlock: React.FC = () => {
    return (
        <div className="text-center py-12 bg-background">
            <h1 className="text-4xl font-bold mb-6 text-text">
                <a href="http://Journals.gg" className="hover:text-highlight transition-colors">
                    Journals.gg
                </a> is a creator first newsletter agency
            </h1>
            <p className="text-2xl mb-6 text-text">
                We're in the inboxes of Youtubers most engaged fans, sending millions of emails a month.
            </p>
            <p className="text-3xl font-semibold text-text">
                Trusted by Youtubers with over 5.35 million subscribers.
            </p>
        </div>
    );
};

export default HeadingBlock;
