type Props = {
  loggedIn: boolean;
};

export default function LoginButton({ loggedIn }: Props) {
  // Entrar -> deslogado
  // sair -> logado

  return (
    <div>
      <h6>LoginButton</h6>
      {loggedIn ? <button>Sair</button> : <button>Entrar</button>}
    </div>
  );
}
