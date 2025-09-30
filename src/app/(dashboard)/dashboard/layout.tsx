import { auth } from "@/auth/authSetup";
import Sidebar from "@/components/sidebar";
import { Button } from "@/components/ui/button";

import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import Link from "next/link";
const DashboardLayout = async ({
    children,
}: {
    children: React.ReactNode
}) => {

    const session = await auth();
    if(!session){
        return (
      <div className="flex h-screen w-full items-center justify-center bg-gray-100">
        <div className="rounded-xl bg-white p-8 shadow-lg text-center">
          <h1 className="text-2xl font-bold text-red-500 mb-2">
            You Are Not Authorized
          </h1>
          <p className="text-gray-600">Please log in to access this page.</p>
           <Link href="/login"><Button className="mt-6 bg-red-500 text-white cursor-pointer">Login</Button></Link>
        </div>
      </div>
    )
    }
    return (
        <div>

            <SidebarProvider>
                <Sidebar />
                <SidebarInset>
                    <header className="flex h-16 shrink-0 items-center gap-2 border-b">
                        <div className="flex items-center gap-2 px-3">
                            <SidebarTrigger />
                            <Separator orientation="vertical" className="mr-2 h-4" />
                        </div>
                    </header>
                    <div className="flex flex-1 flex-col gap-4 p-4">
                        {children}
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </div>
    );
};

export default DashboardLayout;