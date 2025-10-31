import { useContext, useEffect } from "react";
import { useActionData, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";

function Perfil() {
  cont navigate = useNavigate();

  const { usuario } = useContext(AuthContext);

  useEffect(() => {
		if (usuario.token === "") {
			alert("Você precisa estar logado")
			navigate("/")
		}
	}, [usuario.token])

  return (
    <div>
      <h1>Perfil</h1>
    </div>
  );
}
