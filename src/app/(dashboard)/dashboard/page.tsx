import { auth } from "@/auth/authSetup";

export default async function DashboardHome() {

  const session = await auth();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center  w-full">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome, {session?.user?.name}!
      </h1>
      <p className="text-lg text-gray-600 italic text-center">
        {session?.user?.email}
      </p>
    </div>
  );
}
