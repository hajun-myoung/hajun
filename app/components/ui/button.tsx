import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/app/lib/utils";

const buttonVariants = cva(
  "inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-white text-zinc-950 shadow-[0_0_35px_rgba(79,140,255,0.24)] hover:bg-blue-50",
        secondary:
          "border border-white/12 bg-white/6 text-white hover:border-blue-300/45 hover:bg-white/10",
        ghost:
          "text-zinc-300 hover:bg-white/8 hover:text-white",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

export interface ButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, ...props }: ButtonProps) {
  return <a className={cn(buttonVariants({ variant }), className)} {...props} />;
}
