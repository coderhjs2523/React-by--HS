import React, { useEffect, useState } from "react";
import appwriteService from "../components/appwrite/config";
import { Container, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.rows);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-gray-50">
        <Container>
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-700 ">
              No posts available
            </h1>

            <p className=" mt-3 text-gray-500 ">
              Login and create your first blog post
            </p>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className=" w-full min-h-screen bg-gray-50 py-10 ">
      <Container>
        <h1 className=" text-3xl font-bold text-gray-800 mb-8">Latest Posts</h1>

        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
          {posts.map((post) => (
            <PostCard key={post.$id} {...post} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
