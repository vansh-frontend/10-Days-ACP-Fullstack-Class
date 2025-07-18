import React, { useEffect, useState } from 'react';

const API = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setUsers(data.slice(0, 12)))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  if (users.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="api-section">
      {users.map((user) => (
        <div key={user.id} className="api-card">
          <h2>{user.id}. {user.title}</h2>
          <p>{user.body}</p>
        </div>
      ))}
    </div>
  );
};

export default API;
