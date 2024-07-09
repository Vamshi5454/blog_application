// import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import "./sidebar.css";
import img2 from "../../Assets/images/img2.jpg";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("http://localhost:5001/api/categories");
      // console.log(res);
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src={img2} alt="" />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className=" topIcon fa-brands fa-square-facebook"></i>
          <i className=" topIcon fa-brands fa-square-x-twitter"></i>
          <i className=" topIcon fa-brands fa-linkedin-in"></i>
          <i className=" topIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
}
