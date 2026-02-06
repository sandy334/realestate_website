import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="bg-card/80 backdrop-blur-xl shadow-lg sticky top-0 z-50 border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <div className="bg-gradient-to-br from-[#C9A14A] to-[#D4AF37] p-2.5 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                        </div>
                        <div>
                            <span className="text-xl font-bold gradient-text">Mysuru Realty</span>
                            <p className="text-xs text-muted-foreground hidden sm:block">Premium Properties</p>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        <Link
                            to="/"
                            className="text-foreground hover:bg-primary hover:text-white font-medium px-4 py-2 rounded-lg transition-all duration-200"
                        >
                            Home
                        </Link>
                        <Link
                            to="/properties"
                            className="text-foreground hover:bg-primary hover:text-white font-medium px-4 py-2 rounded-lg transition-all duration-200"
                        >
                            Properties
                        </Link>
                        <Link
                            to="/about"
                            className="text-foreground hover:bg-primary hover:text-white font-medium px-4 py-2 rounded-lg transition-all duration-200"
                        >
                            About
                        </Link>
                        <Link
                            to="/contact"
                            className="text-foreground hover:bg-primary hover:text-white font-medium px-4 py-2 rounded-lg transition-all duration-200"
                        >
                            Contact
                        </Link>

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="ml-2 p-2.5 rounded-lg hover:bg-accent transition-all duration-200 text-foreground"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            )}
                        </button>

                        <a href="tel:+919980034694" className="ml-2 bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:scale-105">
                            <span className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="hidden lg:inline text-white">Call Now</span>
                            </span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center gap-2 md:hidden">
                        {/* Phone Icon for Mobile */}
                        <a
                            href="tel:+918073490284"
                            className="p-2 rounded-lg bg-gradient-to-r from-[#C9A14A] to-[#D4AF37] hover:from-[#B89140] hover:to-[#C9A14A] transition-all duration-200 text-white shadow-md"
                            aria-label="Call now"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </a>
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg hover:bg-accent transition-all duration-200 text-foreground"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            )}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-foreground hover:text-primary focus:outline-none p-2"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden pb-4 space-y-2">
                        <Link
                            to="/"
                            className="block text-foreground hover:text-primary hover:bg-accent font-medium px-4 py-3 rounded-lg transition-all duration-200"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            to="/properties"
                            className="block text-foreground hover:text-primary hover:bg-accent font-medium px-4 py-3 rounded-lg transition-all duration-200"
                            onClick={() => setIsOpen(false)}
                        >
                            Properties
                        </Link>
                        <Link
                            to="/about"
                            className="block text-foreground hover:text-primary hover:bg-accent font-medium px-4 py-3 rounded-lg transition-all duration-200"
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            to="/contact"
                            className="block text-foreground hover:text-primary hover:bg-accent font-medium px-4 py-3 rounded-lg transition-all duration-200"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </Link>
                        <a href="tel:+919980034694" className="btn-primary w-full text-center block">
                            Call Now
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
