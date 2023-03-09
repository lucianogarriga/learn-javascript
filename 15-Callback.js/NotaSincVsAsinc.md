# FUNCIONES CALLBACK (llamar de vuelta)

Se pasa una funcion como parametro de otra funcion, para re utilizarla dentro de esta. 

Dentro de la nueva funcion, se puede mandar a llamar la funcion que pasamos por paramametros.

## Principal objetivo de funciones CALLBACK

Que sean utilizadas en procesos que se ejecutan de manera ASINCRONA

- Sincronos = se ejecuta linea a linea, una a la vez (primero linea 1, luego 2, 3, 4, 5, etc.). 

- Asincronos = 
    * En las funciones callback, llamamos una funcion de la linea 10,  
    luego, dentro llama otra funcion de la linea 3; etc.  
    De esta manera CAMBIA EL FLUJO; es decir, se realiza un PROCESO POR SEPARADO,  
    mientras que la funcion llamada en primera linea puede seguir trabajando sin problemas. 
    
        Es decir, que en procesos ASINCRONOS se ejecutan varios procesos por separado a la vez.

<br>
 
## Llamadas asincronas con uso de setTimeOut()

Nos permite iniciar una nueva tarea.
Pasamos una funcion de tipo **callback** para que, una vez cumplido cierto tiempo, se dispare el llamado a la funcion de tipo **callback**.

Al establecer la llamada asincrona, dentro de sus parametros se coloca:
1- La funcion de tipo callback que queremos mandar a llamar,
(cuando establecemos la funcion como param, no es necesario colocar los () )
2- El tiempo que queremos que transcurra para su ejecucion.

```js
    function miFuncionCallback(){
    console.log('Saludo asincrono despues de 3 seg');
    }

    setTimeout(miFuncionCallback,3000);

    //Con Arrow Functions

    setTimeout( () => console.log('Saludo asincrono de 5 segundos'), 5000);
```

## Llamadas asincronas con uso de setInterval()

A diferencia de la anterior, en setInterval manda a llamar a determinada funcion varias veces, luego de transcurrir X cantidad de tiempo.

```js
    let reloj = () =>{
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`)
    }

    setInterval(reloj,1000);//1 seg
```