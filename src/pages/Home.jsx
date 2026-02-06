import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import PropertyCard from '../components/PropertyCard';
import initialProperties from '../data/properties.json';

const Home = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        const storedProperties = localStorage.getItem('properties');
        if (storedProperties) {
            setProperties(JSON.parse(storedProperties));
        } else {
            setProperties(initialProperties);
        }
    }, []);

    const featuredProperties = properties
        .filter(p => p.status === 'Available')
        .slice(0, 3);

    const scrollRef = useRef(null);
    const isPausedRef = useRef(false);
    const requestRef = useRef(null);

    // Property types data moved here to be used in multiple places
    const propertyTypes = [
        { icon: '🏞️', title: 'Plots', desc: 'DTCP Approved', color: 'from-[#0F4C3A] to-[#2D8B6E]', type: 'Plot' },
        { icon: '🏡', title: 'Houses', desc: 'Independent Villas', color: 'from-[#2D8B6E] to-[#0F4C3A]', type: 'House' },
        { icon: '🏢', title: 'Flats', desc: 'Premium Apartments', color: 'from-[#C9A14A] to-[#D4AF37]', type: 'Flat' },
        { icon: '🏬', title: 'Commercial', desc: 'Business Spaces', color: 'from-[#D4AF37] to-[#C9A14A]', type: 'Commercial' },
        { icon: '🌾', title: 'Agriculture', desc: 'Farm Lands', color: 'from-[#2D8B6E] to-[#0F4C3A]', type: 'Agriculture' }
    ];

    // Double the items for seamless loop
    const displayPropertyTypes = [...propertyTypes, ...propertyTypes];

    useEffect(() => {
        const animate = () => {
            if (!isPausedRef.current && scrollRef.current) {
                const scrollContainer = scrollRef.current;

                // Slow continuous scroll (0.5px per frame)
                scrollContainer.scrollLeft += 0.5;

                // Reset logic for seamless loop
                // We check if we've scrolled past half the content
                if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                    scrollContainer.scrollLeft = 0;
                }
            }
            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, []);

    return (
        <div className="min-h-screen">
            {/* Hero Section - Emerald Green & Gold */}
            <section className="relative bg-gradient-to-br from-[#0F4C3A] via-[#2D8B6E] to-[#0F4C3A] text-white py-20 md:py-32 overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-[#C9A14A] rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#2D8B6E] rounded-full blur-3xl animate-pulse delay-500"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/30">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                            </span>
                            <span className="text-sm font-medium">Trusted by 5000+ Happy Customers</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                            Trusted Real Estate Services
                            <br />
                            <span className="bg-gradient-to-r from-[#C9A14A] to-[#D4AF37] bg-clip-text text-transparent">
                                in Mysuru
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl mb-10 text-white/90 max-w-2xl mx-auto font-light">
                            Your dream property awaits in the cultural capital of Karnataka ✨
                        </p>
                    </div>
                </div>

                {/* Wave Divider */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                        <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="currentColor" className="text-background" />
                    </svg>
                </div>
            </section>

            {/* Property Types - Swipeable on Mobile, Grid on Desktop */}
            <section className="py-16 -mt-1">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Desktop Grid - Hidden on Mobile */}
                    <div className="hidden md:grid md:grid-cols-5 gap-4 md:gap-6">
                        {propertyTypes.map((item, index) => (
                            <Link to={`/properties?type=${item.type}`} key={index} className="card group cursor-pointer block">
                                <div className="p-6 text-center">
                                    <div className={`bg-gradient-to-br ${item.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Swipeable Carousel */}
                    {/* Mobile Swipeable Carousel */}
                    <div
                        ref={scrollRef}
                        className="md:hidden overflow-x-auto scrollbar-hide"
                        onMouseEnter={() => isPausedRef.current = true}
                        onMouseLeave={() => isPausedRef.current = false}
                        onTouchStart={() => isPausedRef.current = true}
                        onTouchEnd={() => setTimeout(() => isPausedRef.current = false, 3000)}
                    >
                        <div className="flex gap-4 pb-4 w-max">
                            {displayPropertyTypes.map((item, index) => (
                                <Link to={`/properties?type=${item.type}`} key={index} className="card group cursor-pointer flex-shrink-0 w-[80vw] sm:w-[50vw] block">
                                    <div className="p-6 text-center">
                                        <div className={`bg-gradient-to-br ${item.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                            {item.icon}
                                        </div>
                                        <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>

            {/* Featured Properties */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="section-title">
                            Featured <span className="gradient-text">Properties</span>
                        </h2>
                        <p className="section-subtitle">
                            Handpicked properties for you in prime locations of Mysuru
                        </p>
                    </div>

                    {featuredProperties.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
                            {featuredProperties.map((property) => (
                                <PropertyCard key={property.id} property={property} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-muted-foreground">No featured properties available at the moment.</p>
                    )}

                    <div className="text-center">
                        <Link to="/properties" className="btn-primary inline-flex items-center gap-2">
                            <span>View All Properties</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 bg-accent/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="section-title">
                            Why Choose <span className="gradient-text">Us?</span>
                        </h2>
                        <p className="section-subtitle">
                            Your trusted partner in Mysuru real estate
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                ),
                                title: 'Verified Properties',
                                desc: 'All properties are verified with clear legal documentation and DTCP approval',
                                gradient: 'from-[#0F4C3A] to-[#2D8B6E]'
                            },
                            {
                                icon: (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                ),
                                title: 'Expert Guidance',
                                desc: 'Professional assistance throughout your property buying journey',
                                gradient: 'from-[#C9A14A] to-[#D4AF37]'
                            },
                            {
                                icon: (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                ),
                                title: 'Quick Service',
                                desc: 'Fast response times and efficient property viewing arrangements',
                                gradient: 'from-[#2D8B6E] to-[#0F4C3A]'
                            }
                        ].map((item, index) => (
                            <div key={index} className="card group">
                                <div className="p-8 text-center">
                                    <div className={`bg-gradient-to-br ${item.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            {item.icon}
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
