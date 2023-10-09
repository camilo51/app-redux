const estadoInicial = {
  productos: [
    { id: 1, nombre: "Producto 1" },
    { id: 2, nombre: "Producto 2" },
    { id: 3, nombre: "Producto 3" },
    { id: 4, nombre: "Producto 4" },
  ],
  carrito: [],
};

export const reducer = (estado = estadoInicial, accion) => {
  switch (accion.type) {
    case "AGREGAR_PRODUCTO_AL_CARRITO":
      const { nombre, id } = accion;

      if (estado.carrito.length === 0) {
        return {
          ...estado,
          carrito: [{ id, nombre, cantidad: 1 }],
        };
        // setCarrito([{id, nombre, cantidad: 1}])
      } else {
        const nuevoCarrito = [...estado.carrito];

        const estaEnCarrito =
          nuevoCarrito.filter((productoCarrito) => {
            return productoCarrito.id === id;
          }).length > 0;

        if (estaEnCarrito) {
          nuevoCarrito.forEach((entry, i) => {
            if (entry.id === id) {
              const cantidad = nuevoCarrito[i].cantidad;
              nuevoCarrito[i] = { id, nombre, cantidad: cantidad + 1 };
            }
          });
        } else {
          nuevoCarrito.push({ id, nombre, cantidad: 1 });
        }

        return {
            ...estado,
            carrito: nuevoCarrito
        };

      }
      return estado;

    default:
      return estado;
  }
};
