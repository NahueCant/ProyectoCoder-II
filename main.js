// Array lista
listaAlumnos = [];

// Constructor de objetos
class Alumnos {

    constructor(nombreAA, nota1AA, nota2AA, nota3AA, nota4AA, nota5AA){
        this.nombre = nombreAA,
        this.nota1 = nota1AA,
        this.nota2 = nota2AA,
        this.nota3 = nota3AA,
        this.nota4 = nota4AA,
        this.nota5 = nota5AA,
        this.promedio = calcularPromedio(nota1AA,nota2AA,nota3AA,nota4AA,nota5AA)
    }

}

// Guardado de datos para objeto
const guardarDatos = (n,n1,n2,n3,n4,n5) => {

    const alumno = new Alumnos ({nombreAA : n,
        nota1AA : n1,
        nota2AA : n2,
        nota3AA : n3,
        nota4AA : n4,
        nota5AA : n5})

    return alumno
}

// Calculador de promedio
function calcularPromedio(n1,n2,n3,n4,n5){
    let promedio = (n1 + n2 + n3 + n4 + n5) / 5;
    return promedio;
}

// Validado de Nota
let valCheck
function validarNota(nota){
    if (nota > 10 || nota < 1){
        valCheck++;
        valCheck++;
    } else {
        valCheck ++;
    }
}

// Evento Clickear guardar

$("#boton").click(() => {

    valCheck = 0;

    // Guardado de datos finales
    const nombreFinal = $("#Nombre").val();
    const nota1Final = Number($("#nota1").val());
    const nota2Final = Number($("#nota2").val());
    const nota3Final = Number($("#nota3").val());
    const nota4Final = Number($("#nota4").val());
    const nota5Final = Number($("#nota5").val());

    // Validacion
    validarNota(nota1Final);
    validarNota(nota2Final);
    validarNota(nota3Final);
    validarNota(nota4Final);
    validarNota(nota5Final);

    if(valCheck == 5){
        
    // Guardado de promedio
    const promedioFinal = calcularPromedio(nota1Final,nota2Final,nota3Final,nota4Final,nota5Final);
    
    // Se ejecuta el guardado al array
    guardarDatos(nombreFinal,nota1Final,nota2Final,nota3Final,nota4Final,nota5Final)

    // Agregado a la tabla
    $("#print").append(`<tr class="tableRow" style="display: none"><td>${nombreFinal}</td>
    <td>${nota1Final}</td><td>${nota2Final}</td>
    <td>${nota3Final}</td><td>${nota4Final}</td>
    <td>${nota5Final}</td><td><p class="promedio">${promedioFinal}</p></td></tr>`)
    
    //Animacion
    $(".tableRow").fadeIn("slow")

    // Simulado de Guardado API
    const URL = 'https://jsonplaceholder.typicode.com/posts' ;
    const infoPost =  { nombre: nombreFinal, promedio: promedioFinal }
    $.post(URL, infoPost ,(respuesta, estado) => {
        if(estado === "success"){
            console.log("Guardado exitoso: "+respuesta.nombre+", promedio de "+respuesta.promedio);
        } 
    })} else {alert("Usted ingreso una calificacion incorrecta")}
})