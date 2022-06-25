//crea un arreglo de 10 personas
let people = [
    {
        name: "Juan",
        age: 20
    },
    {
        name: "Pedro",
        age: 30
    },
    {
        name: "Maria",
        age: 40
    },
    {
        name: "Pablo",
        age: 50
    },
    {
        name: "Jorge",
        age: 60
    },
    {
        name: "Carlos",
        age: 70
    },
    {
        name: "Juan",
        age: 80
    },
    {
        name: "Pedro",
        age: 90
    },
    {
        name: "Maria",
        age: 100
    },
    {
        name: "Pablo",
        age: 110
    }
];

//haz un console.log de todos los nombres de las personas
console.log(people.map(person => person.name));