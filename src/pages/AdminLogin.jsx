import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        const adminUsername = import.meta.env.VITE_ADMIN_USERNAME;
        const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;

        if (credentials.username === adminUsername && credentials.password === adminPassword) {
            // Store authentication in localStorage
            localStorage.setItem('isAdminAuthenticated', 'true');
            navigate('/admin/dashboard');
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 flex items-center justify-center px-4 py-12">
            <div className="max-w-md w-full">
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                    {/* Logo/Header */}
                    <div className="text-center mb-8">
                        <div className="bg-gradient-to-r from-primary-600 to-primary-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800">Admin Login</h2>
                        <p className="text-gray-600 mt-2">Sign in to manage properties</p>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                            {error}
                        </div>
                    )}

                    {/* Login Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={credentials.username}
                                onChange={handleChange}
                                required
                                className="input-field"
                                placeholder="Enter username"
                                autoComplete="username"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={credentials.password}
                                onChange={handleChange}
                                required
                                className="input-field"
                                placeholder="Enter password"
                                autoComplete="current-password"
                            />
                        </div>

                        <button type="submit" className="btn-primary w-full">
                            Sign In
                        </button>
                    </form>

                    {/* Info */}
                    <div className="mt-6 text-center text-sm text-gray-600">
                        <p>For authorized personnel only</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
