const API = 'https://jsonplaceholder.typicode.com'
const endPoint = '/users'

const urlAPI = `${API}${endPoint}`

const peticion = fetch(urlAPI)
.then(resultado => resultado.json())
.then(personasDelAPI => {
    console.log(personasDelAPI[0])
})
.catch(error => console.log(error))