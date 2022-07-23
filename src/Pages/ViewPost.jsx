import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ViewPost() {
  const location = useLocation();
  const data = location.state;

  return (
    <>
      <div>
        <div className="viewpost-head">
          <img className="viewpost-img" src={data.image} />
          <h2 className="viewpost-title">{data.title}</h2>
        </div>
        <div className="viewpost-hidden"></div>
        <div className="viewpost-post">
          <p>{data.post}</p>
        </div>
        <div className="viewpost-author">
          <img className="viewport-author-img" src={data.author.img} />
          <div className="viewpost-author-txt">
            <p style={{ margin: "auto" }}>author : {data.author.name}</p>
          </div>
        </div>
      </div>
    </>
  );
}
