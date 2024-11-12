import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-background p-4">
            <div className="container mx-auto flex items-center">
                <Link to="/" className="text-text font-bold text-xl">Journals.gg</Link>
                <div className="space-x-4 flex items-center ml-8">
                    <Link to="/contact" className="btn btn-ghost text-text hover:bg-highlight hover:text-white normal-case">Contact</Link>
                    <Link to="https://creator.journals.gg/" className="btn btn-ghost text-text hover:bg-highlight hover:text-white normal-case">Grow a newsletter</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;