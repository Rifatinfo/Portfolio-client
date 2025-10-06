// import { auth } from "@/auth/authSetup";
import About from "@/components/About";
import BlogCard from "@/components/Article";
import Hero from "@/components/Hero";
import Testimonial from "@/components/Testimonial";
import Work from "@/components/Work";

const HomePage = async () => {
    // const session = await auth();
    return (
        <div>
            {/* <p>Home Page {session?.user?.email}</p> */}
            <Hero/>
            <About/>
            <Work/>
            <Testimonial/>
            <BlogCard/>
        </div>
    );
};

export default HomePage;