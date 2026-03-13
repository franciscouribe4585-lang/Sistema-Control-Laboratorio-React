function ListaInventario({ materiales }) {
  return (
    <div>
      <h2>Inventario</h2>

      <ul>
        {materiales.map((material, index) => (
          <li key={index}>
            {material.nombre} - {material.cantidad}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaInventario;