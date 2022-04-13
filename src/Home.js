import React from "react";
import Bloglist from "./bloglist";
import useFetch from "./usefetch";

function Home() {
  const {
    data: blog,
    ispending,
    error,
  } = useFetch("http://localhost:8000/blog");

  return (
    <div>
      {ispending && <h1>Loading ......</h1>}
      {error && <h1>{error}</h1>}
      {blog && <Bloglist blogs={blog} />}
      {/* {blog && blog.map((post) => <Bloglist key={post.id} blogs={post} />)} */}
    </div>
  );
}
export default Home;
