class Inventario {
  constructor() {
    this.primero = null;
    this.ultimo = null;
    this.tamaño = 0;
  }

  agregarPrimero(nuevo) {
    this.primero.ant = nuevo;
    nuevo.sig = this.primero;
    this.primero = nuevo;
  }
  agregarUltimo(nuevo) {
    this.ultimo.sig = nuevo;
    nuevo.sig = this.ultimo;
    this.ultimo = nuevo;
  }
  agregar(nuevo) {
    if (this.buscar(+nuevo.codigo) == null && +nuevo.codigo > 0) {
      if (!this.primero) {
        this.primero = nuevo;
        this.ultimo = nuevo;
      } else {
        if (+nuevo.codigo < +this.primero.codigo) this.agregarPrimero(nuevo);
        else if (+nuevo.codigo > +this.ultimo.codigo) this.agregarUltimo(nuevo);
        else {
          let temp = this.primero;
          while (+temp.sig.codigo < +nuevo.codigo) temp = temp.sig;
          nuevo.sig = temp.sig;
          nuevo.ant = temp;
          temp.sig.ant = nuevo;
          temp.sig = nuevo;
        }
      }
      return true;
    } else return false;
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

  buscar(codigo) {
    let temp = this.primero;
    while (temp != null) {
      if (+temp.codigo == +codigo) {
        return temp;
      } else {
        temp = temp.sig;
      }
    }
    return null;
  }

  listar() {
    let res = "";
    let temp = this.primero;
    while (temp) {
      res += `${temp.info()} <br>`;
      temp = temp.sig;
    }
    return res;
  }

  listarInverso() {
    let temp = this.ultimo;
    let res = "";
    while (temp) {
      res += `${temp.info()}<br>`;
      temp = temp.ant;
    }
    return res;
  }

  eliminar(codigo) {
    if (this.buscar(codigo) == null) {
      return false;
    }
    let temp = this.primero;
    if (this.primero.codigo == codigo) {
      this.primero = temp.sig;
      if (this.primero.ant) {
        this.primero.ant = null;
      }
      return true;
    } else if (this.ultimo.codigo == codigo) {
      this.ultimo.ant.sig = null;
      this.ultimo = this.ultimo.ant;
      return true;
    } else {
      while (temp.sig.codigo != codigo) {
        temp = temp.sig;
      }
      temp.sig = temp.sig.sig;
      temp.sig.ant = temp;
      return true;
    }
  }
}
