import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-background p-4">
            <div className="container mx-auto flex items-center">
                <Link to="/" className="text-text font-bold text-xl pr-8">Journals.gg</Link>
                <div className="space-x-4">
                    <Link to="/contact" className="text-text hover:text-highlight">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;