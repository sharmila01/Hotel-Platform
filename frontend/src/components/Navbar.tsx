'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

const Navbar = () => {
    const { user, logout, isAuthenticated } = useAuth();

    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link href="/" className="nav-logo">
                    🏨 <span className="logo-highlight">HotelAdmin</span>
                </Link>
                
                <div className="nav-links">
                    <Link href="/hotels" className="nav-link">Hotels</Link>
                    
                    {isAuthenticated ? (
                        <>
                            <div className="user-badge">
                                👤 {user}
                            </div>
                            <button onClick={logout} className="btn-logout">
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link href="/login" className="btn btn-primary">
                            Staff Login
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
