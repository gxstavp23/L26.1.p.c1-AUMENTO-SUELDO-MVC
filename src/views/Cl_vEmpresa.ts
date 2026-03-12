export default class Cl_vEmpresa {
  lblMontoTotal: HTMLElement;
  lblDetalle: HTMLElement;
  lblCantidadPersonal: HTMLElement;
  btNuevoPersonal: HTMLButtonElement;
  lblMayor: HTMLElement;

  constructor() {
    this.btNuevoPersonal = document.getElementById("main_btNuevoPersonal") as HTMLButtonElement;
    this.lblMontoTotal = document.getElementById("main_lblMontoTotal") as HTMLElement;
    this.lblDetalle = document.getElementById("main_lblDetalle") as HTMLElement;
    this.lblCantidadPersonal = document.getElementById("main_lblCantidadPersonal") as HTMLElement; 
    this.lblMayor = document.getElementById("main_lblMayor") as HTMLElement;
  }

  reportar({ aumentoIndividual, nombre, totalEmpresa, cantidad, nombreDelMayor, cedula }: { aumentoIndividual: number; nombre: string; totalEmpresa: number; cantidad: number , nombreDelMayor: string, cedula:number}): void {
    this.lblDetalle.innerHTML += `${nombre} CI:${cedula} tiene un aumento de $${aumentoIndividual}<br>`;
    this.lblMontoTotal.innerHTML = `${totalEmpresa}`;
    this.lblCantidadPersonal.innerHTML = `${cantidad}`; 
    this.lblMayor.innerHTML = `${nombreDelMayor}`
  }
}