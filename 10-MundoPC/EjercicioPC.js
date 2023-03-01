class DispositivoEntrada{

    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada {

    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada,marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton(){
        return this._idRaton;
    }
    toString(){
        return `
        Raton: [ ID: ${this._idRaton}, Tipo de Entrada: ${this._tipoEntrada}, Marca: ${this._marca}]
`
    }
}

class Teclado extends DispositivoEntrada{

    static contadorTeclados = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada,marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    get idTeclado(){
        return this._idTeclado;
    }
    toString(){
        return `
        Teclado: [ ID: ${this._idTeclado}, Tipo de Entrada: ${this._tipoEntrada}, Marca: ${this._marca}]   
        `
    }
}

let raton1 = new Raton('USB', 'HP');
let raton2 = new Raton('BT', 'HyperX');
console.log(raton2.toString());

let teclado1 = new Teclado('BT', 'Logitech');
let teclado2 = new Teclado('USB', 'Acer');
console.log(`${teclado1}`);
console.log(teclado2.toString());


class Monitor {
    static contadorMonitores = 0;

    constructor(marca, tamano){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamano = tamano
    }
    get idMonitor(){
        return this._idMonitor;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
    get tamano(){
        return this._tamano;
    }
    set tamano(tamano){
        this._tamano = tamano;
    }
    toString(){
        return `
        Monitor: [ID: ${this._idMonitor}, Marca: ${this._marca},Tamano: ${this._tamano}]
        `
    }
}

let monitor1 = new Monitor('Sentey', '24"');
console.log(monitor1.toString());

class Computadora {

    static contadorComputadoras = 0;

    //Relacion de AGREGACION con las otras clases - NO HERENCIA
    constructor(nombre, monitor, teclado, raton){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }
    get idComputadora(){
        return this._idComputadora;
    }
    toString(){
        return `

            Computadora: ID: ${this._idComputadora} - Nombre ${this._nombre}
            ${this._monitor} ${this._teclado} ${this._raton}`
    }
}

//Creamos 1 objeto tipo Computadora,
//Y pasamos las referencias de los objetos ya creados anteriormente
let computadora1 = new Computadora('Gamer', monitor1, teclado1, raton1);
console.log(`${computadora1}`);

let computadora2 = new Computadora('Armada', monitor1, teclado2, raton2);
console.log(`${computadora2}`);

class Orden {

    static contadorOrdenes = 0;

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }
    get idOrden(){
        return this._idOrden;
    }
    agregarComputadora(computadora){
            this._computadoras.push(computadora); 
    }
    mostrarOrden(){
        let computadorasOrden = '';
        for(let computadora of this._computadoras){
            computadorasOrden += `${computadora}`;
            //De esta manera se llama el metodo toString de Computadoras
        }
        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
    }
}

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora1);
orden1.mostrarOrden();
