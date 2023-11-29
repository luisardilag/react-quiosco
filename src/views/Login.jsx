import { Link } from "react-router-dom";

export default function login() {
  return (
    <>
      <h1 className="text-4xl font-black">Iniciar Sesión</h1>
      <p>Para crear un pedido, inicia Sesión</p>

      <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
        <form action="">
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

          <input
            type="submit"
            value="Iniciar Sesión"
            className="bg-indigo-600 hover:bg-indigo-800 w-full uppercase mt-5 p-3 pointer text-white font-bold"
          />
        </form>
      </div>

      <nav className="mt-5">
        <Link to="/auth/registro">
          ¿No tienes cuenta? <span className="text-indigo-600">Regístrate</span>
        </Link>
      </nav>
    </>
  );
}
