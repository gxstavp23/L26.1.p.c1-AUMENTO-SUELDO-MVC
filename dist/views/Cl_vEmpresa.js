export default class Cl_vEmpresa {
    lblMontoTotal;
    lblDetalle;
    lblCantidadPersonal;
    btNuevoPersonal;
    lblMayor;
    constructor() {
        this.btNuevoPersonal = document.getElementById("main_btNuevoPersonal");
        this.lblMontoTotal = document.getElementById("main_lblMontoTotal");
        this.lblDetalle = document.getElementById("main_lblDetalle");
        this.lblCantidadPersonal = document.getElementById("main_lblCantidadPersonal");
        this.lblMayor = document.getElementById("main_lblMayor");
    }
    reportar({ aumentoIndividual, nombre, totalEmpresa, cantidad, nombreDelMayor, cedula }) {
        this.lblDetalle.innerHTML += `${nombre} CI:${cedula} tiene un aumento de $${aumentoIndividual}<br>`;
        this.lblMontoTotal.innerHTML = `${totalEmpresa}`;
        this.lblCantidadPersonal.innerHTML = `${cantidad}`;
        this.lblMayor.innerHTML = `${nombreDelMayor}`;
    }
}
//# sourceMappingURL=Cl_vEmpresa.js.map