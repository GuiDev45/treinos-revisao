type Props = {
  onChildClick: () => void;
};

// Recebe uma função que vai ser acionada pelo seu onClick...
export default function FilhoFunction({ onChildClick }: Props) {
  return <button onClick={onChildClick}>Botão filho</button>;
}
