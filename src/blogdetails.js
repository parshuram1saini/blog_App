import React from "react";
import { useParams, useHistory } from "react-router-dom";
import useFetch from "./usefetch";

function Blogdetails() {
  const { id } = useParams();
  const history = useHistory();
  const {
    data: blog,
    ispending,
    error,
  } = useFetch("http://localhost:8000/blog/" + id);

  //  method of deletel blog
  const handleDelete = () => {
    fetch("http://localhost:8000/blog/" + id, {
      method: "DELETE",
    }).then(() => history.push("/"));
  };

  return (
    <div>
      {/* <h2> blog-details :-{id}</h2> */}
      {ispending && <h1>Loading ......</h1>}
      {error && <h1>{error}</h1>}
      {blog && (
        <article>
          <h1>{blog.title}</h1>
          <p> {blog.body}</p>
          <button onClick={() => handleDelete()}>delete </button>
        </article>
      )}
    </div>
  );
}

export default Blogdetails;
