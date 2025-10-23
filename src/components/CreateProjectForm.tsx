"use client";

import { createPro } from "@/actions/createPro";
import { FileMetadata } from "@/hooks/use-file-upload";
import { useState } from "react";
import { Button } from "./ui/button";
import Form from "next/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import MultipleImageUploader from "./MultipleImageUploader";
import { SubmitButton } from "./ui/modules/auth/SubmitButton";

const CreateProjectForm = () => {
    const [images, setImages] = useState<(File | FileMetadata
    )[] | []>([]);

    const handleImage = async (formData: FormData) => {
        images.forEach((image) => {
            if (image instanceof File) {
                formData.append("files", image);
            }
        });
        await createPro(formData);
    }
    return (
        <div>
            <Form
                action={handleImage}
                className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-4 w-full"
            >
                <h2 className="text-xl font-semibold mb-4">Create Project</h2>

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
                            Description
                        </label>
                        <Textarea
                            id="desc"
                            name="desc"
                            rows={4}
                            className="w-full rounded-md border px-3 py-2"
                        />
                    </div>
                </div>
                {/* image uploader */}
                <div>
                    <MultipleImageUploader onChange={setImages} />
                </div>

                {/* Tags */}
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="tags">
                        Tags (comma separated)
                    </label>
                    <Input
                        type="text"
                        id="tech"
                        name="tech"
                        placeholder="Next.js, React, Web Development"
                        className="w-full rounded-md border px-3 py-2 focus:ring 0"
                    />
                </div>
                {/* github */}
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="tags">
                       github
                    </label>
                    <Input
                        type="text"
                        id="github"
                        name="github"
                        placeholder="Add git Hub link"
                        className="w-full rounded-md border px-3 py-2 focus:ring 0"
                    />
                </div>
                {/*live  */}
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="tags">
                    Live Link
                    </label>
                    <Input
                        type="text"
                        id="live_url"
                        name="live_url"
                        placeholder="Add live link"
                        className="w-full rounded-md border px-3 py-2 focus:ring 0"
                    />
                </div>


                {/* <Button
                    type="submit"
                    className="w-full  text-white font-medium py-2 rounded-md cursor-pointer transition"
                >
                    Submit
                </Button> */}
                <SubmitButton />
            </Form>
        </div>
    );
};

export default CreateProjectForm;

