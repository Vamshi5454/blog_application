// import React, { useContext, useState } from "react";
// import "./setting.css";
// import Sidebar from "../../components/sidebar/Sidebar";
// import axios from "axios";

// import img4 from "../../Assets/images/img4.jpg";
// import { Context } from "../../context/Context";
// export default function Setting() {
//   const { user } = useContext(Context);
//   const [file, setFile] = useState(null);
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [success, setSuccess] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const updatedUser = {
//       userId: user._id,
//       username,
//       email,
//       password,
//     };

//     if (file) {
//       const data = new FormData();
//       const filename = Date.now() + "-" + file.name;
//       data.append("file", file, filename);
//       updatedUser.profilePic = filename;
//       try {
//         await axios.post("http://localhost:5001/api/upload", data);
//       } catch (err) {
//         console.log(err);
//       }
//     }

//     try {
//       await axios.put(
//         "http://localhost:5001/api/users/" + user._id,
//         updatedUser
//       );
//       setSuccess(true);
//     } catch (err) {}
//   };
//   return (
//     <div className="settings">
//       <div className="settingsWrapper">
//         <div className="settingsTitle">
//           <span className="settingsTitleUpdate">Update Your Account</span>
//           <span className="settingsTitleDelete">Delete Account</span>
//         </div>
//         <form className="settingsForm" onSubmit={handleSubmit}>
//           <label>Profile Picture</label>
//           <div className="settingsPP">
//             <img
//               src={user.profilePic}
//               // src={file ? URL.createObjectURL(file) : user.profilePic}
//               alt=""
//             />

//             <label htmlFor="fileInput">
//               <i className="settingsPPIcon fa-regular fa-circle-user"></i>
//             </label>
//             <input
//               type="file"
//               id="finalInput"
//               style={{ display: "none" }}
//               onChange={(e) => setFile(e.target.files[0])}
//             />
//           </div>
//           <label>Username</label>
//           <input
//             type="text"
//             placeholder={user.username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <label>Email</label>
//           <input
//             type="email"
//             placeholder={user.email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <label>Password</label>
//           <input
//             type="password"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button className="settingsSubmitButton" type="submit">
//             Update
//           </button>
//           {success && (
//             <span
//               style={{ color: "green", textAlign: "center", marginTop: "20px" }}
//             >
//               Profile has been Updated...
//             </span>
//           )}
//         </form>
//       </div>
//       <Sidebar />
//     </div>
//   );
// }

import "./setting.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Settings() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5001/images/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("http://localhost:5001/api/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put(
        "http://localhost:5001/api/users/" + user._id,
        updatedUser
      );
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={file ? URL.createObjectURL(file) : PF + user.profilePic}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
