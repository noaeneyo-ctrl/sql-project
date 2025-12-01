import { useState, useEffect } from "react";

import "../App.css";
// import { response } from "express";

function Comments({ post_id }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  // const userId = 1;
  // const currentUser = localStorage.getItem("currentUser");
  useEffect(() => {
    async function fetchComments() {
      try {
        const response = await fetch(
          `http://localhost:3000/comments/${post_id}`,
          {
            method: "GET",
          }
        );
        if (!response.ok) {
          throw new Error(` status: ${response.status}`);
        }
        const jsonData = await response.json();
        setComments(jsonData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchComments();
  }, [post_id]);
  if (loading) {
    return <div>Loading data...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      {comments.map((comment) => {
        <h3 key={comment.id}>{comment.content}</h3>;
      })}
    </>
  );
}

export default Comments;
