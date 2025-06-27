"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function useSignOut() {
    const router = useRouter();
    const handleSignout = async function signOut() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/"); // redirect to login page
          toast.success("You have been logged out successfully.");
        },
        onError: () => {
            toast.error("Failed to Sign Out")
        }
      },
    });
  }
  return handleSignout;
}