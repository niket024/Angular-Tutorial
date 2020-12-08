interface ICar {
    engine: string;
    color: string;
    buildEngine(): void
}

class Car implements ICar {

    constructor(public engine: string, public color: string) {
        console.log("Object created")
    }
    buildEngine() {
        console.log("Building Engine")
        console.log("Name:", car.engine)
        console.log("Color:", car.color)
    }


}

var car = new Car("BMW", "red")
car.buildEngine()