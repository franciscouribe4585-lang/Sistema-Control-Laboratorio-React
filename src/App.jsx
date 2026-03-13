import { useState } from "react";
import RegistroMaterial from "./components/RegistroMaterial";
import ListaInventario from "./components/ListaInventario";

function App() {

  const [materiales, setMateriales] = useState([]);

  const agregarMaterial = (material) => {
    setMateriales([...materiales, material]);
  };

  return (
    <div>
      <h1>Sistema de Inventario de Laboratorio</h1>

      <RegistroMaterial agregarMaterial={agregarMaterial} />

      <ListaInventario materiales={materiales} />

    </div>
  );
}

export default App;