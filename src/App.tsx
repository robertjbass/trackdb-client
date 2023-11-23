import { useContext } from 'react';
import { GlobalContext } from '@/context/GlobalContext';

function App() {
  const { user, setUser } = useContext(GlobalContext);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button onClick={() => setUser({ name: 'Bob' })}>Set</button>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  );
}

export default App;
