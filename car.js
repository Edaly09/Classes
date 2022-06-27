// ## 1 - Batmobile

// class Car {
//     constructor(brand, speed){
//         this.brand = brand
//         this.speed = speed
//     }
//     accelerate = (number) =>{
    
//         this.speed = this.speed + number


//     }
//     brake = (number) =>{
     
//         this.brake = this.speed - number

//     }
//     describe = () =>{

//         this.describe = (`${this.brand} running at ${this.speed} km/h`)


//     }
   
    
// }

// // Création d'une nouvelle voiture RangeRover

// const RangeRover = new Car("RangeRover", 360)

// console.log(RangeRover)

// RangeRover.accelerate(10)

// console.log(RangeRover)

// RangeRover.brake(30)

// console.log(RangeRover)

// RangeRover.describe()

// console.log(RangeRover)

// // Création d'une nouvelle voiture FORD

// const ford = new Car("Ford", 0)

// console.log(ford)

// ford.accelerate(50)
// console.log(ford)

// ford.brake(25)
// console.log(ford)

// // Création d'une nouvelle voiture GMC

// const GMC = new Car("GMC", 200)
// console.log(GMC)

// GMC.accelerate(50)
// console.log(GMC)

// GMC.brake(25)
// console.log(GMC)


// ## 2 - TV

class TV{
    constructor(brand, channel,volume){
        this.brand = brand
        this.channel = channel
        this.volume = volume

    }

     AddVolume = (number) =>{

        this.volume= this.volume + number 

       if(this.volume > 100){

        this.volume = 100

       }
  
   
     return this.volume
 
    }
   
    TolowerVolum = (number) =>{

        this.volume = this.volume - number
        if(this.volume  < 0){
 
         this.volume = 0
 
        }
       
        return this.volume
    }
   reset = () => {


    this.volume  = 0
    this.channel = 0


   }
   describe = () =>{

   this.describe = (`Ma télévision a pour volume ${this.volume} et pour chaine ${this.channel}`)
   }
}


const samsung = new TV ("samsung", 50, 0)


console.log(samsung)
 
samsung.AddVolume(102)

console.log(samsung)

samsung.TolowerVolum(50)
console.log(samsung)

// samsung.reset()
// console.log(samsung)

samsung.describe()

console.log(samsung)




// - Créer une class `TV` avec les propriétés `brand`, `channel`, `volume`. La chaine par défaut sera 1, et le volume par défaut sera 50
// - Ajouter deux méthodes pour baisser et augmenter le volume. Le volume ne peut pas aller en dessous de 0, et pas au dessus de 100
// - Ajouter une méthode pour changer de chaine. Notre télé a seulement 50 chaines, si on essaye de changer une chaine au dessus de 50, on restera sur la chaine courante. Pareil pour une chaine en dessous de 0
// - Ajouter une méthode pour reset les paramètres de notre `TV`, qui remettra la chaine et le volume de base
// - Ajouter une méthode `describe` qui va afficher les infos de notre `TV`
// - Testez votre classe et ses méthodes avec différentes valeurs
           