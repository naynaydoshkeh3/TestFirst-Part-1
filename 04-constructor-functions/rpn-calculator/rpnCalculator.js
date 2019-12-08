/* eslint-disable no-unused-vars, no-throw-literal*/
const RPNCalculator = function () {

  this.total = 0;
  this.nums = [];
  //console.log(this.nums + " Before loop");
  
  //this.nums.push(4);


  
  //console.log(this.nums + " after loop");
};

//  is this needed i asumme
RPNCalculator.prototype.push = function(num) {
  
  
  // console.log(num + " in loop");
 
  this.nums.push(num);
 
  console.log(this.nums + " in push");

//this.total = num;

   //console.log(this.total + " in push");



};

 RPNCalculator.prototype.plus = function(){

  
  this.enoughNums();
  console.log(this.nums + " in plus");

  this.total = this.nums.pop() + this.nums.pop();
  this.nums.push(this.total);
  console.log(this.total + " total in plus");


};

RPNCalculator.prototype.minus = function(){

  console.log(this.nums + " in minus");
  this.enoughNums();

  this.total = -this.nums.pop() + this.nums.pop();
  this.nums.push(this.total);
  console.log(this.total + " total in minus");


};

RPNCalculator.prototype.times = function(){

  //console.log(this.nums + " in minus");
  this.enoughNums();
  this.total = this.nums.pop() * this.nums.pop();
  this.nums.push(this.total);
  //console.log(this.total + " total in minus");


};

RPNCalculator.prototype.divide = function(){

  //console.log(this.nums + " in minus");
  this.enoughNums();// probably a better way to do this
  this.total = 1/this.nums.pop() * this.nums.pop();
  this.nums.push(this.total);
  //console.log(this.total + " total in minus");


};

RPNCalculator.prototype.enoughNums = function(){
  if (this.nums.length === 0){
    throw 'rpnCalculatorInstance is empty';
  }
  
}

RPNCalculator.prototype.value = function(){
  return this.total;
}

  rpnCalculatorInstance = new RPNCalculator();

  //console.log(rpnCalculatorInstance);

  //rpnCalculatorInstance.push(2);