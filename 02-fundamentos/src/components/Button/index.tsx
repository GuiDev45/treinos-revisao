export default function Button() {
  // Quando não precisa de argumento, pode ser uma função anonima
  const handleClick = () => {
    console.log("Clicou!");
  };

  return <button onClick={handleClick}>Clique em mim!</button>;
}
