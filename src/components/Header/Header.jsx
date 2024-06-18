// import React from "react";
import "./header.css";
export default function Header() {
  return (
    <div className="header">
      {/* <h1>header</h1> */}
      <div className="headerTitles">
        <span className="headerTitleSm">React & node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImng"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        // src="https://media.istockphoto.com/id/1653712897/photo/jetpack-girl.jpg?s=1024x1024&w=is&k=20&c=J17dFYlziNO5y4umQtxzcgAvo9QlP0KJjiGuKG8usfU="
        // src="https://images.unsplash.com/photo-1457364887197-9150188c107b?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
}
