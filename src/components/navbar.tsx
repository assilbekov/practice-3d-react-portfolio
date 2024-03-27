import { NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        <p className="blue-gradient-text">AA</p>
      </NavLink>
    </header>
  )
}