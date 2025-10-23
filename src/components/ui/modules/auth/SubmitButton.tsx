"use client"

import { useFormStatus } from "react-dom"
import { Button } from "@/components/ui/button"
import {  Loader } from "lucide-react"

export function SubmitButton() {
  const {pending} = useFormStatus();

  return (
    <Button className="w-full cursor-pointer">
        {
            pending ? (
                // <><Loader2Icon className="animate-spin mr-2 h-6 w-6"/></>
                <><Loader className="h-14 w-14 animate-spin text-white" /></>
            ) : ("Sign In")}
    </Button>
  )
}
