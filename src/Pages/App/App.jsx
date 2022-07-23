import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CreatePost from "../CreatePost";
import Home from "../Home";
import Login from "../Login";
import Nav from "../Nav";
import { auth } from "../../firebase-config";
import ViewPost from "../ViewPost";

export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (auth.currentUser) {
      console.log(auth.currentUser);
      setIsAuth(true);
    }
  }, []);
  return (
    <>
      <Router>
        <Nav isAuth={isAuth} setIsAuth={setIsAuth} />
        <Routes>
          <Route path="/" element={<Home isAuth={isAuth} />} />
          <Route path="create" element={<CreatePost />} />
          <Route path="login" element={<Login setIsAuth={setIsAuth} />} />
          <Route
            path="/viewpost"
            element={<ViewPost setIsAuth={setIsAuth} />}
          />
        </Routes>
      </Router>
    </>
  );
}
