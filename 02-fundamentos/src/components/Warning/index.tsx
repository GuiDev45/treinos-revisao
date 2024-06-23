type Props = {
  Warning: string | null;
};

export default function Warning({ Warning }: Props) {
  // Se for diferente de nulo não renderiza nada, ou seja se tiver um texto mostra Aviso!
  if (!Warning) {
    return null;
  }

  return (
    <div>
      <h6>Warning</h6>Aviso!
    </div>
  );
}
