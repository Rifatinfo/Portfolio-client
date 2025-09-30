"use client"

import { useFormStatus } from "react-dom"
import { Button } from "@/components/ui/button"
import { Loader2Icon } from "lucide-react"

export function SubmitButton() {
  const {pending} = useFormStatus();

  return (
    <Button>
        {
            pending ? (
                <><Loader2Icon className="animate-spin mr-2 h-4 w-4"/></>
            ) : ("Sign In")}
    </Button>
  )
}
