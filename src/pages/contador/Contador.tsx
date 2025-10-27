import { useState } from "react";

function Contador() {
  const [valor, setValor] = useState(0);

  function handleClick() {
    setValor(valor + 1);
  }
  return (
    <div>
      <h2>Componente Contador</h2>
      <p>O valor é: {valor}</p>
      <button onClick={handleClick}>Incrementar</button>
    </div>
  );
}

export default Contador;
