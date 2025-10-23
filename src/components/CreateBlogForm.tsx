"use client";
import Form from "next/form";

import { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import MultipleImageUploader from "./MultipleImageUploader";
import { create } from "@/actions/create";
import { FileMetadata } from "@/hooks/use-file-upload";
import { SubmitButton } from "./ui/modules/auth/SubmitButton";

export default function CreateBlogForm() {
  const [isFeatured, setIsFeatured] = useState("false");
  const [images, setImages] = useState<(File | FileMetadata)[] | []>([]);

  const handleImage = async (formData: FormData) => {
    images.forEach((image) => {
    if (image instanceof File) {
      formData.append("files", image);
    }
  });
   await create(formData);
   }

  return (
    <Form
      action={handleImage}
      className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-4 w-full"
    >
      <h2 className="text-xl font-semibold mb-4">Create Blog</h2>

      {/* Title */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="title">
          Title
        </label>
        <Input
          type="text"
          id="title"
          name="title"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* Content */}
      <div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="content">
            Content
          </label>
          <Textarea
            id="content"
            name="content"
            rows={4}
            className="w-full rounded-md border px-3 py-2"
          />
        </div>
      </div>
      {/* image uploader */}
      <div>
        <MultipleImageUploader onChange={setImages}/>
      </div>

      {/* Tags */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="tags">
          Tags (comma separated)
        </label>
        <Input
          type="text"
          id="tags"
          name="tags"
          placeholder="Next.js, React, Web Development"
          className="w-full rounded-md border px-3 py-2 focus:ring 0"
        />
      </div>

      {/* Featured */}
      <div>
        <p className="block text-sm font-medium mb-1">Featured</p>
        <div className="flex gap-6">
          <label className="flex items-center gap-2">
            <Input
              type="radio"
              name="isFeatured"
              value="true"
              checked={isFeatured === "true"}
              onChange={(e) => setIsFeatured(e.target.value)}
            />
            Yes
          </label>
          <label className="flex items-center gap-2">
            <Input
              type="radio"
              name="isFeatured"
              value="false"
              checked={isFeatured === "false"}
              onChange={(e) => setIsFeatured(e.target.value)}
            />
            No
          </label>
        </div>
      </div>

      {/* <Button
        type="submit"
        className="w-full  text-white font-medium py-2 rounded-md cursor-pointer transition"
      >
        Submit
      </Button> */}
      <SubmitButton/>
    </Form>
  );
}
