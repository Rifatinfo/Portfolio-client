// import { auth } from "@/auth/authSetup";
import Hero from "@/components/Hero";

const HomePage = async () => {
    // const session = await auth();
    return (
        <div>
            {/* <p>Home Page {session?.user?.email}</p> */}
            <Hero/>
        </div>
    );
};

export default HomePage;