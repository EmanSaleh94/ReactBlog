import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { Link } from "react-router-dom";

export default function Home(isAuth) {
  const [postLists, setPostList] = useState([]);

  const postCollection = collection(db, "blogPosts");

  const deletePost = async (id) => {
    const postDoc = doc(db, "blogPosts", id);
    await deleteDoc(postDoc);
  };

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollection);
      let postData = data.docs.map((row) => ({ ...row.data(), id: row.id }));
      setPostList(postData);
    };
    getPosts();
  });

  return (
    <>
      <div className="homePage">
        {postLists.length > 0
          ? postLists.map((post) => {
              return (
                <div key={post.id} className="post">
                  <div className="postHeader">
                    <div className="title">
                      <p>{post.title}</p>
                    </div>
                    <div className="deletePost">
                      {auth.currentUser &&
                      post.author.id === auth.currentUser.uid ? (
                        <button
                          onClick={() => {
                            deletePost(post.id);
                          }}
                        >
                          &#128465;
                        </button>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="imageContainer">
                    <img className="imgSize" src={post.image} />
                  </div>
                  <div className="postTextContainer">{post.post}</div>
                  <div className="endRow">
                    <Link className="read-more" to="/viewpost" state={post}>
                      Read more
                    </Link>
                    <h3 className="postAuthor">@{post.author.name}</h3>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    </>
  );
}
