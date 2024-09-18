import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white font-bold text-xl">Journals.gg</Link>
                <div className="space-x-4">
                    <Link to="/" className="text-white hover:text-gray-300">Home</Link>
                    <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;