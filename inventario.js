class Inventario {
  constructor() {
    this.primero = null;
    this.ultimo = null;
  }

  agregar(nuevo) {
    if (!this.primero) {
      this.primero = nuevo;
      this.ultimo = nuevo;

      let temp = this.primero;
      while (temp) {
        if (nuevo.codigo > temp.codigo === false) {
          if (this.primero === temp) {
            nuevo.sig = this.primero;
            nuevo.ant = this.primero.ant;
            this.primero.ant = nuevo;
            this.primero = nuevo;
          } else {
            nuevo.sig = temp;
            nuevo.ant = temp.ant;
            temp.ant.sig = nuevo;
            temp.ant = nuevo;
          }
          return;
        }
        temp = temp.sig;
      }
      this.ultimo.sig = nuevo;
      nuevo.ant = this.ultimo;
      this.ultimo = nuevo;
    } else {
      this.primero = nuevo;
      this.ultimo = nuevo;
    }
  }

  eliminar(codigo) {
    if (this.primero) {
      if (this.primero.codigo === codigo) {
        if (this.primero.sig) {
          this.primero.sig.ant = this.primero.ant;
          this.primero = this.primero.sig;
        } else {
          this.primero = null;
          this.ultimo = null;
        }
      } else if (this.ultimo.codigo === codigo) {
        this.ultimo.ant.sig = this.ultimo.sig;
        this.ultimo = this.ultimo.ant;
      } else {
        let temp = this.primero.sig;

        while (temp) {
          if (temp.codigo === codigo) {
            temp.ant.sig = temp.sig;
            temp.sig.ant = temp.ant;
            return true;
          }
          temp = temp.sig;
        }
        return false;
      }
      return true;
    }
    return false;
  }

  listar() {
    let res = "";
    let temp = this.primero;
    while (temp) {
      res += temp.numero + "  ";
      temp = temp.sig;
    }
    return res;
  }

  listarInverso() {}
}
