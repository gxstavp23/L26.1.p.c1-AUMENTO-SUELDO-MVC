export default class Cl_mEmpresa {
    acMontoAdicional;
    cnPersonal;
    mayor;
    nombreMayor;
    constructor() {
        this.acMontoAdicional = 0;
        this.cnPersonal = 0;
        this.mayor = 0;
        this.nombreMayor = "";
    }
    procesarPersonal(p) {
        this.cnPersonal++;
        this.acMontoAdicional += p.aumento();
        if (p.sueldo > this.mayor) {
            this.mayor = p.sueldo;
            this.nombreMayor = p.nombre;
        }
    }
    totalMontoAdicional() { return this.acMontoAdicional; }
    cantidadPersonal() { return this.cnPersonal; }
    nombreDelMayor() { return this.nombreMayor; }
}
//# sourceMappingURL=Cl_mEmpresa.js.map