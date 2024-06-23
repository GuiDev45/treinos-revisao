import FilhoFunction from "../FilhoFunction";

export default function PaiFunction() {
  const handleChildClick = () => {
    console.log("Clicou no botão do elemento filho!");
  };

  // Como filho tem a propriedade de receber uma função, recebeu o handleChildClick e lá no filho existe um onClick que aciona ela.
  return (
    <div>
      <h6>Componente Pai</h6>
      <FilhoFunction onChildClick={handleChildClick} />
    </div>
  );
}
