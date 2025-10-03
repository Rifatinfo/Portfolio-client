"use server";

export async function create(formData: FormData) {

  const files = formData.getAll("files") as File[];

 files.forEach((file, idx) => {
    if (file instanceof File) {
      console.log(
        `File[${idx}] -> name: ${file.name}, size: ${file.size}, type: ${file.type}`
      );
    }
  });
   console.log( formData);

}
