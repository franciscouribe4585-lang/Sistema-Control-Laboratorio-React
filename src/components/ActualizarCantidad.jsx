function ActualizarCantidad({ materiales, actualizarCantidad }) {
  return (
    <div>
      <h2>Actualizar Cantidad</h2>

      {materiales.map((material, index) => (
        <div key={index}>
          <span>{material.nombre} - {material.cantidad}</span>

          <button onClick={() => actualizarCantidad(index, 1)}>
            +1
          </button>

          <button onClick={() => actualizarCantidad(index, -1)}>
            -1
          </button>
        </div>
      ))}
    </div>
  );
}

export default ActualizarCantidad;