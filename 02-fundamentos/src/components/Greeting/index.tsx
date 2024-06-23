type Props = {
  nome: string;
};

export default function Greeting({ nome }: Props) {
  return (
    <div>
      <h6>Exercicio 1: Componente Funcional Básico</h6>
      <p>Olá, {nome}!</p>
    </div>
  );
}
