var global_num = 12; //global variable 
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13; //class variable 
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14; //local variable 
    };
    Numbers.storeNum1 = function () {
        var local_num = 15; //local variable 
    };
    Numbers.sval = 10; //static field 
    return Numbers;
}());
console.log("Global num: " + global_num);
console.log(Numbers.sval); //static variable  
var obj = new Numbers();
obj.storeNum();
Numbers.storeNum1();
console.log("Global num: " + obj.num_val);
console.log("Global num: " + local_num);
