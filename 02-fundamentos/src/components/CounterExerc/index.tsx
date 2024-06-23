import { useState } from "react";

export default function CounterExerc() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h6>Exercício 2: Manipulação de Eventos e Estado</h6>
      <p>Você clicou {count} vezes no botão</p>
      <button onClick={handleClick}>Clique aqui</button>
    </div>
  );
}
