var Car = /** @class */ (function () {
    function Car(engine, color) {
        this.engine = engine;
        this.color = color;
        console.log("Object created");
    }
    Car.prototype.buildEngine = function () {
        console.log("Building Engine");
        console.log("Name:", car.engine);
        console.log("Color:", car.color);
    };
    return Car;
}());
var car = new Car("BMW", "red");
car.buildEngine();
