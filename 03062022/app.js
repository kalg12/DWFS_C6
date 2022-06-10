function obtenerObjetos(){
    let misDatos = localStorage.getItem("datos")

    console.log(JSON.parse(localStorage.getItem("datos")))

    let personaUno ={
        nombre:"Fernando",
        apellido: "Luciano",
        hobbie: "Futbol",
        correo: "keluciano.c03@ucamp.utel.edu.mx",
        edad: 27
    }

    

}


obtenerObjetos()

let arreglo = [];

function guardarObjeto(){

    let personaUno ={
        nombre:"Kevin",
        apellido: "Luciano",
        hobbie: "Futbol",
        correo: "keluciano.c03@ucamp.utel.edu.mx",
        edad: 27
    }

    let personaDos ={
        nombre:"Alejandro",
        apellido: "Garcia",
        hobbie: "Basquetball",
        correo: "correo@correo.com",
        edad: 30
    }

    let personaTres ={
        nombre:"Alejandro",
        apellido: "Garcia",
        hobbie: "Basquetball",
        correo: "correo@correo.com",
        edad: 30
    }

    let personaCuatro ={
        nombre:"Alejandro",
        apellido: "Garcia",
        hobbie: "Basquetball",
        correo: "correo@correo.com",
        edad: 30
    }

    let personaQuinta ={
        nombre:"Alejandro",
        apellido: "Garcia",
        hobbie: "Basquetball",
        correo: "correo@correo.com",
        edad: 30
    }

    let personaSexta ={
        nombre:"Fernando",
        apellido: "Garcia",
        hobbie: "Basquetball",
        correo: "correo@correo.com",
        edad: 30
    }

    let personaSeptima ={
        nombre:"Cesar",
        apellido: "Garcia",
        hobbie: "Basquetball",
        correo: "correo@correo.com",
        edad: 30
    }

    arreglo.push(personaUno)
    arreglo.push(personaDos)
    arreglo.push(personaTres)
    arreglo.push(personaCuatro)
    arreglo.push(personaQuinta)
    arreglo.push(personaSexta)
    arreglo.push(personaSeptima)


    localStorage.setItem("datos", JSON.stringify(arreglo));
}

guardarObjeto();