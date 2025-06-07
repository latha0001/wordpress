import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useIsMobile } from "./hooks/useIsMobile";
import { NavBar } from "./components/Navbar";
import { Causalfunnel } from "./screens/Causalfunnel";
import { CausalfunnelMobile } from "./screens/CausalfunnelMobile/CausalfunnelMobile";
import { Blog } from "./screens/Blog";
import { BlogMobile } from "./screens/BlogMobile";

export function App() {
  const isMobile = useIsMobile();

  return (
    <Router>
     <NavBar />
      <Routes>
        <Route path="/" element={isMobile ? <CausalfunnelMobile /> : <Causalfunnel />} />
        <Route  path="/blog" element={isMobile ? <BlogMobile /> : <Blog />}/>
      </Routes>
    </Router>
  );
}
