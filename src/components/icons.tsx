import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export function IGenLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-6 w-6", props.className)}
      {...props}
    >
        <path d="M10.4 3.9a1 1 0 0 1 1.2 0l8 8a1 1 0 0 1 0 1.2l-8 8a1 1 0 0 1-1.2 0l-8-8a1 1 0 0 1 0-1.2l8-8z" />
        <path d="M12 12 6 6" />
        <path d="M18 18 12 12" />
        <path d="m11 16.5-3.5-3.5 3.5-3.5" />
        <path d="m18 16.5-3.5-3.5 3.5-3.5" />
    </svg>
  );
}
