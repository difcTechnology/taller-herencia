class Empleado{
    constructor(nombre, cargo, salario){
        this.nombre = nombre;
        this.cargo = cargo;
        this.salario = salario;
        this.activo = true;
    }

    presentarse(){
        return `Hola me llamo ${this.nombre} mi cargo es : ${this.cargo}`;
    }

    calcularSalarioAnual(){
        return this.salario * 12;
    }

    desactivar(){
        this.activo = false;
        return 'El empleado quedó desactivado';
    }

    info(){
        return `nombre: ${this.nombre} cargo: ${this.cargo} salario mensual: ${this.salario} activo: ${this.activo}`;
    }

}

class Lider extends Empleado{
    constructor(nombre, salario, equipo){
        super(nombre,'Lider de equipo',salario);
        this.equipo = equipo;
    }

    presentarEquipo(){
        return `Mi equipo esta conformado por : ${this.equipo.join()}`;
    }

    agregarMiembro(nombre){
        this.equipo.push(nombre);
        return 'Integrante agregado';
    }

    info(){
        return `${super.info()} cantidad de integrantes : ${this.equipo.length}`;
    }
}

//1. Creen cuatro empleados regulares y dos lideres.

let empleado1 = new Empleado('Diego','Desarrollador backend',2000000);
let empleado2 = new Empleado('Laura','Contadora',2500000);
let empleado3 = new Empleado('Camilo','Análista de pruebas',2000000);
let empleado4 = new Empleado('Gabriel','Lider tecnico',5000000);

let lider1 = new Lider('Carlos',6000000,['Ana','Raul','José']);
let lider2 = new Lider('Karen',7000000,['Susana','Victoria']);

// 2. Calculen el costo total mensual de nomina sumando el salario de todos.

let empleados = [empleado1,empleado2,empleado3,empleado4,lider1,lider2];

let totalMensual = 0;

for(empleado of empleados){
    totalMensual += empleado.salario;
}

console.log(totalMensual);

//3. Impriman el costo anual total

let costoAnualTotal = 0;

for(empleado of empleados){
    costoAnualTotal += empleado.calcularSalarioAnual();
}

console.log(costoAnualTotal);


//4. Desactiven un empleado e impriman su info() para verificar

console.log(empleados[0]);

empleados[0].desactivar();

console.log(empleados[0]);

//5. Impriman info() y presentarEquipo() de cada lider.

console.log(lider1.info());

console.log(lider2.info());