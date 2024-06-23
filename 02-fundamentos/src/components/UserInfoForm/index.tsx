import { useState } from "react";

export default function UserInfoForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // É aqui que o submit do formulario é enviado
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // acessar a API via fetch ou axios

    console.log(name, email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} // Como é uma função de uma linha tudo bem passar direto
        placeholder="Digite o seu nome"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} // Como é uma função de uma linha tudo bem passar direto
        placeholder="Digite o seu email"
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
