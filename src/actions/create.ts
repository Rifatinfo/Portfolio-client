"use server";

// import { auth } from "@/auth/authSetup";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function create(formData: FormData) {
  // const session = await auth();

 const files = formData.getAll("files") as File[];

 files.forEach((file, idx) => {
    if (file instanceof File) {
      console.log(
        `File[${idx}] -> name: ${file.name}, size: ${file.size}, type: ${file.type}`
      );
    }
  });
   console.log( formData);

  const blogInfo = Object.fromEntries(formData.entries());
  const modifiedData = {
    title : blogInfo.title,
    content : blogInfo.content,
    // authorId : "be4fe9c3-c679-4ff8-949e-4585fc348e4b",
    // authorId : session?.user?.id,
    tags : blogInfo.tags
    .toString()
    .split(",")
    .map((tag) => tag.trim()),
    isFeatured : Boolean(blogInfo.isFeatured)
  };

  const sendData = new FormData();
  sendData.append("data", JSON.stringify(modifiedData))
  
  files.forEach((file) => {
    if(file instanceof File){
       sendData.append("file", file);
    }
  })
  
  const res = await fetch(`https://portfolio-puce-six-73.vercel.app/api/post`,{
    method : "POST",
    body : sendData
  })
  const result = await res.json();
  console.log("Submitted", modifiedData, result);

  if(result.statusCode === 201 || result.success === true || (result?.data?.id)){
    revalidateTag("BLOGS");
    revalidatePath("/")
    redirect("/");
  }

}
