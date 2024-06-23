import { useState } from "react";

export default function Form() {
  const [value, setValue] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Manipulação de dados
    // Validação
    // Envio ao servidor pela API
    // loading
    // Chamada da função de mensagens de erro

    event.preventDefault();
    console.log("Formulário enviado: ", value);
    setValue(""); // Apenas para limpar o campo de input depois de enviar o console.log
  };

  return (
    <form onSubmit={handleSubmit}>
      <h6>Formulário</h6>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Preencha o campo"
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
