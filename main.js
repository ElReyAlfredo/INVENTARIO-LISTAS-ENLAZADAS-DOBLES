import Producto from "./producto.js";
import Inventario from "./inventario.js";

const inventario = new Inventario();

const btnBuscar = document.getElementById("btnBuscar");
btnBuscar.addEventListener("click", () => {
  console.log("Buscar");
  const codigo = document.getElementById("txtCodigo").value;
  console.log(codigo);
  const producto = inventario.buscar(codigo);
  return `${producto.infoHTML()}`;
});

const btnAgregar = document.getElementById("btnAgregar");
btnAgregar.addEventListener("click", () => {
  const codigo = document.getElementById("txtCodigo").value;
  const nombre = document.getElementById("txtNombre").value;
  const cantidad = document.getElementById("txtCantidad").value;
  const costo = document.getElementById("txtCosto").value;
  const producto = new Producto(nombre, codigo, cantidad, costo);
  if (inventario.agregar(producto))
    document.getElementById(
      "listado"
    ).innerHTML = `<h3>SE HA AGREGADO UN PRODUCTO</h3>`;
});

const btnListar = document.getElementById("btnListar");
btnListar.addEventListener("click", () => {
  return (document.getElementById(
    "listado"
  ).innerHTML = `${inventario.listado()}`);
});

const btnListarInverso = document.getElementById("btnListarInverso");
btnListarInverso.addEventListener("click", () => {
  return (document.getElementById(
    "listado"
  ).innerHTML = `${inventario.listadoInverso()}`);
});

const eliminar = document.getElementById("btnEliminar");
eliminar.addEventListener("click", () => {
  let codigo = document.getElementById("txtCodigo").value;

  if (inventario.eliminar(codigo)) {
    document.getElementById(
      "listado"
    ).innerHTML = `<h3>SE HA ELIMINADO UN PRODUCTO</h3>`;
  }
});
