import { Vehicle } from './Vehicle';

export class FourWheeler implements Vehicle{
    getCost(): number {
        return 900000
    }
    getNoOfWheels(): number {
        return 4;
    }
    
}