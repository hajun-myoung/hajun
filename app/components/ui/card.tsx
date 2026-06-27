import * as React from "react";
import { cn } from "@/app/lib/utils";

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[8px] border border-white/10 bg-zinc-950/72 shadow-[0_24px_80px_rgba(0,0,0,0.28)]",
        className,
      )}
      {...props}
    />
  );
}
