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
                    <span>🏨</span>
                    <span className="logo-highlight">HotelAdmin</span>
                </Link>

                <div className="nav-links">
                    {isAuthenticated ? (
                        <>
                            <Link href="/hotels" className="nav-link">Hotels</Link>
                            <div className="nav-user" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <span className="user-badge">👋 {user}</span>
                                <button onClick={logout} className="btn-logout">Logout</button>
                            </div>
                        </>
                    ) : (
                        <Link href="/login" className="btn btn-primary btn-sm">Staff Login</Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
