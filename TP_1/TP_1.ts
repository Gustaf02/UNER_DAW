/**
 * Trabajo Práctico: Introducción a TypeScript
 * Tecnicatura Universitaria en Desarrollo Web - 2026
 * 
 * Integrantes: Santiago Carro
 *              walter frias
 *              Israel Leonardo Francisco Montiel
 *              Carlos Gustavo Ortiz
 *              Azucena Prieto
 */

// 1. Interfaz Animal
interface Animal {
    nombre: string;
    gritar(): string;
}

// 2. Clases que implementan la interfaz Animal
class Perro implements Animal {
    constructor(public nombre: string) {}
    gritar(): string {
        return "¡Guau!";
    }
}

class Gato implements Animal {
    constructor(public nombre: string) {}
    gritar(): string {
        return "¡Miau!";
    }
}

class Vaca implements Animal {
    constructor(public nombre: string) {}
    gritar(): string {
        return "¡Muuu!";
    }
}

// 3. Función describirAnimal
function describirAnimal(animal: Animal): void {
    console.log(`El animal ${animal.nombre} hace ${animal.gritar()}`);
}

// 4. Instancias de las clases con sus tipos correspondientes
const perro: Perro = new Perro("Rodolfo");
const vaca: Vaca = new Vaca("Lucinda");
const gato: Gato = new Gato("Gatico");

// 5.  Ejecutar  el  método  “describirAnimal”  para  cada  una  de  las  constantes  creadas  (3 
// veces en total). 
describirAnimal(perro);
describirAnimal(vaca);
describirAnimal(gato);


// 6.  Crear un Enum “DiasSemana” que tenga como valores los días de la semana. 
enum DiasSemana {
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo
};

// 7. Crear una variable que pueda contener valorrs tipo string o numero

let variable: number | string;
// asignar el string "Messi"
variable= "Messi";
console.log(variable);

// reemplazar con el numero 10
variable= 10;
console.log(variable);

// 8. Clase genérica que implementa la interfaz Fila<T>
interface Fila<T> {
    agregar(elemento: T): void;
    remover(): T | undefined;
}

class FilaGenerica<T> implements Fila<T> {
    private elementos: T[] = [];

    agregar(elemento: T): void {
        this.elementos.push(elemento);
    }

    remover(): T | undefined {
        return this.elementos.shift();
    }
}

