import { Home, Settings, FileText, Users } from "lucide-react";

export const navData = [
  {
    title: "Main",
    items: [
      { title: "Home", url: "/", icon: Home },
      { title: "Users", url: "/users", icon: Users },
      { title: "Reports", url: "/reports", icon: FileText },
    ],
  },
  {
    title: "Settings",
    items: [
      { title: "Profile", url: "/settings/profile", icon: Settings },
      { title: "Account", url: "/settings/account", icon: Settings },
    ],
  },
];