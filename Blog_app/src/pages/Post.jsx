import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../components/appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userid === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featureimage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="min-h-screen bg-gray-50 py-10">
      <Container>
        <article className=" bg-white rounded-2xl shadow-lg overflow-hidden p-5 md:p-8 ">
          <div className=" relative w-full flex justify-center mb-8 ">
            <img
              src={appwriteService.getFileView(post.featureimage)}
              alt={post.title}
              className=" w-full h-[300px] md:h-[450px] object-cover rounded-2xl "
            />

            {isAuthor && (
              <div className=" absolute top-5 right-5 flex gap-3 ">
                <Link to={`/edit-post/${post.$id}`}>
                  <Button bgColor="bg-green-500">Edit</Button>
                </Link>

                <Button bgColor="bg-red-500" onClick={deletePost}>
                  Delete
                </Button>
              </div>
            )}
          </div>

          <h1 className=" text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight ">
            {post.title}
          </h1>

          <div className=" prose prose-lg max-w-none text-gray-700 ">
            {parse(post.content)}
          </div>
        </article>
      </Container>
    </div>
  ) : null;
}
