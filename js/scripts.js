
//Declaración de variables
const categoria = document.getElementById("categoriaDescuento");
const clickEstudiante = document.getElementById("cardEstudiante");
const clickTrainee = document.getElementById("cardTrainee");
const clickJunior = document.getElementById("cardJunior");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const cantidad = document.getElementById("cantidad");
const expRegularMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
const expRegularNombreApellido = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/;
const expRegularNumerosE = /^[0-9]+$/;
const botonEnviar = document.getElementById("enviar");
const botonBorrar = document.getElementById("borrar")
let nombreCorrecto = "";
let apellidoCorrecto = "";
let mailCorrecto = "";
let cantidadEntradas = 0
let valorEntrada = 0



//Este segmento de código corresponde a funciones y eventos referentes a relación Cards con select de pagina tickets 
function selectEstudiante() {
    document.getElementById("categoriaDescuento").value = "2";
}

function selectTrainne() {
    document.getElementById("categoriaDescuento").value = "3";
}

function selectJunior() {
    document.getElementById("categoriaDescuento").value = "4";
}

clickEstudiante.addEventListener("click", selectEstudiante);
clickTrainee.addEventListener("click", selectTrainne);
clickJunior.addEventListener("click", selectJunior);


//Este segmento de código corresponde a funciones y eventos referentes a Regex de campos formulario de pagina tickets
function validarNombre() {
    if (!expRegularNombreApellido.test(nombre.value)) {
        document.getElementById("errorNombre").innerHTML = "El nombre no es válido";

    } else {

        // document.getElementById("correctoNombre").innerHTML = "El nombre es válido";
        document.getElementById("errorNombre").innerHTML = "";
        nombreCorrecto = " - El nombre es válido"
    }
}

function validarApellido() {
    if (!expRegularNombreApellido.test(apellido.value)) {
        document.getElementById("errorApellido").innerHTML = "El apellido no es válido";

    } else {
        apellidoCorrecto = " - El apellido es válido";
        document.getElementById("errorApellido").innerHTML = "";
    }
}

function validarMail() {
    if (!expRegularMail.test(email.value)) {
        document.getElementById("errormail").innerHTML = "El correo no es válido";

    } else {
        mailCorrecto = " - El correo es válido";
        document.getElementById("errormail").innerHTML = "";
    }
}



botonEnviar.addEventListener("click", validarNombre);
botonEnviar.addEventListener("click", validarApellido);
botonEnviar.addEventListener("click", validarMail);


function camposCorrectos() {
    document.getElementById("camposCorrectos").innerHTML = nombreCorrecto + apellidoCorrecto + mailCorrecto;
}

botonEnviar.addEventListener("click", camposCorrectos);



/*Este segmento de código corresponde a funciones refentes a calculo de valor entradas segun categoria 
de formulario de pagina tickets*/

function precioEntradas() {
    if (document.getElementById("categoriaDescuento").value == 1) {
        cantidadEntradas = cantidad.valueAsNumber;
        valorEntrada = cantidadEntradas * 200;
        document.getElementById("campoTotalEntradas").innerHTML = "Total a Pagar: $ " + valorEntrada.toFixed(2) + "  (entrada de público general - no corresponde descuento)";
    } else if (document.getElementById("categoriaDescuento").value == 2) {
        cantidadEntradas = cantidad.valueAsNumber;
        valorEntrada = cantidadEntradas * 40;
        document.getElementById("campoTotalEntradas").innerHTML = "Total a Pagar: $ " + valorEntrada.toFixed(2) + "  (entrada categoría estudiante con descuento de 80% incluido)";

    } else if (document.getElementById("categoriaDescuento").value == 3) {
        cantidadEntradas = cantidad.valueAsNumber;
        valorEntrada = cantidadEntradas * 100;
        document.getElementById("campoTotalEntradas").innerHTML = "Total a Pagar: $ " + valorEntrada.toFixed(2) + "  (entrada categoría trainee con descuento de 50% incluido)";
    } else if (document.getElementById("categoriaDescuento").value == 4) {
        cantidadEntradas = cantidad.valueAsNumber;
        valorEntrada = cantidadEntradas * 170;
        document.getElementById("campoTotalEntradas").innerHTML = "Total a Pagar: $ " + valorEntrada.toFixed(2) + "  (entrada categoría junior con descuento de 15% incluido)";
    } else {
        document.getElementById("campoTotalEntradas").innerHTML = "Total a Pagar: ERROR EN OPERACIÓN";
    }
}

botonEnviar.addEventListener("click", precioEntradas);


//Este segmento de código corresponde a funcion de limpieza de campos de formulario de pagina tickets
function borrarCampos() {
    nombre.value = "";
    apellido.value = "";
    email.value = "";
    document.getElementById("errorNombre").innerHTML = "";
    document.getElementById("errorApellido").innerHTML = "";
    document.getElementById("errormail").innerHTML = "";
    document.getElementById("camposCorrectos").innerHTML = "";
    document.getElementById("campoTotalEntradas").innerHTML = "Total a Pagar: $ ";
    cantidad.valueAsNumber = 1


}

botonBorrar.addEventListener("click", borrarCampos)
