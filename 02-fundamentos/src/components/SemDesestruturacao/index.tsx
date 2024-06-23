// Sem usar desestruturação
type Props = {
  nome: string;
  idade: number;
  cidade: string;
};

export default function SemDesestruturacao(props: Props) {
  // props = {}
  // propriedades -> chaves dos valores
  // props.nome = "Guilherme"

  return (
    <div>
      <h6>Componente Sem Desestruturacao</h6>
      <p>Seu nome é: {props.nome}</p>
      <p>Sua idade é: {props.idade} anos</p>
      <p>Sua cidade é: {props.cidade}</p>
    </div>
  );
}
