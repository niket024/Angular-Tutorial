class Root { 
    str:string; 
 } 
 
 class Child extends Root {} 
 class Leaf extends Child {} //indirectly inherits from Root by virtue of inheritance  
 
 var obj = new Leaf(); 
 obj.str ="hello" 
 console.log(obj.str)