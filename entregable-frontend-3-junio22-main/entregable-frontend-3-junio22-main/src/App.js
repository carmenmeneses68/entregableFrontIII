// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.
import React, {useState} from 'react';
import Cabecera from './components/Cabecera';
import Listado from './components/Listado';

function App() {

  const[contar, setContar]=useState(0);

  const incremento= ()  => {
    setContar(contar+1);
  }
  return (
    <div className="App">
      <Cabecera contar={contar}/>
      <Listado incremento={incremento}/>
    </div>
  );
}

export default App;
