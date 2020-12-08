import { Vehicle } from './Vehicle';

export class TwoWheeler implements Vehicle{
    getCost(): number {
        return 100000
    }
    getNoOfWheels(): number {
        return 2;
    }
    
}