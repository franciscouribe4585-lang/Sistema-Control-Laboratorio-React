import { useState } from "react";
import RegistroMaterial from "./components/RegistroMaterial";
import ListaInventario from "./components/ListaInventario";
import ActualizarCantidad from "./components/ActualizarCantidad";

function App() {

  const [materiales, setMateriales] = useState([]);

  const agregarMaterial = (material) => {
    setMateriales([...materiales, material]);
  };

  const actualizarCantidad = (index, cambio) => {
  const nuevosMateriales = [...materiales];

  let nuevaCantidad =
    parseInt(nuevosMateriales[index].cantidad) + cambio;

  if (nuevaCantidad < 0) nuevaCantidad = 0;

  nuevosMateriales[index].cantidad = nuevaCantidad;

  setMateriales(nuevosMateriales);
};

  return (
    <div>

      <h1>Sistema de Inventario de Laboratorio</h1>

      <RegistroMaterial agregarMaterial={agregarMaterial} />

      <ListaInventario materiales={materiales} />

      <ActualizarCantidad
        materiales={materiales}
        actualizarCantidad={actualizarCantidad}
      />

    </div>
  );
}

export default App;