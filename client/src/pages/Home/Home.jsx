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
        const res = await axios.get(
          "http://18.218.39.207:5001/api/posts" + search
        );

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
