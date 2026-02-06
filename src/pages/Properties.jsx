import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import initialProperties from '../data/properties.json';

const Properties = () => {
    const [searchParams] = useSearchParams();
    const initialType = searchParams.get('type') || 'All';

    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [selectedType, setSelectedType] = useState(initialType);
    const [selectedSubtype, setSelectedSubtype] = useState('All');
    const [selectedStatus, setSelectedStatus] = useState('All');

    const subTypes = {
        House: ['Lease', 'Rent', 'Sell'],
        Plot: ['Residential', 'Industrial', 'Commercial'],
        Flat: ['Rent', 'Lease', 'Sell'],
        Commercial: ['Rent', 'Lease', 'Sell'],
        Agriculture: ['Sell', 'Lease']
    };

    useEffect(() => {
        const storedProperties = localStorage.getItem('properties');
        if (storedProperties) {
            const parsed = JSON.parse(storedProperties);
            setProperties(parsed);
            setFilteredProperties(parsed);
        } else {
            setProperties(initialProperties);
            setFilteredProperties(initialProperties);
        }
    }, []);

    useEffect(() => {
        let filtered = properties;

        if (selectedType !== 'All') {
            filtered = filtered.filter(p => p.type === selectedType);
        }

        if (selectedSubtype !== 'All') {
            // For Plots, match subtype string. For others (Transaction Type), match subtype string.
            // We added 'subtype' to JSON, so simpler:
            filtered = filtered.filter(p => p.subtype === selectedSubtype);
        }

        if (selectedStatus !== 'All') {
            filtered = filtered.filter(p => p.status === selectedStatus);
        }

        setFilteredProperties(filtered);
    }, [selectedType, selectedStatus, selectedSubtype, properties]);

    // Reset subtype when main type changes
    useEffect(() => {
        setSelectedSubtype('All');
    }, [selectedType]);

    const propertyTypes = [
        { value: 'All', label: 'All Properties', icon: '🏘️' },
        { value: 'Plot', label: 'Plots', icon: '🏞️' },
        { value: 'House', label: 'Houses', icon: '🏡' },
        { value: 'Flat', label: 'Flats', icon: '🏢' },
        { value: 'Commercial', label: 'Commercial', icon: '🏬' },
        { value: 'Agriculture', label: 'Agriculture', icon: '🌾' }
    ];

    const statusOptions = [
        { value: 'All', label: 'All Status', icon: '📋' },
        { value: 'Available', label: 'Available', icon: '✅' },
        { value: 'Sold', label: 'Sold', icon: '🔴' }
    ];

    const getFilterButtonClass = (isSelected) => {
        if (isSelected) {
            return "bg-primary text-primary-foreground shadow-lg scale-105";
        }
        return "bg-card hover:bg-accent text-foreground shadow-md hover:shadow-lg";
    };

    return (
        <div className="min-h-screen">
            {/* Header Section */}
            <section className="relative bg-gradient-to-br from-[#0F4C3A] via-[#2D8B6E] to-[#0F4C3A] text-white py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                            Explore <span className="bg-gradient-to-r from-[#C9A14A] to-[#D4AF37] bg-clip-text text-transparent">Properties</span>
                        </h1>
                        <p className="text-xl text-white/90 max-w-2xl mx-auto">
                            Discover your perfect property in Mysuru's prime locations
                        </p>
                    </div>
                </div>
            </section>

            {/* Filters Section - Swiggy Style */}
            <section className="bg-card/80 backdrop-blur-xl shadow-lg border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    {/* Property Type Filter */}
                    <div className="mb-6">
                        <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                            Property Type
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {propertyTypes.map((type) => (
                                <button
                                    key={type.value}
                                    onClick={() => setSelectedType(type.value)}
                                    className={`${getFilterButtonClass(selectedType === type.value)} px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2 border border-border`}
                                >
                                    <span className="text-lg">{type.icon}</span>
                                    <span>{type.label}</span>
                                    {selectedType === type.value && (
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Subtype Filter - Shows only when a specific Type is selected */}
                    {selectedType !== 'All' && subTypes[selectedType] && (
                        <div className="mb-6 animate-fadeIn">
                            <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                                Category
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                <button
                                    onClick={() => setSelectedSubtype('All')}
                                    className={`${getFilterButtonClass(selectedSubtype === 'All')} px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 border border-border`}
                                >
                                    All Categories
                                </button>
                                {subTypes[selectedType].map((sub) => (
                                    <button
                                        key={sub}
                                        onClick={() => setSelectedSubtype(sub)}
                                        className={`${getFilterButtonClass(selectedSubtype === sub)} px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 border border-border capitalize`}
                                    >
                                        {sub}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}



                    {/* Results Count */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="text-muted-foreground">
                            Showing <span className="font-bold text-foreground text-lg">{filteredProperties.length}</span> {filteredProperties.length === 1 ? 'property' : 'properties'}
                        </div>
                        {(selectedType !== 'All' || selectedStatus !== 'All') && (
                            <button
                                onClick={() => {
                                    setSelectedType('All');
                                    setSelectedSubtype('All');
                                    setSelectedStatus('All');
                                }}
                                className="text-primary hover:text-primary/80 font-semibold flex items-center gap-2 transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                Clear Filters
                            </button>
                        )}
                    </div>
                </div>
            </section>

            {/* Properties Grid */}
            <section className="py-12 bg-accent/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {filteredProperties.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {filteredProperties.map((property) => (
                                <PropertyCard key={property.id} property={property} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-muted mb-6">
                                <svg className="w-12 h-12 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">No Properties Found</h3>
                            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                                We couldn't find any properties matching your filters. Try adjusting your search criteria.
                            </p>
                            <button
                                onClick={() => {
                                    setSelectedType('All');
                                    setSelectedStatus('All');
                                }}
                                className="btn-primary"
                            >
                                Reset All Filters
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Properties;
