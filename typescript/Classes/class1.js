var Car = /** @class */ (function () {
    //constructor 
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.doPrint = function () {
        throw new Error("Method not implemented.");
    };
    //function 
    Car.prototype.disp = function () {
        console.log("Function displays Engine is  :   " + this.engine);
    };
    return Car;
}());
//create an object 
var obj = new Car("XXSY1");
//access the field 
console.log("Reading attribute value Engine as :  " + obj.engine);
//access the function
obj.disp();
