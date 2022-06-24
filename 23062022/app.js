import fetch from "node-fetch"; //https://stackabuse.com/making-http-requests-in-node-js-with-node-fetch/
const API = 'https://jsonplaceholder.typicode.com/users'; //colocamos una constante donde colocamos el url de la api


//funcion para obtener los datos de la api, recuerda que cuando se hace una peticion a la api se tiene que hacer con fetch
const getUsers = async () => {
    const response = await fetch(API);
    const data = await response.json();
    return data;
}

const anotherFn = async (miUrl) => {
    try {
        const usuarios = await getUsers();
        console.log(usuarios);
    }
    catch (error) {
        console.log(error);
    }
}

anotherFn(API);