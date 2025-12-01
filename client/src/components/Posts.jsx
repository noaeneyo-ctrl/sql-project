import { useState, useEffect } from "react";
import "../App.css";
import { Link, Outlet } from "react-router-dom";
function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  // const userId = 1;
  // const currentUser = localStorage.getItem("currentUser");
  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("http://localhost:3000/posts", {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error(` error: status: ${response.status}`);
        }
        const jsonData = await response.json();
        setPosts(jsonData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);
  if (loading) {
    return <div>Loading data...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      <div>
        <h1>Posts</h1>

        {posts.map((post) => (
          <div key={post.post_id}>
            <Link to={`${post.post_id}`}>{post.title}</Link>
            <br />
            <br />
          </div>
        ))}
        <Outlet />
      </div>
    </>
  );
}

export default Posts;
