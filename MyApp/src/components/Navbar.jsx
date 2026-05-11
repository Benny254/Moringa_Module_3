import "./Navbar.css";

export default function Navbar({ activePage, setActivePage }) {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "shop", label: "Shop" },
    { id: "admin", label: "Admin Portal" },
  ];

  return (
    <nav className="navbar">
      {navItems.map((item) => (
        <button
          key={item.id}
          className={`nav-item ${activePage === item.id ? "active" : ""}`}
          onClick={() => setActivePage(item.id)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}