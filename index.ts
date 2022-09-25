//POINT 1

class account {
   amount: number = 0;
   holderName: string = "";
   creationDate: number = 0;

   constructor(amount: number, holderName: string, creationDate: number) {
      this.amount = amount;
      this.holderName = holderName;
      this.creationDate = creationDate;
   }

   entry(){
      return "here is your entry"
   }

   refund(){
      return "these are your refund"
   }

   transfer(){
      return "These are the details of your transfer"
   }

   

};

const user = new account(10000000, "Carlos Alvarez", 24/5/2002);

console.log(user.entry());
console.log(user.refund());
console.log(user.transfer());
 
//POINT 2

class counter {
   
   public number: number = 0;

   constructor(number: number){
      this.number = number;

   }

   increase(){
      return this.number++
   }

   decrease(){
      return this.number --
   }


};

const Number1 = new counter(20);

console.log (Number1.increase());
console.log (Number1.decrease());

// POINT 3

class complex {
   
   private product1: number = 0;
   private product2: number = 0;
   private result: number = 0; 


   constructor(product1: number, product2: number, result: number){
      this.product1 = product1;
      this.product2 = product2;
      this.result = result;
   }


add(){

   this.result = this.product1 + this.product2;
   return this.result;
}

subtract(){
   this.result = this.product1 - this.product2;
   return this.result;
}

multiply(){
   this.result = this.product1 * this.product2;
   return this.result;
}

split(){
   this.result = this.product1 / this.product2;
   return this.result;
}

};

const operation = new complex(50,25,0);

console.log(operation.add());
console.log(operation.subtract());
console.log(operation.multiply());
console.log(operation.split());

//POINT 4

class vehicle{
   brand: string = "";
   color: string = "";
   type: string = "";
   serialNumber: number = 0;

   constructor(brand: string, color: string, type: string, serialNumber: number){
      this.brand = brand;
      this.color = color;
      this.type = type;
      this.serialNumber = serialNumber;

   }

   turnOn(){
      return "you are in on mode"
   }

   startUp(){
      return "you are about to start"
   }

   turnOff(){
      return "you are in off mode"
   }

};

const van = new vehicle("mini cooper", "black", "sedan", 16543876500);

console.log(van.turnOn());
console.log(van.startUp());
console.log(van.turnOff());


class car extends vehicle{
   chassis: number = 0;
   registrationNumber: string = "";

   constructor(chassis:number, registrationNumber: string, color: string, type: string, quantydoor: string, speedMax: number){
      super(color, type, quantydoor, speedMax);
      this.chassis = chassis;
      this.registrationNumber = registrationNumber;
   }

   autoPilot(){
      return "your autopilot is activated"
   }

   reverse(){
      return "you are moving of reverse"
   }

};

const transports = new car(98756647, "TSC 655", "white", "van", "four", 188);

console.log(transports.autoPilot());
console.log(transports.reverse());


class motorcycle extends vehicle{
   type: string = "";
   times: string = "";

   constructor(type: string, times: string, color: string, typeMotor: string, chassis: string, cylinder: number){
      super(color, typeMotor, chassis, cylinder);
      this.type = type;
      this.times = times;
   }

   speedUp(){
      return "you are speeding too much"
   }

   change(){
      return "you are putting the wrong change"
   }
};

const transport1 = new motorcycle("inhard", "twotimes", "green", "doubleHead", "E6543W879", 1000);

console.log(transport1.speedUp());
console.log(transport1.change());


