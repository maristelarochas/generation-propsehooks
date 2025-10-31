import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {
  const navigate = useNavigate();

  const { handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert("O usuário foi desconectado com sucesso!");
    navigate("/");
  }

  return (
    <>
      <div className="w-full bg-indigo-900 text-white font-semibold py-4">
        <div className="w-full max-w-screen-xl mx-auto flex justify-between items-center px-6">
          <Link to="/home" className="hover:underline text-lg">
            Blog Pessoal
          </Link>

          <nav className="flex gap-6 items-center text-sm">
            Postagens Temas Cadastrar Tema Perfil
            <Link to="" onClick={logout} className="hover:underline">
              Sair
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
export default Navbar;
