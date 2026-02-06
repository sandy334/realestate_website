const About = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <section className="bg-gradient-to-r from-primary to-primary/90 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
                    <p className="text-xl text-primary-foreground/90">
                        Your trusted real estate partner in Mysuru
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">
                            Welcome to Mysuru Realty
                        </h2>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                We are a dedicated real estate service provider based in the beautiful city of Mysuru, Karnataka.
                                With years of experience in the local property market, we understand the unique needs of our clients
                                and the nuances of Mysuru's real estate landscape.
                            </p>

                            <p className="text-gray-700 mb-6 leading-relaxed">
                                Our mission is to help you find your dream property, whether it's a residential plot for building
                                your home, an independent house for your family, a modern flat in a gated community, or a commercial
                                space for your business. We pride ourselves on offering personalized service, transparent dealings,
                                and expert guidance throughout your property journey.
                            </p>

                            <div className="mb-8 animate-fadeIn">
                                <div className="inline-flex items-center gap-3 bg-white px-5 py-3 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <span className="text-gray-600 font-semibold">Trusted Partner of</span>
                                    <svg className="h-8 w-auto" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <text x="0" y="30" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="32" fill="#0076B9">Just</text>
                                        <text x="66" y="30" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="32" fill="#FF7F00">dial</text>
                                    </svg>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Our Services</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                                <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="bg-primary/10 p-4 rounded-full mb-4">
                                            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <h4 className="font-bold text-gray-800 mb-2">Bank Loan Facilities</h4>
                                        <p className="text-gray-600 text-sm">Assistance with home loans from leading banks</p>
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="bg-primary/10 p-4 rounded-full mb-4">
                                            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </div>
                                        <h4 className="font-bold text-gray-800 mb-2">E-Khata Service</h4>
                                        <p className="text-gray-600 text-sm">Complete support for E-Khata processing</p>
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="bg-primary/10 p-4 rounded-full mb-4">
                                            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <h4 className="font-bold text-gray-800 mb-2">EC Services</h4>
                                        <p className="text-gray-600 text-sm">Hassle-free Encumbrance Certificate retrieval</p>
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="bg-primary/10 p-4 rounded-full mb-4">
                                            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                            </svg>
                                        </div>
                                        <h4 className="font-bold text-gray-800 mb-2">Legal Consultant</h4>
                                        <p className="text-gray-600 text-sm">Expert legal advice and documentation support</p>
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="bg-primary/10 p-4 rounded-full mb-4">
                                            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                        </div>
                                        <h4 className="font-bold text-gray-800 mb-2">Hassle-Free Registration</h4>
                                        <p className="text-gray-600 text-sm">Smooth and transparent registration process</p>
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="bg-primary/10 p-4 rounded-full mb-4">
                                            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <h4 className="font-bold text-gray-800 mb-2">Free Property Visits</h4>
                                        <p className="text-gray-600 text-sm">Arranged site visits at your convenience</p>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Why Mysuru?</h3>

                            <p className="text-gray-700 mb-6 leading-relaxed">
                                Mysuru, also known as the Cultural Capital of Karnataka, is a city that beautifully blends heritage
                                with modernity. With its pleasant climate, excellent infrastructure, growing IT sector, world-class
                                educational institutions, and rich cultural heritage, Mysuru has become one of the most sought-after
                                cities for real estate investment in South India.
                            </p>

                            <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Our Commitment</h3>

                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700">100% verified properties with clear legal documentation</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700">Transparent pricing with no hidden charges</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700">Expert guidance from property selection to registration</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700">Quick response and personalized service</span>
                                </li>
                            </ul>

                            <div className="bg-primary/5 border-l-4 border-primary p-6 mt-8">
                                <p className="text-gray-800 font-semibold mb-2">Ready to find your dream property?</p>
                                <p className="text-gray-700">
                                    Contact us today and let us help you make the right investment decision in Mysuru's thriving real estate market.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
