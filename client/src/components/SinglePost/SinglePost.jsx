// import React from "react";
import "./singlePost.css";

import React from "react";
import img3 from "../../Assets/images/img3.webp";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src={img3} />
        <h1 className="singlePostTitle">
          Laboris sunt aute cupidatat
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Vamshi </b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          I am writing to express my interest in the Full Stack Web Developer
          position at your dynamic early-stage startup based in Tampa, Florida.
          With strong experience in CSS, MongoDB, and Node.js, combined with a
          keen eye for design and a passion for creating user-friendly
          interfaces, I believe I am a perfect fit for your team.
        </p>
      </div>
    </div>
  );
}
