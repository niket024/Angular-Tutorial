import { Vehicle } from './Vehicle';
import { TwoWheeler } from './TwoWheeler';
import { FourWheeler } from './FourWheeler';

class Manager{
    getDetails(vehicle:Vehicle){
        console.log("Cost:", vehicle.getCost())
        console.log("No. of Wheels:", vehicle.getNoOfWheels())
    }
   
}

var manager=new Manager();
console.log("Printting Two wheeler details")
manager.getDetails(new TwoWheeler())

console.log("Printting Four wheeler details")
manager.getDetails(new FourWheeler())