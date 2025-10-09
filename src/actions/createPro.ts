"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function createPro(formData: FormData) {

 const files = formData.getAll("files") as File[];

 files.forEach((file, idx) => {
    if (file instanceof File) {
      console.log(
        `File[${idx}] -> name: ${file.name}, size: ${file.size}, type: ${file.type}`
      );
    }
  });
   console.log( formData);

  const projectInfo = Object.fromEntries(formData.entries());
  const modifiedData = {
    title : projectInfo.title,
    desc : projectInfo.desc,
    live_url : projectInfo.live_url,
    github : projectInfo.github,
    tech : projectInfo.tech
    .toString()
    .split(",")
    .map((tag) => tag.trim()),
  };

  const sendData = new FormData();
  sendData.append("data", JSON.stringify(modifiedData))
  
  files.forEach((file) => {
    if(file instanceof File){
       sendData.append("file", file);
    }
  })
  
  const res = await fetch(`https://portfolio-puce-six-73.vercel.app/api/project`,{
    method : "POST",
    body : sendData
  })
  const result = await res.json();
  console.log("Submitted", modifiedData, result);

  if(result.statusCode === 201 || result.success === true || (result?.data?.id)){
    revalidateTag("PROJECT");
    redirect("/");
  }

}
