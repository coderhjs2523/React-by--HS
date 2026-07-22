import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";
import conf from "./conf/conf";

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-full">
      {label && (
        <label className=" block mb-2 text-sm font-semibold text-gray-700 ">
          {label}
        </label>
      )}

      <div className=" rounded-xl overflow-hidden border border-gray-200 ">
        <Controller
          name={name || "content"}
          control={control}
          render={({ field: { onChange } }) => (
            <Editor
              apiKey={conf.apiKey}
              initialValue={defaultValue}
              init={{
                height: 500,

                menubar: true,

                plugins: [
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "code",
                  "wordcount",
                  "help",
                ],

                toolbar: `
                  undo redo |
                  blocks |
                  bold italic underline |
                  alignleft aligncenter alignright |
                  bullist numlist |
                  link image |
                  table |
                  code |
                  removeformat |
                  help
                  `,

                content_style: `
                  body {
                    font-family: Inter, Arial, sans-serif;
                    font-size:16px;
                    line-height:1.6;
                    padding:10px;
                  }
                  `,
              }}
              onEditorChange={onChange}
            />
          )}
        />
      </div>
    </div>
  );
}
