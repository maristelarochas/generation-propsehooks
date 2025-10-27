import { useEffect, useState } from "react";

function Tarefa() {
  const [completed, setCompleted] = useState(false);
  const [tarefa, setTarefa] = useState("");

  useEffect(() => {
    if (completed) {
      setTarefa("Parabéns pela tarefa concluída!");
    }
  }, [completed]);
  return (
    <div>
      <h2>Componente Tarefa</h2>
      <p>Tarefa: {tarefa}</p>
      <p>Conclua a tarefa</p>
      <button onClick={() => setCompleted(true)}>Concluir</button>
    </div>
  );
}
export default Tarefa;
