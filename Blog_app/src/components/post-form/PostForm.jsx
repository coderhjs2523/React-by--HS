import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "../index";
import appwriteService from "../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.$id || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    if (post) {
      const file = data.image[0]
        ? await appwriteService.uploadFile(data.image[0])
        : null;

      if (file) {
        appwriteService.deleteFile(post.featureimage);
      }

      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        featureimage: file ? file.$id : undefined,
      });

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = await appwriteService.uploadFile(data.image[0]);

      if (file) {
        const fileId = file.$id;
        data.featureimage = fileId;
        const dbPost = await appwriteService.createPost({
          ...data,
          userid: userData.$id,
        });

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

    return "";
  }, []);

  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className=" grid grid-cols-1 lg:grid-cols-3 gap-8 " >
      {/* Left Section */}
      <div
        className=" lg:col-span-2 space-y-5 ">
        <div
          className=" bg-white rounded-xl p-6 shadow-sm ">
          <Input
            label="Title :"
            placeholder="Enter post title"
            className="mb-5"
            {...register("title", { required: true })}
          />

          <Input
            label="Slug :"
            placeholder="Post URL"
            className="mb-5"
            {...register("slug", { required: true })}
            onInput={(e) => {
              setValue("slug", slugTransform(e.currentTarget.value), {
                shouldValidate: true,
              });
            }}
          />

          <RTE
            label="Content :"
            name="content"
            control={control}
            defaultValue={getValues("content")}
          />
        </div>
      </div>

      {/* Right Section */}
      <div>
        <div
          className=" bg-white rounded-xl p-6 shadow-sm sticky top-24 ">
          <Input
            label="Featured Image :"
            type="file"
            className="mb-5"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("image", { required: !post })}
          />

          {post && (
            <div className="mb-5">
              <p
                className=" text-sm font-medium text-gray-600 mb-2 ">
                Current Image
              </p>

              <img
                src={appwriteService.getFileView(post.featureimage)}
                alt={post.title}
                className=" w-full h-48 object-cover rounded-xl "/>
            </div>
          )}

          <Select
            options={["active", "inactive"]}
            label="Status"
            className="mb-5"
            {...register("status", { required: true })}
          />

          <Button
            type="submit"
            bgColor={post ? "bg-green-500" : "bg-blue-600"}
            className=" w-full py-3 text-lg " >
            {post ? "Update Post" : "Publish Post"}
          </Button>
        </div>
      </div>
    </form>
  );
}
