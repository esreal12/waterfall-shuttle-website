import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-turquoise focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-natural text-white hover:bg-brand-deep active:bg-brand-deep",
        secondary:
          "bg-white text-brand-deep border border-brand-natural/40 hover:border-brand-natural hover:text-brand-deep",
        ghost: "text-brand-deep hover:bg-brand-aqua/20"
      },
      size: {
        default: "px-6 py-3",
        large: "px-8 py-3 text-lg",
        small: "px-4 py-2 text-sm"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
