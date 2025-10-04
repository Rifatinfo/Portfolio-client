// import { auth } from "@/auth/authSetup";
import About from "@/components/About";
import BlogCard from "@/components/Article";
import Hero from "@/components/Hero";

const HomePage = async () => {
    // const session = await auth();
    return (
        <div>
            {/* <p>Home Page {session?.user?.email}</p> */}
            <Hero/>
            <BlogCard/>
            <About/>
        </div>
    );
};

export default HomePage;