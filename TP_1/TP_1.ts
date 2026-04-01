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

