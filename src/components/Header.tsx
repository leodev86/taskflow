import { NavLink } from "react-router-dom";

interface HeaderProps {
  toggleSidebar: () => void;
}

export default function Header({ toggleSidebar }: HeaderProps) {
  return (
    <header className="flex items-center justify-between bg-slate-800 px-6 py-4 shadow-md">

      <div className="flex items-center gap-4">

        <button
          onClick={toggleSidebar}
          className="text-white text-2xl hover:text-cyan-400 transition"
          aria-label="Abrir sidebar"
        >
          ☰
        </button>


        <NavLink
          to="/"
          className={({ isActive }) => `text-2xl font-bold ${isActive ? 'text-cyan-400 font-bold' : 'text-white  hover:text-cyan-400'}`}
        >
          TaskFlow 🚀
        </NavLink>

      </div>


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