import { useState, useEffect } from "react";
import Comments from "./Comments";
import "../App.css";
import { useParams } from "react-router-dom";

function Post() {
  const { post_id } = useParams();
  // console.log("post_id: ", post_id);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        console.log("post_id 123: ", post_id);
        const response = await fetch(`http://localhost:3000/posts/${post_id}`);

        if (!response.ok) {
          throw new Error(` error: status: ${response.status}`);
        }
        const data = await response.json();
        if (data && data) {
          setPosts(data);
        } else {
          setPosts([]);
        }
      } catch (err) {
        setError(err);
      } finally {
        if (error) setError("");
        setLoading(false);
      }
    }

    if (post_id) {
      fetchPosts();
    }
  }, [post_id]);

  if (loading) {
    return <div>Loading data...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  console.log(posts);
  return (
    <>
      {/* {posts.map((post) => { */}
      <>
        {" "}
        <h3>{posts.content}</h3>comments:
        <br />
        <Comments post_id={post_id} />
      </>

      {/* })} */}
    </>
  );

  // return <Comments post_id={post_id} />;
}
// function Post({ post_id }) {
//   // const { post_id } = useParams();

//   return (
//     <>
//       <Comments post_id={post_id} />
//     </>
//   );
// }

export default Post;
