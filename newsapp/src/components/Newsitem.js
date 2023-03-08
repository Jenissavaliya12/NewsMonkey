import React, { Component } from "react";

const Newsitem = (props) => {
  let { title, description, imgUrl, newsUrl, author, date } = props;
  return (
    <div className="container mt-3">
      <div className="card mt-4 " style={{ width: "18rem" }}>
        <img
          src={
            !imgUrl
              ? "https://images.news18.com/ibnlive/uploads/2021/07/1627642197_news18_breaking_news-1200x800.jpg"
              : imgUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unkonown" : author} on{" "}
              {new Date(date).toLocaleDateString()}
            </small>
          </p>
          <a
            href={newsUrl}
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};
export default Newsitem;
