import React from "react";
import { Link } from "react-router-dom";

// const Bloglist = ({ title, body, author, id }) => {
function Bloglist({ blogs }) {
  console.log(blogs);
  return (
    //     <div key={id}>
    //       <div>{id}</div>
    //       <h2>{title}</h2>
    //       <p> {body}</p>
    //       <h3>written by: {author}</h3>
    //     </div>
    <div>
      {blogs.map((element) => {
        return (
          <div className="border" key={element.id}>
            <br />
            <Link to={`/blog/${element.id}`}>
              <h2>{element.title}</h2>
              <h3>written by {element.author}</h3>
            </Link>
            {/* <button>delete </button> */}
          </div>
        );
      })}
    </div>
  );
}

export default Bloglist;
