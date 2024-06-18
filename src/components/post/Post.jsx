import React from "react";
import "./post.css";
import image1 from "../../Assets/images/img1.jpg";
export default function Post() {
  return (
    <div className="post">
      <img className="postImg" width="100" height="200" src={image1} alt="" />

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit amet
        ex esse.
      </p>
    </div>
  );
}
