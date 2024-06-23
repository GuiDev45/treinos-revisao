type Props = {
  user: string;
};

export default function RenderCondicional({ user }: Props) {
  // se houver usuário, exiba uma mensagem de boas vindas

  return (
    <div>
      <h6>RenderCondicional</h6>
      {user && <h6>Bem-vindo de volta, {user} !</h6>}
    </div>
  );
}
