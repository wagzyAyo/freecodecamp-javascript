class Vegetable {
    constructor(name) {
        this.name = name
    }
}

class Car {
    constructor(name, brand) {
        this.name = name;
        this.carBrand = brand;
        console.log(`New car arrive name is ${this.name} from top brand ${this.carBrand}`)
    }
}

const vegetable = new Vegetable(veg)
const car = new Car(Lambo2019, Lambogini)