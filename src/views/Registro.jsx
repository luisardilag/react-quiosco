import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Registro() {
  return (
    <>
      <h1 className="text-4xl font-black">Crea tu cuenta</h1>
      <p>Crea tu cuenta llenando el formulario</p>

      <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
        <form action="">
          <div className="mb-5">
            <label htmlFor="name" className="text-slate-800">
              Nombre:
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className="border border-gray-200 rounded-md w-full p-3"
              placeholder="Nombre"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="text-slate-800">
              Email:
            </label>
            <input
              id="name"
              type="email"
              name="email"
              className="border border-gray-200 rounded-md w-full p-3"
              placeholder="Email"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="password" className="text-slate-800">
              Password:
            </label>
            <input
              id="name"
              type="password"
              name="password"
              className="border border-gray-200 rounded-md w-full p-3"
              placeholder="Password"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="password_confirmation" className="text-slate-800">
              Repetir Password:
            </label>
            <input
              id="name"
              type="password"
              name="password"
              className="border border-gray-200 rounded-md w-full p-3"
              placeholder="Password"
            />
          </div>

          <input
            type="submit"
            value="Crear cuenta"
            className="bg-indigo-600 hover:bg-indigo-800 w-full uppercase mt-5 p-3 pointer text-white font-bold"
          />
        </form>
      </div>

      <nav className="mt-5">
        <Link to="/auth/login">
          ¿Ya tienes cuenta?
          <span className="text-indigo-600"> Inicia Sesión</span>
        </Link>
      </nav>
    </>
  );
}
