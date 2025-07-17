
import { useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/posts";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.slice(0, 12));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (users.length === 0) {
    return <div>Loading...</div>; 
  }

  return (
 <div className="api-section">
    <h1>How to fetch API</h1>
    {users.map((user) => (
      <div key={user.id} className="user-card">
        <p><strong>ID:</strong> {user.id}</p>
        <h2>{user.title}</h2>
        <p>{user.body}</p>
      </div>
    ))}
  </div>
  );
};

export default App;
