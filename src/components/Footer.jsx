import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-card border-t border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="bg-gradient-to-br from-[#C9A14A] to-[#D4AF37] p-2.5 rounded-xl shadow-lg">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                            </div>
                            <span className="text-xl font-bold gradient-text">Mysuru Realty</span>
                        </div>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Your trusted partner for real estate in Mysuru. We help you find your dream property with professional service and local expertise.
                        </p>

                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                                { to: '/', label: 'Home' },
                                { to: '/properties', label: 'Properties' },
                                { to: '/about', label: 'About Us' },
                                { to: '/contact', label: 'Contact' }
                            ].map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.to}
                                        className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-foreground">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3 text-muted-foreground group">
                                <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <a
                                    href="https://maps.app.goo.gl/eJVS4qx5ujWV6qjKA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group-hover:text-foreground transition-colors hover:underline"
                                >
                                    Mysuru, Karnataka, India
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="w-5 h-5 flex-shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <a href="tel:+919980034694" className="text-muted-foreground hover:text-primary transition-colors">
                                    +91 99800 34694
                                </a>
                            </li>

                            <li className="flex items-center space-x-3">
                                <a
                                    href="https://www.justdial.com/Mysore/Sri-Sidhaganga-Real-Estate-Akkamahadevi-Road-Jp-Nagar-Vidyaranyapuram/0821PX821-X821-230109160812-A4Z6_BZDET"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-80 transition-opacity"
                                    aria-label="Visit our JustDial Profile"
                                >
                                    <svg className="w-24 h-8" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <text x="0" y="30" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="32" fill="#0076B9">Just</text>
                                        <text x="66" y="30" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="32" fill="#FF7F00">dial</text>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border mt-10 pt-8 text-center">
                    <p className="text-muted-foreground">
                        &copy; {new Date().getFullYear()} <span className="font-semibold text-foreground">Mysuru Realty</span>. All rights reserved.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                        Made with ❤️ in Mysuru
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
