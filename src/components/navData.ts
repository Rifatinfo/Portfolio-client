import { Home,  FileText, Users, LogOut } from "lucide-react";

type NavItem = {
  title : string,
  url : string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon : React.ComponentType<any>,
  isLogout? : boolean
};

type NavSection = {
  title : string,
  items : NavItem[]
};

export const navData  : NavSection[] = [
  {
    title: "Main",
    items: [
      { title: "Home", url: "/", icon: Home },
      { title: "Add Blog", url: "/dashboard/create-blog", icon: Users },
      { title: "Blog Action", url: "/dashboard/blog-action", icon: Users },
      { title: "Add Project", url: "/dashboard/project", icon: FileText },
      { title: "Project Action", url: "/dashboard/project-action", icon: FileText },
    ],
  },
  {
    title: "Settings",
    items: [
      { title: "Logout", url: "/login", icon: LogOut, isLogout: true },
    ],
  },
];

