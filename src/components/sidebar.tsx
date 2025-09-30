
import Link from "next/link";
import { navData } from "./navData";
import { signOut } from "@/auth/authSetup";


export default async function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white border-r p-4 flex flex-col">
      <h2 className="text-lg font-bold mb-6">Dashboard</h2>

      <nav className="flex flex-col gap-6">
        {navData.map((section, i) => (
          <div key={i} className="flex flex-col gap-2">
            <p className="text-xs uppercase text-gray-400 font-semibold">
              {section.title}
            </p>

            {section.items.map((item, j) => {
              const Icon = item.icon;

              return item.isLogout ? (
                <form
                   key={j+1}
                  action={async () => {
                    "use server"
                    await signOut()
                  }}
                ><button
                  key={j}

                  type="submit"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-black cursor-pointer"

                >
                    <Icon className="h-4 w-4 cursor-pointer" />
                    {item.title}
                  </button></form>

              ) : (
                <Link
                  key={j}
                  href={item.url}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-black"
                >
                  <Icon className="h-4 w-4" />
                  {item.title}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

    </aside>
  );
}
