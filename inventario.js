import Producto from "./producto.js";

export default class Inventario {
  constructor() {
    this.primero = null;
    this.ultimo = null;
  }

  agregar(nuevo) {
    if (!this.primero) {
      this.primero = nuevo;
      this.ultimo = nuevo;
    } else {
      this.ultimo.sig = nuevo;
      nuevo.ant = this.ultimo;
      this.ultimo = nuevo;
    }
  }
}
let inv = new Inventario();
let p = new Producto();
