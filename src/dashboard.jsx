import React, { useState } from "react";

// Custom Tab Component
const TabButton = ({ icon, label, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`w-full flex items-center space-x-3 px-4 py-2 rounded-md transition-colors duration-200 ${isActive ? "bg-blue-50 text-blue-600" : "hover:bg-gray-50"
            }`}
    >
        {icon}
        <span>{label}</span>
    </button>
);

// Sessions Tab Content
const SessionsTab = () => {
    const [sessions, setSessions] = useState([
        {
            id: 1,
            title: "JavaScript Fundamentals",
            date: "2024-12-24",
            time: "10:00 AM",
            mentor: "Dr. Smith",
            status: "upcoming",
        },
        {
            id: 2,
            title: "React Best Practices",
            date: "2024-12-26",
            time: "2:00 PM",
            mentor: "Prof. Johnson",
            status: "upcoming",
        },
        {
            id: 3,
            title: "Database Design",
            date: "2024-12-22",
            time: "11:00 AM",
            mentor: "Dr. Wilson",
            status: "completed",
        },
    ]);

    const [newSession, setNewSession] = useState({
        title: "",
        date: "",
        time: "",
        mentor: "",
    });

    const [showAddForm, setShowAddForm] = useState(false);

    const handleAddSession = (e) => {
        e.preventDefault();
        setSessions([
            ...sessions,
            {
                id: sessions.length + 1,
                ...newSession,
                status: "upcoming",
            },
        ]);
        setNewSession({ title: "", date: "", time: "", mentor: "" });
        setShowAddForm(false);
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Sessions</h2>
                <button
                    onClick={() => setShowAddForm(!showAddForm)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                    Add Session
                </button>
            </div>

            {showAddForm && (
                <form
                    onSubmit={handleAddSession}
                    className="bg-white p-6 rounded-lg shadow space-y-4"
                >
                    <div className="space-y-2">
                        <label className="block text-sm font-medium">Title</label>
                        <input
                            type="text"
                            required
                            value={newSession.title}
                            onChange={(e) =>
                                setNewSession({ ...newSession, title: e.target.value })
                            }
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium">Date</label>
                            <input
                                type="date"
                                required
                                value={newSession.date}
                                onChange={(e) =>
                                    setNewSession({ ...newSession, date: e.target.value })
                                }
                                className="w-full p-2 border rounded"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium">Time</label>
                            <input
                                type="time"
                                required
                                value={newSession.time}
                                onChange={(e) =>
                                    setNewSession({ ...newSession, time: e.target.value })
                                }
                                className="w-full p-2 border rounded"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium">Mentor</label>
                        <input
                            type="text"
                            required
                            value={newSession.mentor}
                            onChange={(e) =>
                                setNewSession({ ...newSession, mentor: e.target.value })
                            }
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="flex justify-end space-x-3">
                        <button
                            type="button"
                            onClick={() => setShowAddForm(false)}
                            className="px-4 py-2 border rounded hover:bg-gray-50"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            Add Session
                        </button>
                    </div>
                </form>
            )}

            <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="divide-y">
                    {sessions.map((session) => (
                        <div key={session.id} className="p-4 hover:bg-gray-50">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="font-medium">{session.title}</h3>
                                    <p className="text-sm text-gray-500">with {session.mentor}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-gray-600">{session.date}</p>
                                    <p className="text-sm text-gray-600">{session.time}</p>
                                    <span
                                        className={`text-xs px-2 py-1 rounded-full ${session.status === "upcoming"
                                                ? "bg-blue-100 text-blue-800"
                                                : "bg-green-100 text-green-800"
                                            }`}
                                    >
                                        {session.status}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Resources Tab Content
const ResourcesTab = () => {
    const [resources, setResources] = useState([
        {
            id: 1,
            title: "Web Development Guide",
            type: "PDF",
            link: "#",
            date: "2024-12-20",
        },
        {
            id: 2,
            title: "UI/UX Design Principles",
            type: "Video",
            link: "#",
            date: "2024-12-19",
        },
        {
            id: 3,
            title: "Backend Architecture",
            type: "Document",
            link: "#",
            date: "2024-12-18",
        },
    ]);

    const [showUploadForm, setShowUploadForm] = useState(false);
    const [newResource, setNewResource] = useState({
        title: "",
        type: "PDF",
        link: "",
    });

    const handleAddResource = (e) => {
        e.preventDefault();
        setResources([
            ...resources,
            {
                id: resources.length + 1,
                ...newResource,
                date: new Date().toISOString().split("T")[0],
            },
        ]);
        setNewResource({ title: "", type: "PDF", link: "" });
        setShowUploadForm(false);
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Resources</h2>
                <button
                    onClick={() => setShowUploadForm(!showUploadForm)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                    Upload Resource
                </button>
            </div>

            {showUploadForm && (
                <form
                    onSubmit={handleAddResource}
                    className="bg-white p-6 rounded-lg shadow space-y-4"
                >
                    <div className="space-y-2">
                        <label className="block text-sm font-medium">Title</label>
                        <input
                            type="text"
                            required
                            value={newResource.title}
                            onChange={(e) =>
                                setNewResource({ ...newResource, title: e.target.value })
                            }
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium">Type</label>
                        <select
                            value={newResource.type}
                            onChange={(e) =>
                                setNewResource({ ...newResource, type: e.target.value })
                            }
                            className="w-full p-2 border rounded"
                        >
                            <option>PDF</option>
                            <option>Video</option>
                            <option>Document</option>
                            <option>Link</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium">Link/URL</label>
                        <input
                            type="url"
                            required
                            value={newResource.link}
                            onChange={(e) =>
                                setNewResource({ ...newResource, link: e.target.value })
                            }
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="flex justify-end space-x-3">
                        <button
                            type="button"
                            onClick={() => setShowUploadForm(false)}
                            className="px-4 py-2 border rounded hover:bg-gray-50"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            Upload
                        </button>
                    </div>
                </form>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {resources.map((resource) => (
                    <div
                        key={resource.id}
                        className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow"
                    >
                        <div className="flex items-start justify-between">
                            <div>
                                <h3 className="font-medium">{resource.title}</h3>
                                <p className="text-sm text-gray-500">{resource.date}</p>
                            </div>
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm">
                                {resource.type}
                            </span>
                        </div>
                        <a
                            href={resource.link}
                            className="mt-3 text-blue-600 hover:text-blue-800 text-sm inline-block"
                        >
                            View Resource →
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Mentors Tab Content


const MentorsTab = () => {
    const [mentors, setMentors] = useState([
        {
            id: 1,
            name: "Dr. Smith",
            expertise: "Frontend Development",
            availability: "Available",
            rating: 4.8,
        },
        {
            id: 2,
            name: "Prof. Johnson",
            expertise: "Backend Development",
            availability: "Busy",
            rating: 4.9,
        },
        {
            id: 3,
            name: "Dr. Wilson",
            expertise: "Database Design",
            availability: "Available",
            rating: 4.7,
        },
    ]);

    const [selectedMentor, setSelectedMentor] = useState(null);
    const [showScheduleModal, setShowScheduleModal] = useState(false);

    const handleScheduleSession = (mentor) => {
        setSelectedMentor(mentor);
        setShowScheduleModal(true);
    };

    const handleCloseModal = () => {
        setSelectedMentor(null);
        setShowScheduleModal(false);
    };

    const handleSubmitSession = (e) => {
        e.preventDefault();
        // Add logic to submit the session
        alert(`Session scheduled with ${selectedMentor.name}`);
        handleCloseModal();
    };

    return (
        <div className="space-y-6">
            <h2 className="text-xl font-semibold">Mentors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mentors.map((mentor) => (
                    <div key={mentor.id} className="bg-white p-6 rounded-lg shadow">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                <span className="text-blue-600 font-medium">
                                    {mentor.name
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                </span>
                            </div>
                            <div>
                                <h3 className="font-medium">{mentor.name}</h3>
                                <p className="text-sm text-gray-500">{mentor.expertise}</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between text-sm">
                                <span
                                    className={`px-2 py-1 rounded-full ${mentor.availability === "Available"
                                            ? "bg-green-100 text-green-800"
                                            : "bg-red-100 text-red-800"
                                        }`}
                                >
                                    {mentor.availability}
                                </span>
                                <span className="flex items-center">
                                    <svg
                                        className="w-4 h-4 text-yellow-400 mr-1"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    {mentor.rating}
                                </span>
                            </div>
                            <button
                                className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                                onClick={() => handleScheduleSession(mentor)}
                            >
                                Schedule Session
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {showScheduleModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg w-96">
                        <h3 className="text-lg font-semibold mb-4">
                            Schedule Session with {selectedMentor.name}
                        </h3>
                        <form onSubmit={handleSubmitSession} className="space-y-4">
                            <div>
                                <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                                    Date
                                </label>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            <div>
                                <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                                    Time
                                </label>
                                <input
                                    type="time"
                                    id="time"
                                    name="time"
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            <div className="flex justify-end space-x-3">
                                <button
                                    type="button"
                                    onClick={handleCloseModal}
                                    className="px-4 py-2 border rounded hover:bg-gray-50"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                >
                                    Schedule
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};





// Discussions Tab Content
const DiscussionsTab = () => {
    const [discussions, setDiscussions] = useState([
        {
            id: 1,
            title: "Best practices for React hooks?",
            author: "John Doe",
            replies: 5,
            date: "2024-12-20",
        },
        {
            id: 2,
            title: "Database optimization techniques",
            author: "Jane Smith",
            replies: 3,
            date: "2024-12-19",
        },
    ]);

    const [newDiscussion, setNewDiscussion] = useState({
        title: "",
        content: "",
    });

    const [showNewDiscussion, setShowNewDiscussion] = useState(false);

    const handleAddDiscussion = (e) => {
        e.preventDefault();
        setDiscussions([
            ...discussions,
            {
                id: discussions.length + 1,
                ...newDiscussion,
                author: "You",
                replies: 0,
                date: new Date().toISOString().split("T")[0],
            },
        ]);
        setNewDiscussion({ title: "", content: "" });
        setShowNewDiscussion(false);
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Discussions</h2>
                <button
                    onClick={() => setShowNewDiscussion(!showNewDiscussion)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                // Continuing from the DiscussionsTab component...
                >
                    New Discussion
                </button>
            </div>

            {showNewDiscussion && (
                <form
                    onSubmit={handleAddDiscussion}
                    className="bg-white p-6 rounded-lg shadow space-y-4"
                >
                    <div className="space-y-2">
                        <label className="block text-sm font-medium">Title</label>
                        <input
                            type="text"
                            required
                            value={newDiscussion.title}
                            onChange={(e) =>
                                setNewDiscussion({ ...newDiscussion, title: e.target.value })
                            }
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium">Content</label>
                        <textarea
                            required
                            rows="4"
                            value={newDiscussion.content}
                            onChange={(e) =>
                                setNewDiscussion({ ...newDiscussion, content: e.target.value })
                            }
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="flex justify-end space-x-3">
                        <button
                            type="button"
                            onClick={() => setShowNewDiscussion(false)}
                            className="px-4 py-2 border rounded hover:bg-gray-50"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            Post Discussion
                        </button>
                    </div>
                </form>
            )}

            <div className="space-y-4">
                {discussions.map((discussion) => (
                    <div
                        key={discussion.id}
                        className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow"
                    >
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="font-medium text-lg">{discussion.title}</h3>
                                <p className="text-sm text-gray-500">
                                    Posted by {discussion.author} on {discussion.date}
                                </p>
                            </div>
                            <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                                {discussion.replies} replies
                            </span>
                        </div>
                        <div className="mt-4 flex justify-between items-center">
                            <button className="text-blue-600 hover:text-blue-800">
                                View Discussion →
                            </button>
                            <button className="text-gray-600 hover:text-gray-800">
                                Reply
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Dashboard Tab Content
const DashboardTab = () => {
    const stats = {
        upcomingSessions: 3,
        completedProjects: 12,
        availableResources: 45,
        activeDiscussions: 8,
    };

    const [notifications, setNotifications] = useState([
        { id: 1, text: "New session scheduled for tomorrow", type: "info" },
        { id: 2, text: "Project deadline approaching", type: "warning" },
        { id: 3, text: "New resource available", type: "success" },
    ]);

    return (
        <div className="space-y-6">
            {/* Welcome Card */}
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-2">Welcome !</h2>
                <p className="text-gray-600">
                    Track your progress and upcoming activities here.
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg shadow p-4">
                    <h3 className="text-gray-500 text-sm">Upcoming Sessions</h3>
                    <p className="text-2xl font-semibold">{stats.upcomingSessions}</p>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <h3 className="text-gray-500 text-sm">Completed Projects</h3>
                    <p className="text-2xl font-semibold">{stats.completedProjects}</p>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <h3 className="text-gray-500 text-sm">Available Resources</h3>
                    <p className="text-2xl font-semibold">{stats.availableResources}</p>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <h3 className="text-gray-500 text-sm">Active Discussions</h3>
                    <p className="text-2xl font-semibold">{stats.activeDiscussions}</p>
                </div>
            </div>

            {/* Notifications */}
            <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold mb-4">Recent Notifications</h3>
                <div className="space-y-4">
                    {notifications.map((notification) => (
                        <div
                            key={notification.id}
                            className={`p-4 rounded-lg ${notification.type === "warning"
                                    ? "bg-yellow-50 border-l-4 border-yellow-400"
                                    : notification.type === "success"
                                        ? "bg-green-50 border-l-4 border-green-400"
                                        : "bg-blue-50 border-l-4 border-blue-400"
                                }`}
                        >
                            <p
                                className={`text-sm ${notification.type === "warning"
                                        ? "text-yellow-800"
                                        : notification.type === "success"
                                            ? "text-green-800"
                                            : "text-blue-800"
                                    }`}
                            >
                                {notification.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Main FellowBoard Component
const FellowBoard = () => {
    const [currentTab, setCurrentTab] = useState("dashboard");

    const renderTabContent = () => {
        switch (currentTab) {
            case "sessions":
                return <SessionsTab />;
            case "resources":
                return <ResourcesTab />;
            case "mentors":
                return <MentorsTab />;
            case "discussions":
                return <DiscussionsTab />;
            default:
                return <DashboardTab />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation Header */}
            <nav className="bg-blue-600 text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">FellowBoard</h1>
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <svg
                                className="w-6 h-6 cursor-pointer"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                ></path>
                            </svg>
                            <span className="absolute -top-1 -right-1 bg-red-500 text-xs w-4 h-4 rounded-full flex items-center justify-center">
                                3
                            </span>
                        </div>
                        <div className="relative group">
                            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center cursor-pointer">
                                <span className="text-sm">
                                    {localStorage.getItem("userCredentials")
                                        ? JSON.parse(
                                            localStorage.getItem("userCredentials")
                                        ).email[0].toUpperCase()
                                        : "JS"}
                                </span>
                            </div>
                            <div className="absolute right-0 mt-2 w-100 bg-white rounded-md shadow-lg py-2 hidden group-hover:block">
                                <p className="px-4 py-2  text-gray-700">
                                    {localStorage.getItem("userCredentials")
                                        ? JSON.parse(localStorage.getItem("userCredentials")).email
                                        : " "}
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={() => {
                                localStorage.removeItem("userCredentials");
                                window.location.href = "/auth";
                            }}
                            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                        >
                            Sign Out
                        </button>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="container mx-auto mt-6 px-4 flex gap-6">
                {/* Sidebar */}
                <aside className="w-64 flex-shrink-0">
                    <div className="bg-white rounded-lg shadow p-4">
                        <nav className="space-y-2">
                            <TabButton
                                icon={
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                        ></path>
                                    </svg>
                                }
                                label="Dashboard"
                                isActive={currentTab === "dashboard"}
                                onClick={() => setCurrentTab("dashboard")}
                            />
                            <TabButton
                                icon={
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        ></path>
                                    </svg>
                                }
                                label="Sessions"
                                isActive={currentTab === "sessions"}
                                onClick={() => setCurrentTab("sessions")}
                            />
                            <TabButton
                                icon={
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                                        ></path>
                                    </svg>
                                }
                                label="Resources"
                                isActive={currentTab === "resources"}
                                onClick={() => setCurrentTab("resources")}
                            />
                            <TabButton
                                icon={
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                        ></path>
                                    </svg>
                                }
                                label="Mentors"
                                isActive={currentTab === "mentors"}
                                onClick={() => setCurrentTab("mentors")}
                            />
                            <TabButton
                                icon={
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                        ></path>
                                    </svg>
                                }
                                label="Discussions"
                                isActive={currentTab === "discussions"}
                                onClick={() => setCurrentTab("discussions")}
                            />
                        </nav>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1">{renderTabContent()}</main>
            </div>
        </div>
    );
};

export default FellowBoard;
