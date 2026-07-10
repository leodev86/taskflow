import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-slate-800 px-6 py-4 shadow-md">
      <NavLink
        to="/"
        className={({ isActive }) => `text-2xl font-bold ${isActive ? 'text-cyan-400 font-bold' : 'text-white  hover:text-cyan-400'}`}
      >
        TaskFlow 🚀
      </NavLink>

      <nav className="flex items-center gap-6">
        <NavLink
          to="/"
          className={({ isActive }) => `text-white hover:text-cyan-400 transition ${isActive ? 'text-cyan-400 font-bold' : ''}`}
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) => `text-white hover:text-cyan-400 transition ${isActive ? 'text-cyan-400 font-bold' : ''}`}
        >
          Configuración
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => `text-white hover:text-cyan-400 transition ${isActive ? 'text-cyan-400 font-bold' : ''}`}
        >
          Acerca
        </NavLink>
      </nav>
    </header>
  );
}