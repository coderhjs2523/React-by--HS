import React from "react";
import { Container, PostForm } from "../components";

function AddPost() {
  return (
    <div className=" min-h-screen bg-gray-50 py-10 ">
      <Container>
        <div className=" bg-white rounded-2xl shadow-lg p-6 md:p-10 ">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 ">
            Create New Post
          </h1>

          <PostForm />
        </div>
      </Container>
    </div>
  );
}

export default AddPost;
