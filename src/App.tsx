// src/App.tsx
import { useState, useEffect } from "react";
import { Causalfunnel } from "./screens/Causalfunnel";
import { CausalfunnelMobile } from "./screens/CausalfunnelMobile";
import { Blog } from "./screens/Blog";
import { BlogMobile } from "./screens/BlogMobile";

export function App() {
  const [activePage, setActivePage] = useState<"causalfunnel" | "blog">("causalfunnel");
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <nav style={{ padding: "1rem", display: "flex", gap: "1rem" }}>
        <button onClick={() => setActivePage("causalfunnel")}>CausalFunnel</button>
        <button onClick={() => setActivePage("blog")}>Blog</button>
      </nav>

      {activePage === "causalfunnel" ? (
        isMobile ? <CausalfunnelMobile /> : <Causalfunnel />
      ) : (
        isMobile ? <BlogMobile /> : <Blog />
      )}
    </div>
  );
}
