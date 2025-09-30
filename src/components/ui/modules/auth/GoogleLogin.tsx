"use client";

import { signIn } from "next-auth/react";
import { Button } from "../../button";

export default function GoogleLogin() {
  return (
    <Button
      type="button"
      variant="outline"
      className="w-full cursor-pointer"
      onClick={() => signIn("google", { callbackUrl: "/" })}
    >
      Continue with Google
    </Button>
  );
}
