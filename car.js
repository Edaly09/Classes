// ## 1 - Batmobile

class car{
    constructor(brand, speed){
        this.brand = "RangeRover"
        this.speed = 50
    }
    accelerate (number){
    
        this.speed = this.speed + number


    }
    brake (number){
     
        this.brake = this.speed - number

    }
    describe(){

        this.describe = (`${this.brand} running at ${this.speed} km/h`)


    }
    
}

var RangeRover = new car("RangeRover")

console.log(RangeRover)

RangeRover.accelerate(10)

console.log(RangeRover)

RangeRover.brake(30)

console.log(RangeRover)

RangeRover.describe()

console.log(RangeRover)



// - Créer un fichier `car.js`
// - Dans car.js, créer un class `Car` avec 2 propriétés de base:
//     - `brand`
//     - `speed`
// - Ajouter 3 méthodes à la classe `Car`:
//     - `accelerate` (accélérer) qui prendra en paramètre un nombre. Cette méthode va ajouter le nombre a la propriété `speed` définie plus haut
//     - `brake` (freiner) qui prendra en paramètre un nombre. Cette méthode va soustraire le nombre à la propriété `speed` définie plus haut
//     - `describe` qui va afficher  `xxx running at yyy km/h` avec `brand` a la place de `xxx` et `speed` a la place de `yyy`
// - Créer une variable `ford` et  lui assigner l'initialisation de la classe avec la brand `ford` et speed `0` et afficher la variable ford dans la console
// - Exécuter la fonction `accelerate` de ford avec une vitesse de 50 km/h et afficher `ford` dans la console
// - Exécuter la fonction `brake` de ford avec une vitesse de 25 km/h et afficher `ford` dans la console
// - Faites la même chose avec une nouvelle voiture              