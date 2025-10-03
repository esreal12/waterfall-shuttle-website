"use client";

import { Button } from "./button";

interface PeekButtonProps {
  variant?: "book" | "gift";
  size?: "small" | "large";
  className?: string;
  children?: React.ReactNode;
}

const PEEK_URLS = {
  book: "https://book.peek.com/s/3b8d4aa7-9701-4638-afbf-5e1ac23c9dbd/JRkNg",
  gift: "https://book.peek.com/s/3b8d4aa7-9701-4638-afbf-5e1ac23c9dbd/RdEak"
};

export function PeekButton({ 
  variant = "book", 
  size = "large", 
  className = "",
  children 
}: PeekButtonProps) {
  const handleClick = () => {
    window.open(PEEK_URLS[variant], "_blank", "noopener,noreferrer");
  };

  const defaultChildren = variant === "book" ? "Book Now" : "Gift Cards";

  return (
    <Button
      onClick={handleClick}
      size={size}
      className={`${className}`}
    >
      {children || defaultChildren}
    </Button>
  );
}
