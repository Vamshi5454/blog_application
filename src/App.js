// // import logo from "./logo.svg";
// // import "./App.css";

// import TopBar from "./components/TopBar/TopBar";
// import Home from "./pages/Home/Home";
// import Setting from "./pages/settings/Setting";
// import Single from "./pages/single/Single";
// import Write from "./pages/Write/Write";
// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// function App() {
//   const currentUser = true;
//   return (
//     <Router>
//       <topbar />
//       <Switch>
//         <Route exact path="/">
//           <Home />
//         </Route>
//         <Route path="/posts">
//           <Home />
//         </Route>
//         <Route path="/register">{currentUser ? <Home /> : <Register />}</Route>
//         <Route path="/login">{currentUser ? <Home /> : <Login />}</Route>
//         <Route path="/post/:id">
//           <Single />
//         </Route>
//         <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
//         <Route path="/settings">{currentUser ? <Setting /> : <Login />}</Route>
//       </Switch>
//     </Router>
//   );
// }

// export default App;

// import logo from "./logo.svg";
// import "./App.css";

import TopBar from "./components/TopBar/TopBar";
import Home from "./pages/Home/Home";
import Setting from "./pages/settings/Setting";
import Single from "./pages/single/Single";
import Write from "./pages/Write/Write";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const currentUser = true;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Home />} />
        <Route
          path="/register"
          element={currentUser ? <Home /> : <Register />}
        />
        <Route path="/login" element={currentUser ? <Home /> : <Login />} />
        <Route path="/post/:id" element={<Single />} />
        <Route path="/write" element={currentUser ? <Write /> : <Login />} />
        <Route
          path="/settings"
          element={currentUser ? <Setting /> : <Login />}
        />
      </Routes>
    </Router>
  );
}

export default App;
