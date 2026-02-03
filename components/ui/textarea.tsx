import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-lg border border-[var(--border-grey)] bg-white px-4 py-3 text-base text-[var(--charcoal)] ring-offset-white placeholder:text-[var(--medium-grey)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--red-ox-red)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
