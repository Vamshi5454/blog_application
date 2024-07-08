// import React from "react";
import "./singlePost.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import img3 from "../../Assets/images/img3.webp";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SinglePost() {
  const location = useLocation();

  const path = location.pathname.split("/")[2];

  const [post, setPost] = useState({});
  // console.log(path);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("http://localhost:5001/api/posts/" + path);
      // console.log(res);
      setPost(res.data);
    };
    getPost();
  }, [path]);

  // console.log(location);
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && <img className="singlePostImg" src={post.photo} />}

        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username} </b>
            </Link>
          </span>

          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString}
          </span>
        </div>
        <p className="singlePostDesc">{post.desc}</p>
      </div>
    </div>
  );
}
