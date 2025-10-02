// import { auth } from "@/auth/authSetup";
import BlogCard from "@/components/Article";
import Hero from "@/components/Hero";

const HomePage = async () => {
    // const session = await auth();
    return (
        <div>
            {/* <p>Home Page {session?.user?.email}</p> */}
            <Hero/>
            <BlogCard/>
        </div>
    );
};

export default HomePage;