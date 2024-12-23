import React, { useState } from 'react';
import FellowBoard from './dashboard';

const AuthPages = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userRole, setUserRole] = useState(null);
    const [showRegister, setShowRegister] = useState(false);

    const handleLogin = (credentials) => {
        const savedCredentials = JSON.parse(localStorage.getItem('userCredentials'));

        if (savedCredentials) {
            if (
                credentials.email === savedCredentials.email &&
                credentials.password === savedCredentials.password
            ) {
                setIsLoggedIn(true);
                setUserRole(savedCredentials.role);
            } else {
                alert('Invalid credentials! Use the correct email and password.');
            }
        } else {
            alert('No user found. Please register first.');
        }
    };

    const handleRegister = (userData) => {
        if (userData.password !== userData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        localStorage.setItem('userCredentials', JSON.stringify({
            email: userData.email,
            password: userData.password,
            role: userData.role
        }));

        setShowRegister(false);
        alert('Registration successful! Please login.');
    };

    if (isLoggedIn) {
        return <FellowBoard role={userRole} />;
    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                {showRegister ? (
                    <RegisterForm
                        onRegister={handleRegister}
                        onSwitch={() => setShowRegister(false)}
                    />
                ) : (
                    <LoginForm
                        onLogin={handleLogin}
                        onSwitch={() => setShowRegister(true)}
                    />
                )}
            </div>
        </div>
    );
};

const LoginForm = ({ onLogin, onSwitch }) => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(credentials);
    };

    return (
        <>
            <div className="text-center">
                <h2 className="text-4xl font-extrabold text-gray-900">
                    Welcome to FellowBoard
                </h2>
                <p className="mt-2 text-lg text-gray-600">
                    Or{' '}
                    <button
                        onClick={onSwitch}
                        className="font-medium text-blue-600 hover:text-blue-500"
                    >
                        create a new account
                    </button>
                </p>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="rounded-md shadow-sm space-y-4">
                    <div>
                        <label htmlFor="email" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-lg"
                            placeholder="Email address"
                            value={credentials.email}
                            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-lg"
                            placeholder="Password"
                            value={credentials.password}
                            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                        />
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                            Remember me
                        </label>
                    </div>

                    <div className="text-sm">
                        <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                            Forgot your password?
                        </a>
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Sign in
                    </button>
                </div>
            </form>
        </>
    );
};

const RegisterForm = ({ onRegister, onSwitch }) => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'fellow' // default role
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userData.password !== userData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        onRegister(userData);
    };

    return (
        <>
            <div className="text-center">
                <h2 className="text-4xl font-extrabold text-gray-900">
                    Create your account
                </h2>
                <p className="mt-2 text-lg text-gray-600">
                    Or{' '}
                    <button
                        onClick={onSwitch}
                        className="font-medium text-blue-600 hover:text-blue-500"
                    >
                        sign in to your account
                    </button>
                </p>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="rounded-md shadow-sm space-y-4">
                    <div>
                        <label htmlFor="name" className="sr-only">
                            Full Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-lg"
                            placeholder="Full Name"
                            value={userData.name}
                            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="register-email" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="register-email"
                            name="email"
                            type="email"
                            required
                            className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-lg"
                            placeholder="Email address"
                            value={userData.email}
                            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="register-password" className="sr-only">
                            Password
                        </label>
                        <input
                            id="register-password"
                            name="password"
                            type="password"
                            required
                            className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-lg"
                            placeholder="Password"
                            value={userData.password}
                            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="confirm-password" className="sr-only">
                            Confirm Password
                        </label>
                        <input
                            id="confirm-password"
                            name="confirmPassword"
                            type="password"
                            required
                            className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-lg"
                            placeholder="Confirm Password"
                            value={userData.confirmPassword}
                            onChange={(e) => setUserData({ ...userData, confirmPassword: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="role" className="sr-only">
                            Role
                        </label>
                        <select
                            id="role"
                            name="role"
                            required
                            className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-lg"
                            value={userData.role}
                            onChange={(e) => setUserData({ ...userData, role: e.target.value })}
                        >
                            <option value="fellow">Fellow</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Create Account
                    </button>
                </div>
            </form>
        </>
    );
};

export default AuthPages;
