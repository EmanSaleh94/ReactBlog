import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const postCollection = collection(db, "blogPosts");

  const storeData = async () => {
    if (auth.currentUser == null) {
      navigate("/login");
      return;
    }

    await addDoc(postCollection, {
      title,
      post,
      image,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
        img: auth.currentUser.photoURL,
      },
    });
    navigate("/");
  };

  useEffect(() => {
    if (auth.currentUser == null) {
      navigate("/login");
      return;
    }
  }, []);

  return (
    <>
      <div className="createPostPage">
        <div className="cpContainer">
          <h1>Create Post</h1>
          <div className="inputGp">
            <label>Title:</label>
            <input
              placeholder="Title..."
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="inputGp">
            <label>Post:</label>
            <textarea
              placeholder="Post..."
              onChange={(e) => {
                setPost(e.target.value);
              }}
            />
          </div>
          <div className="inputGp">
            <label>Image Link:</label>
            <input
              type="text"
              placeholder="Image Link..."
              onChange={(e) => {
                setImage(e.target.value);
              }}
            />
          </div>
          <button onClick={storeData}>Post</button>
        </div>
      </div>
    </>
  );
}
