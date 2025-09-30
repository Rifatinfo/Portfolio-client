// app/components/GoogleSignout.tsx
"use client";

import { signOut } from "next-auth/react";
import { Button } from "../../button";

export default function GoogleSignout() {
  return (
    <Button
      onClick={() => signOut({ callbackUrl: "/login" })}
      variant="outline"
      className="w-full cursor-pointer"
    >
      Sign out
    </Button>
  );
}
