// Ejercicio: Uso del método find en JavaScript

// 1. Creamos un array de objetos que representan libros
const libros = [
    {id: 1, titulo: "El Quijote", autor: "Miguel de Cervantes", anyo: 1605, genero: "ficción"},
    {id: 2, titulo: "Cien años de soledad", autor: "Gabriel García Marquez", anyo: 1967},
    {id: 3, titulo: "1984", autor: "George Orwell", anyo: 1949},
    {id: 4, titulo: "Rayuela", autor: "Julio Cortazar", anyo: 1963},
    {id: 5, titulo: "Ficciones", autor: "Jorge Luis Borges", anyo: 1944},
];
//impedir que se modifiquen los objetos del array
libros.forEach(libro => {
    Object.freeze(libro);
});
//si modificamos algún valor del objeto no marca error pero no lo modifica
libros[0].id = 6;
console.log(libros[0].id);
// 2. Función para encontrar un libro por su ID
function encontrarLibroPorId(id){
    return libros.find(libro => libro.id === id);
}
console.log("Libro con ID 3:", encontrarLibroPorId(3));
console.log("Libro con ID 1:", encontrarLibroPorId(1));

// 3. Función para encontrar un libro por su título (ignorando mayúsculas/minúsculas)

//el método .toLowerCase() devuelve la cadena de caracteres en minúscula
function encontrarLibroPorTitulo(titulo){
    return libros.find(libro => libro.titulo.toLowerCase() === titulo.toLowerCase());
}
console.log("Libro titulado rayuela:", encontrarLibroPorTitulo("rayuela"));

// 4. Función para encontrar el primer libro de un autor específico
function encontrarLibroPorAutor(autor){
    return libros.find(libro => libro.autor.includes(autor));
}
console.log("Libro de Borges:", encontrarLibroPorAutor('Borges'));
//encuentra el primer libro de un autor específico ignorando mayúsculas y minúsculas
function encontrarLibroPorAutor2(autor){
    return libros.find(libro => libro.autor.toLowerCase().includes(autor.toLowerCase()));
}
console.log("Libro de Borges:", encontrarLibroPorAutor2('borges'));

// 5. Función para encontrar el primer libro publicado después de un año específico
function encontrarLibroDespuesAnyo(anyo){
    return libros.find(libro => libro.anyo > anyo);
}
console.log("Primer libro después de 1605:", encontrarLibroDespuesAnyo(1605));

// 6. Función para encontrar un libro que cumpla múltiples criterios
function encontrarLibroCriterios(criterios){
    return libros.find(libro => {  
        for(let propiedad in criterios){
            if(libro[propiedad] !== criterios[propiedad]){
                return false;
            }
        }
        return true;
    })
}
let criterios = {autor: "George Orwell", anyo: 1949};
let criterios2 = {id: "George Orwell", anyo: 1949};
let libroEncontrado = encontrarLibroCriterios(criterios);
console.log(libroEncontrado);

// 7. Intentar encontrar un libro que no existe

