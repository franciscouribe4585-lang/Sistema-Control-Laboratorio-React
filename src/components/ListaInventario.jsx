function ListaInventario({ materiales }) {
  return (
    <div>
      <h2>Inventario</h2>

      <ul>
        {materiales.map((material, index) => (
          <li key={index}>
            {material.nombre} - {material.cantidad}

            {material.cantidad <= 5 && (
              <span style={{ color: "red", marginLeft: "10px" }}>
                ⚠ Bajo stock
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaInventario;