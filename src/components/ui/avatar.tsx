// src/components/ui/avatar.tsx
import * as React from "react";

export function Avatar({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`avatar ${className}`}>{children}</div>;
}

export function AvatarImage({ src, alt }: React.ImgHTMLAttributes<HTMLImageElement>) {
  return <img className="avatar-img" src={src} alt={alt} />;
}

export function AvatarFallback({ children }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className="avatar-fallback">{children}</div>;
}
