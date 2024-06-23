export default function BotaoEstilizado() {
  // É possível, porém não gosto dessa forma.
  // usar o module.css é bem melhor.

  const estiloDoBotao = {
    backgroundColor: "#333",
    color: "#fff",
    padding: "15px 32px",
    cursor: "pointer",
  };

  return (
    <div>
      <h6>BotaoEstilizado</h6>
      <button style={estiloDoBotao}>Clique em mim</button>
    </div>
  );
}
