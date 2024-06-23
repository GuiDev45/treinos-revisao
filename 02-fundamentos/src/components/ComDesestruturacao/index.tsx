// Com desestruturação
type Props = {
  nome: string;
  idade: number;
  cidade?: string; // Supondo que seja opcional cidade
};

export default function ComDesestruturacao({ nome, idade, cidade }: Props) {
  // props = {}
  // propriedades -> chaves dos valores
  // nome = "Guilherme"

  return (
    <div>
      <h6>Componente Com Desestruturacao</h6>
      <p>Seu nome é: {nome}</p>
      <p>Sua idade é: {idade} anos</p>
      <p>Sua cidade é: {cidade} (Esse campo é opcional)</p>
    </div>
  );
}
