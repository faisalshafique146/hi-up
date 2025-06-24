import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import Logo from "@/public/Logo.png";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center">
      <Link
        href="/"
        className={buttonVariants({
          variant: "outline",
          className: "absolute top-4 left-4",
        })}
      >
        <ArrowLeft className="size-4" />
        Back
      </Link>
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          className="flex items-center gap-2 self-center font-medium"
          href="/"
        >
          <Image src={Logo} alt="Logo" width={100} height={100} />
        </Link>
        {children}
        <div className="text-balance text-center text-xs text-muted-foreground">
          By Clicking "Continue" you agree to our{" "}
          <Link href="/terms" className="hover:text-primary underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="hover:text-primary underline">
            Privacy Policy
          </Link>
          .
        </div>
      </div>
    </div>
  );
}
