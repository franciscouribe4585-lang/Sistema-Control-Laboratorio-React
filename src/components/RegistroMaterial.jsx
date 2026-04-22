import { useState } from "react";

function RegistroMaterial({ agregarMaterial }) {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");

  const manejarEnvio = (e) => {
  e.preventDefault();

  if (!nombre || !cantidad) {
    alert("Todos los campos son obligatorios");
    return;
  }

  agregarMaterial({
    nombre,
    cantidad
  });

  setNombre("");
  setCantidad("");
};

  return (
    <div>
      <h2>Registrar Material</h2>

      <form onSubmit={manejarEnvio}>
        <input
          placeholder="Nombre del material"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <input
          placeholder="Cantidad"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
        />

        <button type="submit">Agregar</button>
      </form>
    </div>
  );
}

export default RegistroMaterial;