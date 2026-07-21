import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  animate?: boolean;
}

export const SectionContainer = React.forwardRef<HTMLElement, SectionContainerProps>(
  ({ className, id, animate = true, children, ...props }, forwardedRef) => {
    const { ref: observerRef, hasIntersected } = useIntersectionObserver();
    const prefersReducedMotion = useReducedMotion();

    const setRefs = React.useCallback(
      (node: HTMLElement | null) => {
        // @ts-ignore - assigning ref is okay here
        observerRef.current = node;
        if (typeof forwardedRef === "function") {
          forwardedRef(node);
        } else if (forwardedRef) {
          forwardedRef.current = node;
        }
      },
      [forwardedRef, observerRef]
    );

    const shouldAnimate = animate && !prefersReducedMotion;

    return (
      <section
        id={id}
        ref={setRefs}
        className={cn(
          "w-full py-16 md:py-24 lg:py-32",
          className
        )}
        {...props}
      >
        <div 
          className={cn(
            "mx-auto w-full max-w-[1280px] px-5 md:px-8 lg:px-10",
            shouldAnimate && "transition-all duration-700 ease-out",
            shouldAnimate && !hasIntersected ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
          )}
        >
          {children}
        </div>
      </section>
    );
  }
);

SectionContainer.displayName = "SectionContainer";