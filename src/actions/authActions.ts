"use server"
import { signIn } from "@/auth/authSetup";

export async function signInWithGoogle (){
    await signIn("google");
}