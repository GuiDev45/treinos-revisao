type Props = {
  numbers: number[];
};

export default function NumberList({ numbers }: Props) {
  // metodos de array - filter, map, reduce, ...

  // chaves = key
  // Um identificador único para cada elemento onde se repete, ou seja no <li>
  // O correto mesmo é não usar o index como chave, e sim um id, index tendem a ter conflitos
  return (
    <div>
      <h6>NumberList</h6>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
}
