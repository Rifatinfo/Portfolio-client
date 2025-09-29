import Sidebar from "@/components/sidebar";

import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
const DashboardLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <div>
            {/* <main className="min-h-dvh flex gap-4">
                <Sidebar/>
                {children}
            </main> */}

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