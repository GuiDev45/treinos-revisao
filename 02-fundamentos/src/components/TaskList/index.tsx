type Props = {
  tasks: string[];
};

export default function TaskList({ tasks }: Props) {
  return (
    <div>
      <h6>Exercício 3: Renderização Condicional e listas</h6>
      {tasks.length > 0 ? (
        <ol>
          {tasks.map((task, id) => (
            <li key={id}>{task}</li>
          ))}
        </ol>
      ) : (
        <p>Não há tarefas a mostrar</p>
      )}
    </div>
  );
}
