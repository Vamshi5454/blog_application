// import React from "react";
import { useState, useEffect } from "react";
// import { useEffect } from "react";
import Header from "../../components/Header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  // console.log(location);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/posts" + search);

        console.log(res.data);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}

// import { useState, useEffect } from "react";
// import Header from "../../components/Header/Header";
// import Posts from "../../components/posts/Posts";
// import Sidebar from "../../components/sidebar/Sidebar";
// import "./home.css";
// import axios from "axios";

// export default function Home() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const res = await axios.get("/posts"); // Ensure the endpoint is correct
//         // setPosts(res.data); // Update the state with the fetched data
//         console.log(res);
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//       }
//     };
//     fetchPosts();
//   }, []);

//   return (
//     <>
//       <Header />
//       <div className="home">
//         <Posts posts={posts} /> {/* Pass the posts to the Posts component */}
//         <Sidebar />
//       </div>
//     </>
//   );
// }
