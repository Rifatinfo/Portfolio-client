import { auth } from "@/auth/authSetup";

const HomePage = async () => {
    const session = await auth();
    return (
        <div>
            <p>Home Page {session?.user?.email}</p>
        </div>
    );
};

export default HomePage;