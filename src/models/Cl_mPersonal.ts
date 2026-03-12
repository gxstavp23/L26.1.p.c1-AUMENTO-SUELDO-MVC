export default class Cl_mPersonal {
  private _nombre: string = "";
  private _tipo: string = "";
  private _sueldo: number=0
  private _cedula: number=0
  constructor({ nombre, tipo, sueldo, cedula}: { nombre: string; tipo: string; sueldo: number , cedula:number}) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.sueldo = sueldo;
    this.cedula = cedula;

  }

  set nombre(n: string) { this._nombre = n; }
  get nombre(): string { return this._nombre; }

  set tipo(t: string) { this._tipo = t.toUpperCase(); }
  get tipo(): string { return this._tipo; }

  set sueldo(s: number) { this._sueldo = +s; }
  get sueldo(): number { return this._sueldo; }

  set cedula(c:number) {this._cedula = +c}
  get cedula():number {return this._cedula;}

  aumento(): number {
    if (this.tipo === "O") {
      return this.sueldo * 0.20;
    } else if (this.tipo === "A") {
      return this.sueldo * 0.10;
    } else {
      return 0;
    }
  }
}