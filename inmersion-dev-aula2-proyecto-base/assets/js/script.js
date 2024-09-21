let listaNombresGastos = []; 
let listaValoresGastos = [];
let descripcion = [];
let modificacion = -1;
//esta accion se invoca al momento de que el usuario haga click en el boton


function clickBoton(){
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    let describir = document.getElementById('descripcion').value;



    if (valorGasto > 150) {
        alert('¡Alerta! Estás registrando un gasto mayor a $150.');
    }
    // si el valor es -1 no se cambian los numeros
    if (modificacion === -1) {
        listaNombresGastos.push(nombreGasto);
        listaValoresGastos.push(valorGasto);
        descripcion.push(describir);
    } else {
        listaNombresGastos[modificacion] = nombreGasto;
        listaValoresGastos[modificacion] = valorGasto;
        descripcion[modificacion] = describir;
        modificacion = -1;
    }
     

    
    console.log(listaNombresGastos);
    console.log(listaValoresGastos);
    console.log(descripcion);
    
    actualizarListaGastos();
}
    //alert('gastos de usuario')

    function actualizarListaGastos() {
        const listaElementos = document.getElementById('listaDeGastos');
        const totalElementos = document.getElementById('totalGastos');
        let htmlLista = '';
        let totalGastos = 0;
        listaNombresGastos.forEach((elemento , posicion) => {

            const valorGasto = Number(listaValoresGastos[posicion]);
            const razonar = (descripcion[posicion]);


            htmlLista += `<li>${elemento} - USD ${valorGasto.toFixed(2)} - Razon: ${razonar}
            <button onclick="eliminarGasto(${posicion});">Eliminar</button>
            <button onclick="modificarGasto(${posicion});">Modificar</button>
            </li>`;
            //calcula el total de los gastos//

            totalGastos += Number(valorGasto);
           
            
            console.log(valorGasto);
        });

        listaElementos.innerHTML = htmlLista;
        totalElementos.innerHTML = totalGastos.toFixed(2);
        limpiar();
    }


function limpiar(){
    nombreGasto = document.getElementById('nombreGasto').value = '';
    valorGasto = document.getElementById('valorGasto').value = '';
    describir = document.getElementById('descripcion').value = '';
}
function eliminarGasto(posicion) {
     listaNombresGastos.splice(posicion,1);
     listaValoresGastos.splice(posicion,1);

    
     
     actualizarListaGastos();
}
function modificarGasto(posicion) {
    document.getElementById('nombreGasto').value = listaNombresGastos[posicion];
    document.getElementById('valorGasto').value = listaValoresGastos[posicion];
    document.getElementById('descripcion').value = descripcion[posicion];

  
    modificacion = posicion;

    
}
 