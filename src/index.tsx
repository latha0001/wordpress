import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Causalfunnel } from "./screens/Causalfunnel";
import { Blog } from "./screens/Blog";
createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Causalfunnel />
    <Blog />
  </StrictMode>,
);
