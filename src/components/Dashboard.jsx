import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const USERS_PER_PAGE = 3;

  const fetchUsers = async (pageNum = 1) => {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");

    const start = (pageNum - 1) * USERS_PER_PAGE;
    const end = start + USERS_PER_PAGE;
    const paginatedUsers = data.slice(start, end);

    setUsers(paginatedUsers);
    setTotalPages(Math.ceil(data.length / USERS_PER_PAGE));
  };

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6">
      <h2 className="text-4xl font-bold text-white mb-8 text-center drop-shadow-lg">User Dashboard</h2>

      <div className="flex justify-center mb-10">
        <input
          className="w-full md:w-1/2 px-4 py-2 rounded-xl backdrop-blur-md bg-white/30 text-white placeholder-white/70 border border-white/30 focus:ring-2 focus:ring-white outline-none"
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="bg-white/20 backdrop-blur-lg rounded-xl p-6 shadow-xl border border-white/30 hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <h3 className="text-2xl font-semibold text-white mb-2">{user.name}</h3>
            <p className="text-white/80 mb-1">Email: {user.email}</p>
            <p className="text-white/80">Phone: {user.phone}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-10 space-x-2">
        <button
          className="px-4 py-2 bg-white/30 backdrop-blur-md text-white rounded-lg hover:bg-white/40 transition disabled:opacity-50"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={`px-4 py-2 rounded-lg ${
              page === i + 1
                ? "bg-white text-pink-600 font-bold"
                : "bg-white/30 backdrop-blur-md text-white hover:bg-white/40"
            } transition`}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          className="px-4 py-2 bg-white/30 backdrop-blur-md text-white rounded-lg hover:bg-white/40 transition disabled:opacity-50"
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
