import React from "react";
import "./setting.css";
import Sidebar from "../../components/sidebar/Sidebar";

import img4 from "../../Assets/images/img4.jpg";
export default function Setting() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src={img4} alt="" />

            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input type="file" id="finalInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Vamshi" />
          <label>Email</label>
          <input type="email" placeholder="Vamshi@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmitButton">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
