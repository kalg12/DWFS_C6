const API = 'https://jsonplaceholder.typicode.com/users'

const peticion = fetch(API)
.then(resultado => resultado.json())
.then(personasDelAPI => {
    console.log(personasDelAPI)
})
.catch(error => console.log(error))