var global_num = 12          //global variable 
class Numbers { 
   num_val = 13;             //class variable 
   static sval = 10;         //static field 
   
   storeNum():void { 
      console.log(Numbers.sval);
      console.log(this.num_val);
      var local_num = 14;    //local variable 
   } 
   static storeNum1():void { 
      console.log(Numbers.sval);
      var obj1 = new Numbers(); 
      console.log(obj1.num_val);

      var local_num = 15;    //local variable 
   } 
} 
console.log("Global num: "+global_num)  
console.log(Numbers.sval)   //static variable  
var obj = new Numbers(); 
obj.storeNum();
Numbers.storeNum1();
console.log("Global num: "+obj.num_val) 
//console.log("Global num: " + local_num);
