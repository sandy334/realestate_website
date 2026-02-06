import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import initialProperties from '../data/properties.json';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [properties, setProperties] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentProperty, setCurrentProperty] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        type: 'Plot',
        price: '',
        location: '',
        area: '',
        description: '',
        images: '',
        status: 'Available'
    });

    useEffect(() => {
        // Check authentication
        const isAuthenticated = localStorage.getItem('isAdminAuthenticated');
        if (!isAuthenticated) {
            navigate('/admin/login');
            return;
        }

        // Load properties
        const storedProperties = localStorage.getItem('properties');
        if (storedProperties) {
            setProperties(JSON.parse(storedProperties));
        } else {
            setProperties(initialProperties);
            localStorage.setItem('properties', JSON.stringify(initialProperties));
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('isAdminAuthenticated');
        navigate('/admin/login');
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const propertyData = {
            ...formData,
            images: formData.images.split(',').map(img => img.trim()),
            id: isEditing ? currentProperty.id : Date.now().toString()
        };

        let updatedProperties;
        if (isEditing) {
            updatedProperties = properties.map(p =>
                p.id === currentProperty.id ? propertyData : p
            );
        } else {
            updatedProperties = [...properties, propertyData];
        }

        setProperties(updatedProperties);
        localStorage.setItem('properties', JSON.stringify(updatedProperties));

        // Reset form
        resetForm();
    };

    const handleEdit = (property) => {
        setCurrentProperty(property);
        setFormData({
            ...property,
            images: property.images.join(', ')
        });
        setIsEditing(true);
        setShowForm(true);
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this property?')) {
            const updatedProperties = properties.filter(p => p.id !== id);
            setProperties(updatedProperties);
            localStorage.setItem('properties', JSON.stringify(updatedProperties));
        }
    };

    const resetForm = () => {
        setFormData({
            id: '',
            title: '',
            type: 'Plot',
            price: '',
            location: '',
            area: '',
            description: '',
            images: '',
            status: 'Available'
        });
        setIsEditing(false);
        setCurrentProperty(null);
        setShowForm(false);
    };

    const getTypeColor = (type) => {
        switch (type) {
            case 'Plot':
                return 'bg-blue-100 text-blue-800';
            case 'House':
                return 'bg-green-100 text-green-800';
            case 'Flat':
                return 'bg-purple-100 text-purple-800';
            case 'Commercial':
                return 'bg-orange-100 text-orange-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
                            <p className="text-gray-600">Manage your properties</p>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Add Property Button */}
                <div className="mb-8">
                    <button
                        onClick={() => setShowForm(!showForm)}
                        className="btn-primary"
                    >
                        {showForm ? 'Cancel' : '+ Add New Property'}
                    </button>
                </div>

                {/* Property Form */}
                {showForm && (
                    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">
                            {isEditing ? 'Edit Property' : 'Add New Property'}
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">
                                        Title *
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        required
                                        className="input-field"
                                        placeholder="e.g., Spacious 3BHK Villa"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">
                                        Type *
                                    </label>
                                    <select
                                        name="type"
                                        value={formData.type}
                                        onChange={handleChange}
                                        required
                                        className="input-field"
                                    >
                                        <option value="Plot">Plot</option>
                                        <option value="House">House</option>
                                        <option value="Flat">Flat</option>
                                        <option value="Commercial">Commercial</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">
                                        Price *
                                    </label>
                                    <input
                                        type="text"
                                        name="price"
                                        value={formData.price}
                                        onChange={handleChange}
                                        required
                                        className="input-field"
                                        placeholder="e.g., ₹85,00,000"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">
                                        Location *
                                    </label>
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        required
                                        className="input-field"
                                        placeholder="e.g., Vijayanagar, Mysuru"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">
                                        Area *
                                    </label>
                                    <input
                                        type="text"
                                        name="area"
                                        value={formData.area}
                                        onChange={handleChange}
                                        required
                                        className="input-field"
                                        placeholder="e.g., 1800 sq.ft"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">
                                        Status *
                                    </label>
                                    <select
                                        name="status"
                                        value={formData.status}
                                        onChange={handleChange}
                                        required
                                        className="input-field"
                                    >
                                        <option value="Available">Available</option>
                                        <option value="Sold">Sold</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">
                                    Description *
                                </label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="input-field resize-none"
                                    placeholder="Detailed description of the property..."
                                ></textarea>
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">
                                    Image URLs * (comma-separated)
                                </label>
                                <input
                                    type="text"
                                    name="images"
                                    value={formData.images}
                                    onChange={handleChange}
                                    required
                                    className="input-field"
                                    placeholder="https://example.com/image1.jpg, https://example.com/image2.jpg"
                                />
                                <p className="text-sm text-gray-500 mt-1">
                                    Enter multiple image URLs separated by commas
                                </p>
                            </div>

                            <div className="flex gap-4">
                                <button type="submit" className="btn-primary">
                                    {isEditing ? 'Update Property' : 'Add Property'}
                                </button>
                                <button
                                    type="button"
                                    onClick={resetForm}
                                    className="btn-outline"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {/* Properties List */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        All Properties ({properties.length})
                    </h2>

                    {properties.length === 0 ? (
                        <p className="text-gray-600 text-center py-8">No properties added yet.</p>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Property
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Type
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Price
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Location
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {properties.map((property) => (
                                        <tr key={property.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center">
                                                    <img
                                                        src={property.images[0]}
                                                        alt={property.title}
                                                        className="w-16 h-16 rounded-lg object-cover mr-4"
                                                    />
                                                    <div>
                                                        <div className="text-sm font-medium text-gray-900">
                                                            {property.title}
                                                        </div>
                                                        <div className="text-sm text-gray-500">
                                                            {property.area}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getTypeColor(property.type)}`}>
                                                    {property.type}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {property.price}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {property.location}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${property.status === 'Available'
                                                        ? 'bg-green-100 text-green-800'
                                                        : 'bg-red-100 text-red-800'
                                                    }`}>
                                                    {property.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <button
                                                    onClick={() => handleEdit(property)}
                                                    className="text-primary-600 hover:text-primary-900 mr-4"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(property.id)}
                                                    className="text-red-600 hover:text-red-900"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
