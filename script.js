function Ingresar_Alumno () {
    let Alumno = {}
    Alumno.Nombre = prompt ("Ingrese el nombre del Alumno:")
    Alumno.Pais = prompt ("Cual es el país de origem del Alumno?")
    let Calificacion = prompt ("Calificacion obtenida por el Alumno?")
    Alumno.Calificacion = Number (Calificacion)
    return Alumno
}

let Alumnos_en_el_Concurso = []

while (true){
    Alumnos_en_el_Concurso.push (Ingresar_Alumno ())
    if (prompt ("Quiere agregar otro Alumno al Concurso? y/n")==="n"){
        break
    }
}


console.log (`Tenemos ${Alumnos_en_el_Concurso.length} concursantes y Los Alumnos de nuestro Concurso son:`)
console.table (Alumnos_en_el_Concurso)

//Seleccionaremos a los Alumnos con mayores Calificaciones del Concurso, ellos son:

let Mayor_Calificacion = 0;

for (let i=0; i < Alumnos_en_el_Concurso.length; i++){ //Aqui determino cual es la mayor Calificacion de los Alumnos del Concurso
    if(Alumnos_en_el_Concurso[i].Calificacion > Mayor_Calificacion){
        Mayor_Calificacion=Alumnos_en_el_Concurso[i].Calificacion
    }
}

let Alumnos_destacados = []; //Aqui hago un recuento de los Alumnos com mayores Calificaciones (en caso de tener mas de un ganador)

for (let i=0; i<Alumnos_en_el_Concurso.length;i++){ 
    if(Alumnos_en_el_Concurso[i].Calificacion===Mayor_Calificacion){
        Alumnos_destacados.push (Alumnos_en_el_Concurso[i].Nombre)
    }
}

//Ahora vamos imprimir los resultados, teniendo dos posibilidades: que solo exista un Alumno ganador; o varios Alumnos ganadores
let lista_ganadora = ""

if(Alumnos_destacados.length===1){
    console.log (`El Alumno con mayor calificacion es ${Alumnos_destacados[0]} con ${Mayor_Calificacion} De Calificacion`) //Solo um time
}
else{
    for (let i=0; i<Alumnos_destacados.length-1;i++){
    lista_ganadora = lista_ganadora + `${Alumnos_destacados[i]}, ` //podriamos imprimir aqui, pero voy a esperar para que sea mas visible el resultado
    }
}

    //Lista de competidores para el resultado final:
    if ((Alumnos_destacados.length>1)){
    lista_ganadora = lista_ganadora.slice(0, -2) + ` y ${Alumnos_destacados[Alumnos_destacados.length-1]}` 
    //Ahora retirare los últimos espaçios extra
    console.log (`Las Calificaciones mas destacadas: `+lista_ganadora+ ` con ${Mayor_Calificacion} Calificaciones`)
    }

    //MIS MENSAJES EN HTML

    function Mensages_en_HTML () {
    var Mensagens = document.querySelector ('div')
    var Mensagem1 = document.createElement ('p')
    Mensagem1.textContent = `Vamos a tener ${Alumnos_en_el_Concurso.length}  de Alumnos ganadores en nuestra Competencia, y ellos son:`
    Mensagens.appendChild (Mensagem1)
    
    //Lista de Alumnos
    var Mensagem_times = document.createElement ('p')
    let lista_de_alumnos = ""
    for (let i=0; i<Alumnos_en_el_Concurso.length-1;i++){
    lista_de_alumnos = lista_de_alumnos + `${Alumnos_en_el_Concurso[i].Nombre}, `
    }
    lista_de_alumnos = lista_de_alumnos.slice(0, -2) + ` e ${Alumnos_en_el_Concurso[Alumnos_en_el_Concurso.length-1].Nombre}` //Grupo final
    Mensagem_times.textContent = lista_de_alumnos
    Mensagens.appendChild (Mensagem_times)

    //Alumnos ganadores

    if (Alumnos_destacados.length===1){ //Solo um Alumno
        var Mensagem3 = document.createElement ('p')
        Mensagem3.textContent = `El o los Alumnos con mayor calificacion son: ${Alumnos_destacados[0]} con ${Mayor_Calificacion} puntos de Calificacion`
        Mensagens.appendChild (Mensagem3) 
    }
    else{
        var Mensagem4 = document.createElement ('p')
        Mensagem4.textContent = `El o los Alumnos con mayor calificacion son: `+lista_ganadora+ ` con ${Mayor_Calificacion} puntos de Calificacion`
        Mensagens.appendChild (Mensagem4) 
    }
           
    }