import Cl_mPersonal from "./Cl_mPersonal.js";

export default class Cl_mEmpresa {
  private acMontoAdicional: number;
  private cnPersonal: number; 
  private mayor: number;
  private nombreMayor: string;

  constructor() {
    this.acMontoAdicional = 0;
    this.cnPersonal = 0;
    this.mayor = 0;
    this.nombreMayor = "";
  }

  procesarPersonal(p: Cl_mPersonal): void {
    this.cnPersonal++;
    this.acMontoAdicional += p.aumento();

    if (p.sueldo > this.mayor){
      this.mayor = p.sueldo
      this.nombreMayor = p.nombre

    }

  }

  totalMontoAdicional(): number { return this.acMontoAdicional; }
  cantidadPersonal(): number { return this.cnPersonal; } 
  nombreDelMayor():string { return this.nombreMayor}
}