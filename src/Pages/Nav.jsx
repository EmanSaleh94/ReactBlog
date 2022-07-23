import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";

export default function Nav({ isAuth, setIsAuth }) {
  let navigate = useNavigate();
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };

  useEffect(() => {
    if (auth.currentUser) {
      console.log(auth.currentUser);
      setIsAuth(true);
    }
  }, []);

  return (
    <>
      <nav>
        <Link className="navLink" to="/">
          Home
        </Link>
        {isAuth ? (
          <Link className="navLink" to="create">
            CreatePost
          </Link>
        ) : (
          ""
        )}
        {isAuth ? (
          <button className="btn btn-outline-light" onClick={signUserOut}>
            Log Out
          </button>
        ) : (
          <Link className="navLink" to="login">
            Login
          </Link>
        )}
      </nav>
    </>
  );
}
