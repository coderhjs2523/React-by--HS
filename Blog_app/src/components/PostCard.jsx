import React from "react";
import appwriteService from "./appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featureimage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div
        className=" w-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 " >
        <div className="overflow-hidden">
          <img
            src={appwriteService.getFileView(featureimage)}
            alt={title}
            className=" w-full h-52 object-cover hover:scale-105 transition-transform duration-500 " />
        </div>

        <div className="p-5">
          <h2
            className= 'text-x font-bol text-gray-80 line-clamp- hover:text-blue-60 transition-color' >
            {title}
          </h2>

          <p
            className= 'mt- text-s text-gray-50' >
            Read article →
          </p>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
