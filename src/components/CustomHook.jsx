import { useFetch } from '../hooks/useFetch';
import { useCounter } from '../hooks/useCounter';
import { Loading } from './Loading';
import { Card } from './Card';

export const CustomHook = () => {

  const { counter, increment, decrement } = useCounter(1);

  const { data, isLoading, hasError } =
    useFetch(`https://rickandmortyapi.com/api/character/${counter}`);

  return (
    <>
      <h1>Rick and Morty Characters</h1>
      <hr/>

      {
        isLoading
          ? <Loading/>
          : (
            <Card
              id={data.id}
              name={data.name}
              image={data.image}
              status={data.status}
              species={data.species}
            />
          )
      }

      <button onClick={()=>decrement()}>Anterior</button>
      <button onClick={()=>increment()}>Siguiente</button>
    </>
  )
}