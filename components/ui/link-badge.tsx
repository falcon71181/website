import * as React from "react"
import Link from "next/link"
import { cn } from "@/utils/cn"

interface LinkBadgeProps extends React.ComponentPropsWithoutRef<typeof Link> {
  children: React.ReactNode
}

export function LinkBadge({ children, className, ...props }: LinkBadgeProps) {
  return (
    <Link
      {...props}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "rounded-lg border-[0.1px] border-black backdrop-grayscale px-1.5 py-0.3 text-sm no-underline hover:bg-muted/20 dark:hover:bg-muted/90",
        className
      )}
    >
      {children}
    </Link>
  )
}
