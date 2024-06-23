import "./geral.css";
import Welcome from "./components/Welcome";
import BomDia from "./components/BomDia";
import Pai from "./components/Pai";
import SemDesestruturacao from "./components/SemDesestruturacao";
import ComDesestruturacao from "./components/ComDesestruturacao";
import Counter from "./components/Counter";
import UserInfoForm from "./components/UserInfoForm";
import Button from "./components/Button";
import PaiFunction from "./components/PaiFunction";
import Form from "./components/Form";
import RenderCondicional from "./components/RenderCondicional";
import LoginButton from "./components/LoginButton";
import Warning from "./components/Warning";
import NumberList from "./components/NumberList";
import BotaoEstilizado from "./components/BotaoEstilizado";
import BotaoAzul from "./components/BotaoAzul";
import Greeting from "./components/Greeting";
import CounterExerc from "./components/CounterExerc";
import TaskList from "./components/TaskList";

export default function App() {
  return (
    <div>
      <Welcome />
      <BomDia />
      {/* Componente dentro de componente */}
      <br />
      <Pai />
      <br />
      {/* Props / propriedades do componente sem desestruturação */}
      <SemDesestruturacao nome="Guilherme" idade={31} cidade="Piracicaba" />
      <br />
      {/* Props / propriedades do componente com desestruturação e propriedade não obrigatoria */}
      <ComDesestruturacao nome="Guilherme" idade={31} />
      <br />
      {/* Hook / useState */}
      <Counter />
      <br />
      {/* Múltiplos estados e eventos */}
      <UserInfoForm />
      <br />
      {/* Eventos */}
      <Button />
      <br />
      <br />
      {/* Passando funções de manipulação de eventos como props */}
      <PaiFunction />
      <br />
      {/* Eventos de Form */}
      <Form />
      <br />
      {/* Renderização condicional */}
      <RenderCondicional user="Guilherme" />
      <br />
      {/* Expressão ternária */}
      <LoginButton loggedIn={false} />
      <LoginButton loggedIn={true} />
      <br />
      {/* Render nulo */}
      <Warning Warning={"Temos um Warning!"} />
      <br />
      {/* Listas chaves */}
      <NumberList numbers={[0, 1, 2, 3, 4, 5]} />
      <br />
      {/* Estilos por atributo */}
      <BotaoEstilizado />
      <br />
      {/* Estilos por module */}
      <BotaoAzul />
      <br />
      {/* Exercicio 1: Componente Funcional Básico */}
      <Greeting nome="João" />
      <br />
      {/* Exercício 2: Manipulação de Eventos e Estado */}
      <CounterExerc />
      <br />
      {/* Exercício 3: Renderização Condicional e listas */}
      <TaskList
        tasks={[
          "Estudar JavaScript",
          "Almoçar",
          "Estudar React",
          "Fazer compras",
          "Lavar o carro",
        ]}
      />
      <br />
    </div>
  );
}
