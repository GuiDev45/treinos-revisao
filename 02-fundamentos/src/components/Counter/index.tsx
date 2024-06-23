import { useState } from "react";

export default function Counter() {
  // [armazenado, armazena]
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h6>Hook / useState</h6>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>Aumentar</button>
    </div>
  );
}
