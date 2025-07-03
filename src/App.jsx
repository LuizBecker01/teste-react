import { FaCat } from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <div className="bg-pink-300 w-full h-screen flex flex-col">
      <header className="text-center text-3xl font-bold text-purple-800 bg-white flex items-center justify-center gap-2 h-[70px]">
        <FaCat />
        <h4 className="text-2xl">DudaSys</h4>
        <FaCat />
      </header>

      <div className="flex flex-1 items-center justify-center">
        <form
          action="https://getform.io/f/bllzxdmb"
          method="POST"
          className="bg-white flex flex-col gap-2 w-[300px] p-8 rounded-lg shadow-lg"
        >
          <h2 className=" font-bold text-black text-center mb-4">
            Entrar na sua conta
          </h2>

          <input
            type="email"
            name="email"
            className="text-black border border-gray-300 p-2 rounded focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-300"
            placeholder="Digite seu email"
          />

          <input
            type="password"
            name="senha"
            className="text-black border border-gray-300 p-2 rounded focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-300"
            placeholder="Digite sua senha"
          />

          <input type="hidden" name="_gotcha" className="hidden" />

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded cursor-pointer"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
