"use client";

import { CircleCheck, Info, LoaderCircle, OctagonX, TriangleAlert } from "lucide-react";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      icons={{
        success: <CircleCheck className="h-4 w-4" />,
        info: <Info className="h-4 w-4" />,
        warning: <TriangleAlert className="h-4 w-4" />,
        error: <OctagonX className="h-4 w-4" />,
        loading: <LoaderCircle className="h-4 w-4 animate-spin" />,
      }}
      toastOptions={{
        classNames: {
          toast:
            "group toast bg-[var(--off-white)] text-[var(--charcoal)] border border-[var(--border-grey)] shadow-lg rounded-lg",
          description: "text-[var(--medium-grey)]",
          actionButton: "bg-[var(--red-ox-red)] text-white",
          cancelButton: "bg-[var(--light-grey)] text-[var(--charcoal)]",
          success: "text-green-600",
          error: "text-[var(--red-ox-red)]",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
