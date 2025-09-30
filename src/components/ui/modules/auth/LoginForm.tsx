/* eslint-disable @typescript-eslint/no-unused-vars */


import { signIn } from "@/auth/authSetup";
import { redirect } from "next/navigation";
import { Input } from "../../input";
import Password from "../../Password";
import { SubmitButton } from "./SubmitButton";
export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {


  return (
     <form
      className="flex flex-col gap-4"
      action={async (formData) => {
        "use server"
        const email = formData.get("email") as string
        const password = formData.get("password") as string

        const res = await signIn("credentials", {
          redirect: false,
          email,
          password,
        })

        if (!res?.error) {
          // success → redirect to dashboard
          redirect("/dashboard");
          
        }
        
      }}
    >
      <label>
        Email
        <Input  name="email" type="email" placeholder="Admin Email"/>
        {/* <input className="border-4 rounded-md px-20 py-2" name="email" type="email" /> */}
      </label>
      <label>
        Password
        <Password name="password" type="password"/>
        {/* <input className="border-4 rounded-md  px-20 py-2" name="password" type="password" /> */}
      </label>
      {/* <Button className="mt-4 cursor-pointer">Sign In</Button> */}
      <SubmitButton/>
    </form>
  );
}