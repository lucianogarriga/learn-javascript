class Producto {

    static contadorProductos = 0;

    constructor(nombre, precio){
        this._nombre = nombre;
        this._precio = precio;
        this._idProducto = ++Producto.contadorProductos;
    }

    get idProducto(){
        return this._idProducto;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio = precio;
    }
    toString(){
        return `
        ID: ${this._idProducto}, 
        Producto: ${this._nombre},   
        Precio: $ ${this._precio}  
        `
    }
}


class Orden {

    static contadorOrdenes = 0;
    //se recomienda MAYUS en el uso de CONST
    static get MAX_PRODUCTOS(){
        return 5;
    }
    //solo podremos agregar 5 productos al Array de Productos

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        //var con referencia a un Array vacio
        this._productos = [];
        //this._contadorProductosAgregados = 0;
    }

    get idOrden(){
        return this._idOrden;
    }
    //funcion para agregar un nuevo producto al array de productos[]
    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto); 
        }
        else{
            console.log('No se pueden agregar mas productos');
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        
        //recorrer el Array
        for(let producto of this._productos){
            totalVenta += producto.precio;
        }
        return totalVenta;
        //es la Var que tiene el total de las ventas (suma de precios)
    }

    mostrarOrden(){
        let productosOrden = '';
        for(let producto of this._productos){
            productosOrden += '\n{' + producto.toString() + '} ';
        }
        console.log(`Orden: ${this._idOrden} Total: ${this.calcularTotal()}, Productos: ${productosOrden}`);
    }
}

let producto1 = new Producto ('Caramelo', 1400);
let producto2 = new Producto('Carpeta', 1200);

let orden1 = new Orden();
//DIAGRAMA DE AGREGACION
//Los objetos tipo PRODUCTO pueden existir independientemente del tipo ORDEN
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto2);

orden1.mostrarOrden();

let orden2 = new Orden();
let producto3 = new Producto('Cinta', 250);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto3);

orden2.mostrarOrden();