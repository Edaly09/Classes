// ## 1 - Batmobile

class Car {
    constructor(brand, speed){
        this.brand = brand
        this.speed = speed
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

// Création d'une nouvelle voiture RangeRover

const RangeRover = new Car("RangeRover", 360)

console.log(RangeRover)

RangeRover.accelerate(10)

console.log(RangeRover)

RangeRover.brake(30)

console.log(RangeRover)

RangeRover.describe()

console.log(RangeRover)

// Création d'une nouvelle voiture FORD

const ford = new Car("Ford", 0)

console.log(ford)

ford.accelerate(50)
console.log(ford)

ford.brake(25)
console.log(ford)

// Création d'une nouvelle voiture GMC

const GMC = new Car("GMC", 200)
console.log(GMC)

GMC.accelerate(50)
console.log(GMC)

GMC.brake(25)
console.log(GMC)

           