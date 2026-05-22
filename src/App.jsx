import { useState } from "react";
import "./App.css";

import RegistroMaterial from "./components/RegistroMaterial";
import ListaInventario from "./components/ListaInventario";

function App() {

  const [materiales, setMateriales] = useState([]);

  const agregarMaterial = (material) => {
    setMateriales([...materiales, material]);
  };

  return (
    <div>

      {/* ENCABEZADO */}
      <header className="header">

        <h1>
          Sistema de Control de Material de Laboratorio Clínico
        </h1>

      </header>

      {/* MENÚ */}
      <div className="menu-contenedor">

        <div className="card-menu">
          <h2>Actividades Realizadas</h2>

          <p>
            Scrum, backlog, Sprint, React y GitHub.
          </p>
        </div>

        <div className="card-menu">
          <h2>Sistema Implementado</h2>

          <p>
            Registro de materiales e inventario.
          </p>
        </div>

        <div className="card-menu">
          <h2>Código Fuente</h2>

          <a
            href="https://github.com/franciscouribe4585-lang/Sistema-Control-Laboratorio-React"
            target="_blank"
          >
            Ver GitHub
          </a>
        </div>

        <div className="card-menu">
          <h2>Modificaciones</h2>

          <p>
            Alertas, validaciones y mejoras visuales.
          </p>
        </div>

      </div>

      {/* SISTEMA */}
      <div className="sistema">

        <RegistroMaterial agregarMaterial={agregarMaterial} />

        <ListaInventario materiales={materiales} />

      </div>

    </div>
  );
}

export default App;