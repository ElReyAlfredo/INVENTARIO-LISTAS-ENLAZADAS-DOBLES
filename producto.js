class Producto {
  constructor(nombre, codigo, cantidad, costo) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.cantidad = cantidad;
    this.costo = costo;
    this.sig = null;
    this.ant = null;
  }

  info() {
    return (document.getElementById(
      "listado"
    ).innerHTML = `<h3>CÓDIGO: ${this.codigo}.</h3>
        <h4>Nombre: ${this.nombre}.<br>
        Cantidad: ${this.cantidad}.<br>
        Costo: $${this.costo}.</h4>`);
  }

  getName() {
    return this.nombre;
  }

  getCodigo() {
    return this.codigo;
  }

  getCantidad() {
    return this.cantidad;
  }

  getCosto() {
    return this.costo;
  }
}
