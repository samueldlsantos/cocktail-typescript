import { useLocation, NavLink } from "react-router-dom";
import Logo from "/logo.svg";
import Form from "./Form";
import { useMemo } from "react";

const Header = () => {
  const { pathname } = useLocation();

  const isHome = useMemo(() => pathname == "/", [pathname]);

  console.log(location.pathname);
  return (
    <header
      className={
        isHome
          ? "bg-header bg-center bg-cover bg-no-repeat h-screen"
          : "bg-slate-800"
      }
    >
      <div className="container mx-auto">
        <div className="py-16 flex justify-between items-center text-white uppercase font-bold">
          <img className="max-w-32" src={Logo} alt="" />
          <nav className="flex gap-10">
            <NavLink
              className={({ isActive }) => (isActive ? "text-orange-500" : "")}
              to="/"
            >
              Inicio
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "text-orange-500" : "")}
              to="/favorites"
            >
              Favoritos
            </NavLink>
          </nav>
        </div>
        {isHome && <Form />}
      </div>
    </header>
  );
};

export default Header;
