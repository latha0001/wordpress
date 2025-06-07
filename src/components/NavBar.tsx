import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <nav style={styles.nav}>
      <NavLink to="/" style={({ isActive }) => ({ ...styles.link, color: isActive ? '#0056b3' : '#007bff', borderBottom: isActive ? '2px solid #0056b3' : 'none', })}>
        Home
      </NavLink>
      <NavLink to="/blog" style={({ isActive }) => ({ ...styles.link, color: isActive ? '#0056b3' : '#007bff', borderBottom: isActive ? '2px solid #0056b3' : 'none', })}>
        Blog
      </NavLink>
    </nav>
  );
}
