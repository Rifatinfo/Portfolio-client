export { auth as middleware} from "@/auth/authSetup"
 
console.log("Hello From middleware");


export const config = {
  matcher: ["/dashboard"],
}
