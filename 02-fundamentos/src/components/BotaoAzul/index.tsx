import styles from "./styles.module.css";

export default function BotaoAzul() {
  // Essa é a melhor forma.
  return (
    <div>
      <h6>BotaoAzul</h6>
      <button className={styles.botaoAzul}>Botão Azul</button>
    </div>
  );
}
